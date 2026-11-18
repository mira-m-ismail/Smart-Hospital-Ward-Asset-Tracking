import json, os, threading, time, uuid
from collections import defaultdict, deque
from contextlib import asynccontextmanager

import numpy as np
import paho.mqtt.client as mqtt
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from neo4j import GraphDatabase
from sklearn.linear_model import LinearRegression

MQTT_HOST = os.getenv("MQTT_HOST", "localhost")
MG_HOST = os.getenv("MG_HOST", "localhost")
driver = GraphDatabase.driver(f"bolt://{MG_HOST}:7687", auth=("", ""))


def run(q, **p):
    with driver.session() as s:
        return [r.data() for r in s.run(q, **p)]


# ---------- Inventory (must match the simulator) ----------
ROOMS = [("R101", "Room 101", "patient"), ("R102", "Room 102", "patient"),
         ("R103", "Room 103", "patient"), ("R104", "Room 104", "patient"),
         ("STORE", "Equipment Store", "storage")]
PATIENTS = [("P-001", "R101"), ("P-002", "R102"), ("P-003", "R103"), ("P-004", "R104")]
ASSETS = [  # id, label, initial room, assigned patient
    ("PUMP-01", "InfusionPump", "R101", "P-001"), ("PUMP-02", "InfusionPump", "R102", "P-002"),
    ("PUMP-03", "InfusionPump", "R103", "P-003"), ("PUMP-04", "InfusionPump", "R104", "P-004"),
    ("VENT-01", "Ventilator", "R101", "P-001"), ("VENT-02", "Ventilator", "R102", "P-002"),
    ("WC-01", "Wheelchair", "STORE", None), ("WC-02", "Wheelchair", "R103", None),
    ("WC-03", "Wheelchair", "STORE", None)]
ROOM_IDS = {r[0] for r in ROOMS}
ASSET_KIND = {a[0]: a[1] for a in ASSETS}

# ---------- In-memory state ----------
series = defaultdict(lambda: deque(maxlen=300))   # recent time-series per entity
latest = defaultdict(dict)                         # merged latest values per entity
last_seen, location = {}, {a[0]: a[2] for a in ASSETS}
active = {}                                        # (entity, rule) -> alert id
util = defaultdict(lambda: [0, 0])                 # wheelchair in-use samples / total
stats = {"received": 0, "rejected": 0, "dropped_fields": 0}
lock = threading.Lock()

RANGES = {"temperature": (5, 50), "humidity": (0, 100), "co2": (300, 5000),
          "battery": (0, 100), "flow_rate": (0, 500), "remaining_ml": (0, 2000),
          "respiratory_rate": (0, 60), "tidal_volume": (0, 1500)}


def wait_for_graph():
    for _ in range(60):
        try:
            run("RETURN 1"); return
        except Exception:
            time.sleep(2)
    raise RuntimeError("Memgraph unreachable")


def seed():
    """Build the ontology instance: Ward -> Rooms -> Sensors, Patients, Assets."""
    run("MATCH (n) DETACH DELETE n")
    run("CREATE (:Ward {id:'W1', name:'Ward 3 North', floor:3})")
    for rid, name, typ in ROOMS:
        run("MATCH (w:Ward {id:'W1'}) CREATE (w)-[:CONTAINS]->"
            "(:Room {id:$id, name:$name, type:$typ, alertStatus:false, comfortIndex:100.0})",
            id=rid, name=name, typ=typ)
        if typ == "patient":
            run("MATCH (r:Room {id:$rid}) CREATE (r)-[:HAS_SENSOR]->(:EnvSensor {id:$sid})",
                rid=rid, sid=f"ENV-{rid}")
    for pid, rid in PATIENTS:
        run("MATCH (r:Room {id:$rid}) CREATE (:Patient {id:$pid})-[:ADMITTED_TO]->(r)", rid=rid, pid=pid)
    for aid, label, rid, pid in ASSETS:
        run(f"MATCH (r:Room {{id:$rid}}) CREATE (a:Asset:{label} "
            "{id:$aid, alertStatus:false, online:true})-[:LOCATED_IN]->(r)", rid=rid, aid=aid)
        if pid:
            run("MATCH (a:Asset {id:$aid}), (p:Patient {id:$pid}) CREATE (a)-[:ASSIGNED_TO]->(p)",
                aid=aid, pid=pid)


