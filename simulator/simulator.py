import json, os, random, time
import paho.mqtt.client as mqtt

HOST, TICK = os.getenv("MQTT_HOST", "localhost"), 2
ROOMS = ["R101", "R102", "R103", "R104"]
PUMPS = {"PUMP-01": "R101", "PUMP-02": "R102", "PUMP-03": "R103", "PUMP-04": "R104"}
VENTS = {"VENT-01": "R101", "VENT-02": "R102"}
WCS = {"WC-01": "STORE", "WC-02": "R103", "WC-03": "STORE"}

client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
for _ in range(30):
    try:
        client.connect(HOST, 1883); break
    except OSError:
        time.sleep(2)
client.loop_start()


def pub(topic, payload):
    payload = {**payload, "sent_ts": time.time()}            # lets the twin measure end-to-end latency
    if random.random() < 0.005:                              # inject a corrupt (non-JSON) message to test rejection
        client.publish(f"hospital/ward1/{topic}", "{corrupt-payload")
        return
    client.publish(f"hospital/ward1/{topic}", json.dumps(payload))


env = {r: {"t": 22 + random.uniform(-1, 1), "h": 45 + random.uniform(-5, 5),
           "c": 600 + random.uniform(-50, 50), "spike": 0} for r in ROOMS}
pump = {p: {"batt": random.uniform(35, 100), "ml": random.uniform(200, 800),
            "flow": random.choice([50, 75, 100, 125])} for p in PUMPS}
vent = {v: {"batt": random.uniform(50, 100)} for v in VENTS}
start = time.time()

while True:
    # Room environment (R104's sensor reports Fahrenheit on purpose -> tests unit conversion)
    for r, s in env.items():
        if s["spike"] == 0 and random.random() < 0.004:      # raise for more frequent demo alerts
            s["spike"] = 20
        if s["spike"] > 0:
            s["spike"] -= 1; s["t"] += 0.4; s["c"] += 60; s["h"] += 0.5
        s["t"] += (22 - s["t"]) * 0.05 + random.gauss(0, 0.1)
        s["h"] += (45 - s["h"]) * 0.05 + random.gauss(0, 0.2)
        s["c"] += (600 - s["c"]) * 0.05 + random.gauss(0, 5)
        temp = s["t"]
        if random.random() < 0.03:                           # inject faulty readings
            temp = random.choice([None, 999])
        msg = {"humidity": round(s["h"], 1), "co2": round(s["c"])}
        if r == "R104":
            msg["temp_f"] = None if temp is None else round(temp * 9 / 5 + 32, 1)
        else:
            msg["temperature"] = None if temp is None else round(temp, 2)
        pub(f"room/{r}/env", msg)

    # Infusion pumps (time-compressed: batteries/bags drain in minutes, not hours)
    for p, room in PUMPS.items():
        s = pump[p]
        s["batt"] -= 0.4
        s["ml"] -= s["flow"] / 3600 * TICK * 60
        if s["batt"] < 5: s["batt"] = 100                    # nurse swaps battery
        if s["ml"] <= 0: s["ml"] = random.uniform(300, 800)  # new bag
        pub(f"asset/{p}/telemetry", {"room_id": room, "battery": round(s["batt"], 1),
            "remaining_ml": round(s["ml"], 1), "flow_rate": s["flow"], "occlusion": random.random() < 0.01})

    # Ventilators
    for v, room in VENTS.items():
        s = vent[v]
        s["batt"] -= 0.15
        if s["batt"] < 5: s["batt"] = 100
        rr = 32 if random.random() < 0.02 else random.gauss(16, 1.5)
        pub(f"asset/{v}/telemetry", {"room_id": room, "battery": round(s["batt"], 1),
            "respiratory_rate": round(rr, 1), "tidal_volume": round(random.gauss(450, 15))})

    # Wheelchairs (location = room beacon; WC-03 goes silent periodically to trigger OFFLINE)
    for w in WCS:
        if w == "WC-03" and 60 < (time.time() - start) % 180 < 100:
            continue
        if random.random() < 0.05:
            WCS[w] = random.choice(ROOMS + ["STORE"])
        pub(f"asset/{w}/telemetry", {"room_id": WCS[w],
            "in_use": WCS[w] != "STORE" and random.random() < 0.7})

    time.sleep(TICK)