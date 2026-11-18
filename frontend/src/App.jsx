import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ForceGraph2D from "react-force-graph-2d";
import "./App.css";

const API = "http://localhost:8000/api";
const COLORS = { Ward: "#6366f1", Room: "#0ea5e9", EnvSensor: "#94a3b8", Patient: "#22c55e",
  InfusionPump: "#f59e0b", Ventilator: "#ef4444", Wheelchair: "#a855f7", Alert: "#dc2626" };
const ICON = { InfusionPump: "💉", Ventilator: "🫁", Wheelchair: "♿" };

function usePoll(url, ms = 2000) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let on = true;
    const f = () => fetch(url).then(r => r.json()).then(j => on && setData(j)).catch(() => {});
    f();
    const t = setInterval(f, ms);
    return () => { on = false; clearInterval(t); };
  }, [url, ms]);
  return data;
}

const Kpi = ({ label, value }) => (
  <div className="kpi"><div className="kpi-v">{value}</div><div className="kpi-l">{label}</div></div>
);

export default function App() {
  const state = usePoll(`${API}/state`);
  const graph = usePoll(`${API}/graph`, 5000);
  const [sel, setSel] = useState("R101");
  const [metric, setMetric] = useState("temperature");
  const series = usePoll(`${API}/timeseries/${sel}`) || [];

  const last = series[series.length - 1] || {};
  const keys = Object.keys(last).filter(k => k !== "ts" && typeof last[k] === "number");
  const m = keys.includes(metric) ? metric : keys[0];
  const chartData = series.map(p => ({ ...p, time: new Date(p.ts * 1000).toLocaleTimeString() }));

  const gdata = useMemo(() => graph
    ? { nodes: graph.nodes.map(n => ({ ...n })), links: graph.edges.map(e => ({ ...e })) }
    : { nodes: [], links: [] },
    // eslint-disable-next-line
    [graph && `${graph.nodes.length}-${graph.edges.length}`]);

  if (!state) return <div className="loading">Connecting to the digital twin…</div>;
  const { rooms, assets, alerts, kpis } = state;
  const ids = [...rooms.filter(r => r.type === "patient").map(r => r.id), ...assets.map(a => a.id)];

  return (
    <div className="app">
      <header><h1>🏥 Ward 3 North, Digital Twin</h1><span className="live">● LIVE</span></header>

      <section className="kpis">
        <Kpi label="Active alerts" value={kpis.activeAlerts} />
        <Kpi label="Avg room comfort index" value={kpis.avgComfort} />
        <Kpi label="Asset availability %" value={kpis.assetAvailability} />
        <Kpi label="Wheelchair utilization %" value={kpis.wheelchairUtil} />
        <Kpi label="Messages received" value={kpis.received} />
        <Kpi label="Avg latency (ms)" value={kpis.latencyAvgMs} />
<Kpi label="Corrupt msgs rejected" value={kpis.rejected} />
        <Kpi label="Bad fields dropped" value={kpis.dropped_fields} />
      </section>

      <div className="grid">
        <section className="card">
          <h2>Ward floor (click an item to chart it)</h2>
          <div className="rooms">
            {rooms.map(r => (
              <div key={r.id} className={`room ${r.alertStatus ? "bad" : ""}`} onClick={() => setSel(r.id)}>
                <b>{r.name}</b>
                {r.type === "patient" && (
                  <div className="env">
                    {r.temperature?.toFixed(1) ?? "–"}°C · {r.humidity?.toFixed(0) ?? "–"}% · {r.co2 ?? "–"} ppm
                    <div className="small">Comfort index: {r.comfortIndex}</div>
                  </div>
                )}
                <div className="chips">
                  {assets.filter(a => a.room === r.id).map(a => (
                    <span key={a.id} className={`chip ${a.alertStatus || !a.online ? "bad" : ""}`}
                      onClick={e => { e.stopPropagation(); setSel(a.id); }}
                      title={JSON.stringify(a, null, 1)}>
                      {ICON[a.type]} {a.id}
                      {a.battery != null && ` ${a.battery.toFixed(0)}%`}
                      {a.batteryEtaMin != null && ` ⏱${a.batteryEtaMin}m`}
                      {!a.online && " (offline)"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Alerts</h2>
          <div className="alerts">
            {alerts.length === 0 && <div className="small">No alerts yet</div>}
            {alerts.map(a => (
              <div key={a.id} className={`alert ${a.active ? a.severity : "resolved"}`}>
                <b>{a.entity}</b> · {a.rule}<br />
                <span className="small">{a.message} · {new Date(a.ts * 1000).toLocaleTimeString()}
                  {!a.active && " · resolved"}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card">
        <h2>Telemetry:&nbsp;
          <select value={sel} onChange={e => setSel(e.target.value)}>{ids.map(i => <option key={i}>{i}</option>)}</select>
          &nbsp;
          <select value={m} onChange={e => setMetric(e.target.value)}>{keys.map(k => <option key={k}>{k}</option>)}</select>
        </h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="time" stroke="#94a3b8" minTickGap={40} />
            <YAxis stroke="#94a3b8" domain={["auto", "auto"]} />
            <Tooltip />
            <Line type="monotone" dataKey={m} stroke="#38bdf8" dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="card">
        <h2>Knowledge graph (live from Memgraph)</h2>
        <ForceGraph2D graphData={gdata} width={1000} height={440} backgroundColor="#0f172a"
          nodeLabel="name" nodeRelSize={6} nodeColor={n => COLORS[n.label] || "#999"}
          linkLabel="type" linkDirectionalArrowLength={4} linkColor={() => "#64748b"} />
        <div className="legend">{Object.entries(COLORS).map(([k, c]) =>
          <span key={k}><i style={{ background: c }} />{k}</span>)}</div>
      </section>
    </div>
  );
}