# ---------- Cleaning / transformation ----------
def clean(d):
    d = dict(d)
    if "temp_f" in d:                                   # unit normalisation: F -> C
        v = d.pop("temp_f")
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            d["temperature"] = round((v - 32) * 5 / 9, 2)
    out = {}
    for k, v in d.items():
        if k in RANGES:                                 # validation: type + plausible range
            ok = isinstance(v, (int, float)) and not isinstance(v, bool) and RANGES[k][0] <= v <= RANGES[k][1]
            if not ok:
                stats["dropped_fields"] += 1
                continue
        out[k] = v
    return out


# ---------- Alerts ----------
def set_alert(eid, rule, on, msg="", sev="warning"):
    key = (eid, rule)
    if on and key not in active:
        aid = uuid.uuid4().hex[:8]
        active[key] = aid
        run("MATCH (e {id:$eid}) CREATE (a:Alert {id:$aid, rule:$rule, message:$msg, severity:$sev, "
            "active:true, ts:$ts})-[:RAISED_FOR]->(e)", eid=eid, aid=aid, rule=rule, msg=msg, sev=sev, ts=time.time())
    elif not on and key in active:
        run("MATCH (a:Alert {id:$aid}) SET a.active=false, a.resolvedTs=$ts", aid=active.pop(key), ts=time.time())


# ---------- Analytics ----------
def analyze_room(rid, p):
    t, h, c = p.get("temperature"), p.get("humidity"), p.get("co2")
    rules = {
        "TEMP_HIGH": (t is not None and t > 26, f"Temperature {t}°C above 26°C", "warning"),
        "TEMP_LOW": (t is not None and t < 19, f"Temperature {t}°C below 19°C", "warning"),
        "HUMIDITY_HIGH": (h is not None and h > 60, f"Humidity {h}% above 60%", "warning"),
        "CO2_HIGH": (c is not None and c > 1000, f"CO2 {c} ppm above 1000", "critical"),
    }
    for rule, (on, msg, sev) in rules.items():
        set_alert(rid, rule, on, msg, sev)
    penalty = (abs(t - 22) * 5 if t is not None else 0) + (max(0, h - 50) * 0.5 if h is not None else 0) \
        + (max(0, c - 800) * 0.05 if c is not None else 0)
    return {"comfortIndex": round(max(0, 100 - penalty), 1),                 # derived property
            "alertStatus": any(v[0] for v in rules.values())}


def battery_eta(aid):
    """ML: linear regression on recent battery readings -> minutes until 10%."""
    pts = []
    for x in series[aid]:
        if "battery" in x:
            if pts and x["battery"] > pts[-1][1] + 1:   # recharge/swap -> restart the window
                pts = []
            pts.append((x["ts"], x["battery"]))
    pts = pts[-30:]
    if len(pts) < 8:
        return None
    X = np.array([[p[0] - pts[0][0]] for p in pts]); y = np.array([p[1] for p in pts])
    slope = LinearRegression().fit(X, y).coef_[0]       # % per second
    if slope >= -1e-4:
        return None
    return round(max(0, (pts[-1][1] - 10) / -slope / 60), 1)


def analyze_asset(aid, kind, p):
    d, rules = {}, {}
    b = p.get("battery")
    if b is not None:
        eta = battery_eta(aid)
        if eta is not None:
            d["batteryEtaMin"] = eta
        rules["BATTERY_LOW"] = (b < 20, f"Battery at {b}%", "warning")
        rules["BATTERY_PREDICTED"] = (eta is not None and eta < 2, f"Predicted to hit 10% in {eta} min", "warning")
    if kind == "InfusionPump":
        rem, flow = p.get("remaining_ml"), p.get("flow_rate")
        if rem is not None and flow:
            d["timeToEmptyMin"] = round(rem / flow * 60, 1)
            rules["INFUSION_LOW"] = (d["timeToEmptyMin"] < 10, f"Bag empty in {d['timeToEmptyMin']} min*", "critical")
        rules["OCCLUSION"] = (p.get("occlusion") is True, "Line occlusion detected", "critical")
    if kind == "Ventilator":
        rr = p.get("respiratory_rate")
        rules["RR_ABNORMAL"] = (rr is not None and not 10 <= rr <= 25, f"Respiratory rate {rr}", "critical")
    if kind == "Wheelchair" and "in_use" in p:
        u = util[aid]; u[1] += 1; u[0] += int(p["in_use"])
        d["utilization"] = round(100 * u[0] / u[1], 1)
    for rule, (on, msg, sev) in rules.items():
        set_alert(aid, rule, on, msg, sev)
    set_alert(aid, "OFFLINE", False)
    d["alertStatus"] = any(v[0] for v in rules.values())
    return d


