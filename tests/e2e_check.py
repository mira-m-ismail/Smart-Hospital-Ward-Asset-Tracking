"""Live check against the running stack (docker compose up). Stdlib only.
Usage: python tests/e2e_check.py [seconds]   -> prints the success-metric table for the report."""
import json, sys, time, urllib.request
API = "http://localhost:8000/api"
get = lambda p: json.load(urllib.request.urlopen(API + p, timeout=5))
dur = int(sys.argv[1]) if len(sys.argv) > 1 else 60
print("health:", get("/health"))
print(f"observing {dur}s ..."); time.sleep(dur)
m, s = get("/metrics"), get("/state")
print(json.dumps(m, indent=2))
print("assets tracked:", len(s["assets"]), "| rooms:", len(s["rooms"]), "| active alerts:", s["kpis"]["activeAlerts"])
print("asset locations:", {a["id"]: a["room"] for a in s["assets"]})
g = get("/graph"); print("graph nodes/edges:", len(g["nodes"]), len(g["edges"]))
ok = m["messagesReceived"] > 0 and m["latencyMs"]["avg"] is not None and len(g["nodes"]) > 20
print("RESULT:", "PASS" if ok else "FAIL"); sys.exit(0 if ok else 1)
