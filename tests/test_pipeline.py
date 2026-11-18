"""Offline validation of the twin's processing logic (cleaning, rules, derived properties, ML).

Runs without Docker: the graph driver, MQTT client and FastAPI are replaced by stubs, so only
numpy + scikit-learn are required.   Usage (from repo root):  python tests/test_pipeline.py
"""
import json, os, sys, time, types
from unittest import mock

for name in ["neo4j", "paho", "paho.mqtt", "paho.mqtt.client", "fastapi", "fastapi.middleware", "fastapi.middleware.cors"]:
    sys.modules.setdefault(name, mock.MagicMock())
sys.modules["neo4j"].GraphDatabase = mock.MagicMock()
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import main  # noqa: E402

queries = []
main.run = lambda q, **p: queries.append((q, p)) or []
results = []


def check(name, cond):
    results.append((name, bool(cond)))
    print(("PASS " if cond else "FAIL ") + name)


# --- 1. cleaning / transformation -------------------------------------------------------------
check("F->C conversion (71.6F = 22.0C)", main.clean({"temp_f": 71.6}) == {"temperature": 22.0})
check("out-of-range temperature (999) dropped", "temperature" not in main.clean({"temperature": 999}))
check("null temperature dropped", "temperature" not in main.clean({"temperature": None}))
check("string value dropped", "co2" not in main.clean({"co2": "high"}))
check("bool is not accepted as a number", "battery" not in main.clean({"battery": True}))
check("valid humidity/co2 kept", main.clean({"humidity": 45.0, "co2": 600}) == {"humidity": 45.0, "co2": 600})
check("dropped-field counter incremented", main.stats["dropped_fields"] >= 4)

# --- 2. rule engine (room) ---------------------------------------------------------------------
queries.clear(); main.active.clear()
d = main.analyze_room("R101", {"temperature": 30, "humidity": 45, "co2": 600})
check("temperature 30C raises TEMP_HIGH", ("R101", "TEMP_HIGH") in main.active and d["alertStatus"] is True)
check("comfortIndex lowered when too hot", d["comfortIndex"] < 100)
d = main.analyze_room("R101", {"temperature": 22, "humidity": 45, "co2": 600})
check("alert auto-resolves when normal", ("R101", "TEMP_HIGH") not in main.active and d["alertStatus"] is False)
d = main.analyze_room("R102", {"temperature": 22, "humidity": 45, "co2": 1400})
check("CO2 1400ppm raises critical CO2_HIGH", ("R102", "CO2_HIGH") in main.active)
check("no duplicate alert while condition persists",
      (main.analyze_room("R102", {"temperature": 22, "humidity": 45, "co2": 1500}), len([k for k in main.active if k == ("R102", "CO2_HIGH")]))[1] == 1)

# --- 3. asset rules -----------------------------------------------------------------------------
main.active.clear()
d = main.analyze_asset("PUMP-01", "InfusionPump", {"battery": 80, "remaining_ml": 10, "flow_rate": 100, "occlusion": False})
check("pump bag nearly empty -> INFUSION_LOW", ("PUMP-01", "INFUSION_LOW") in main.active and d["timeToEmptyMin"] == 6.0)
d = main.analyze_asset("PUMP-02", "InfusionPump", {"battery": 80, "remaining_ml": 500, "flow_rate": 100, "occlusion": True})
check("occlusion -> OCCLUSION alert", ("PUMP-02", "OCCLUSION") in main.active)
d = main.analyze_asset("VENT-01", "Ventilator", {"battery": 80, "respiratory_rate": 32})
check("respiratory rate 32 -> RR_ABNORMAL", ("VENT-01", "RR_ABNORMAL") in main.active)
d = main.analyze_asset("VENT-01", "Ventilator", {"battery": 80, "respiratory_rate": 16})
check("respiratory rate 16 resolves RR_ABNORMAL", ("VENT-01", "RR_ABNORMAL") not in main.active)
d = main.analyze_asset("PUMP-03", "InfusionPump", {"battery": 12, "remaining_ml": 500, "flow_rate": 100})
check("battery 12% -> BATTERY_LOW", ("PUMP-03", "BATTERY_LOW") in main.active)
for i in range(10):
    d = main.analyze_asset("WC-01", "Wheelchair", {"in_use": i < 3})
check("wheelchair utilization = 30%", d["utilization"] == 30.0)

# --- 4. ML battery forecast ---------------------------------------------------------------------
main.series["PUMP-09"].clear()
t0 = time.time()
for i in range(20):      # battery falls 0.2 %/s from 60% -> predicts (current-10)/0.2 s
    main.series["PUMP-09"].append({"ts": t0 + i, "battery": 60 - 0.2 * i})
eta = main.battery_eta("PUMP-09")
expected = round((60 - 0.2 * 19 - 10) / 0.2 / 60, 1)
check(f"linear-regression ETA correct (got {eta} min, expected {expected})", eta == expected)
main.series["PUMP-10"].clear()
for i in range(20):
    main.series["PUMP-10"].append({"ts": t0 + i, "battery": 50.0})
check("flat battery -> no ETA", main.battery_eta("PUMP-10") is None)

# --- 5. MQTT handler end to end (topic parsing, rejection, graph writes, asset relocation) -------
queries.clear(); main.stats.update(received=0, rejected=0)
main.handle("hospital/ward1/room/R101/env", b"{corrupt")
check("malformed JSON rejected", main.stats["rejected"] == 1 and main.stats["received"] == 0)
main.handle("hospital/ward1/room/R104/env", json.dumps({"temp_f": 77, "humidity": 50, "co2": 700, "sent_ts": time.time()}).encode())
check("Fahrenheit room payload written to graph as Celsius",
      any(p.get("props", {}).get("temperature") == 25.0 for _, p in queries))
check("latency sample recorded", len(main.latencies) == 1)
queries.clear()
main.handle("hospital/ward1/asset/WC-01/telemetry", json.dumps({"room_id": "R102", "in_use": True}).encode())
check("asset moving STORE->R102 rewires LOCATED_IN", any("DELETE l" in q for q, _ in queries) and main.location["WC-01"] == "R102")
main.handle("hospital/ward1/asset/UNKNOWN-9/telemetry", b'{"battery": 50}')
check("unknown asset id never written to graph", not any(p.get("id") == "UNKNOWN-9" for _, p in queries))

failed = [n for n, ok in results if not ok]
print(f"\n{len(results) - len(failed)}/{len(results)} checks passed")
sys.exit(1 if failed else 0)