# ---------- MQTT ingestion ----------
def handle(topic, payload):
    parts = topic.split("/")                      # hospital/ward1/<room|asset>/<id>/<stream>
    if len(parts) < 5:
        return
    kind, eid = parts[2], parts[3]
    try:
        raw = json.loads(payload)
        assert isinstance(raw, dict)
    except Exception:
        stats["rejected"] += 1; return
    stats["received"] += 1
    now = time.time()
    p = clean(raw)
    with lock:
        rid = p.pop("room_id", None)
        latest[eid].update(p)
        series[eid].append({"ts": now, **p})
        last_seen[eid] = now
        if kind == "room" and eid in ROOM_IDS:
            props = {**p, **analyze_room(eid, latest[eid]), "lastUpdate": now}
            run("MATCH (r:Room {id:$id}) SET r += $props", id=eid, props=props)
        elif kind == "asset" and eid in ASSET_KIND:
            props = {**p, **analyze_asset(eid, ASSET_KIND[eid], latest[eid]), "online": True, "lastUpdate": now}
            run("MATCH (a:Asset {id:$id}) SET a += $props", id=eid, props=props)
            if rid in ROOM_IDS and location.get(eid) != rid:      # asset moved -> rewire relationship
                location[eid] = rid
                run("MATCH (a:Asset {id:$id})-[l:LOCATED_IN]->() DELETE l WITH a "
                    "MATCH (r:Room {id:$rid}) CREATE (a)-[:LOCATED_IN]->(r)", id=eid, rid=rid)


def watchdog():
    while True:
        time.sleep(5)
        with lock:
            for eid, ts in list(last_seen.items()):
                if eid in ASSET_KIND and time.time() - ts > 30:
                    set_alert(eid, "OFFLINE", True, "No telemetry for 30 s", "critical")
                    run("MATCH (a:Asset {id:$id}) SET a.online=false", id=eid)


@asynccontextmanager
async def lifespan(app):
    wait_for_graph(); seed()
    c = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    c.on_connect = lambda cl, u, f, rc, pr=None: cl.subscribe("hospital/ward1/#")
    def on_msg(cl, u, m):
        try: handle(m.topic, m.payload)
        except Exception as e: print("handler error:", e, flush=True)
    c.on_message = on_msg
    for _ in range(30):
        try: c.connect(MQTT_HOST, 1883); break
        except OSError: time.sleep(2)
    c.loop_start()
    threading.Thread(target=watchdog, daemon=True).start()
    yield
    c.loop_stop()


app = FastAPI(lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


# ---------- REST API ----------
@app.get("/api/state")
def state():
    rooms = [r["p"] for r in run("MATCH (r:Room) RETURN properties(r) AS p ORDER BY r.id")]
    assets = []
    for r in run("MATCH (a:Asset) OPTIONAL MATCH (a)-[:LOCATED_IN]->(r:Room) "
                 "RETURN properties(a) AS p, labels(a) AS l, r.id AS room ORDER BY a.id"):
        assets.append({**r["p"], "type": [x for x in r["l"] if x != "Asset"][0], "room": r["room"]})
    alerts = [{**a["p"], "entity": a["entity"]} for a in run(
        "MATCH (a:Alert)-[:RAISED_FOR]->(e) RETURN properties(a) AS p, e.id AS entity ORDER BY a.ts DESC LIMIT 30")]
    pr = [r for r in rooms if r.get("type") == "patient"]
    wcs = [a for a in assets if a["type"] == "Wheelchair" and "utilization" in a]
    kpis = {
        "activeAlerts": sum(1 for a in alerts if a.get("active")),
        "avgComfort": round(sum(r.get("comfortIndex", 100) for r in pr) / max(1, len(pr)), 1),
        "assetAvailability": round(100 * sum(1 for a in assets if a.get("online") and not a.get("alertStatus")) / max(1, len(assets)), 1),
        "wheelchairUtil": round(sum(a["utilization"] for a in wcs) / len(wcs), 1) if wcs else 0,
        **stats,
    }
    return {"rooms": rooms, "assets": assets, "alerts": alerts, "kpis": kpis}


@app.get("/api/graph")
def graph():
    nodes = [{"id": n["id"], "label": [l for l in n["labels"] if l != "Asset"][0], "name": n["props"].get("id"),
              "props": n["props"]} for n in run(
        "MATCH (n) WHERE NOT n:Alert OR n.active = true RETURN id(n) AS id, labels(n) AS labels, properties(n) AS props")]
    edges = run("MATCH (a)-[e]->(b) WHERE (NOT a:Alert OR a.active = true) "
                "RETURN id(a) AS source, id(b) AS target, type(e) AS type")
    return {"nodes": nodes, "edges": edges}


@app.get("/api/timeseries/{eid}")
def timeseries(eid: str):
    return list(series[eid])[-120:]