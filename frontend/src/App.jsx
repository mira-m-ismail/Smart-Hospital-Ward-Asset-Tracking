import { useEffect, useMemo, useRef, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ForceGraph2D from "react-force-graph-2d";
import WardTwin3D from "./WardTwin3D.jsx";
import "./App.css";

const API = "http://localhost:8000/api";
const COLORS = {
  Ward: "#785ef0",       // violet
  Room: "#0072b2",       // blue
  EnvSensor: "#929292",  // neutral gray
  Patient: "#e69f00",    // orange
  InfusionPump: "#f0e442", // yellow
  Ventilator: "#a98467", // tan
  Wheelchair: "#cc79a7", // pink
  Alert: "#56b4e9",      // sky blue
};
const NODE_SHAPES = {
  Ward: "■", Room: "●", EnvSensor: "◆", Patient: "▲",
  InfusionPump: "⬡", Ventilator: "▼", Wheelchair: "✚", Alert: "★",
};
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

function graphNodeSummary(node) {
  if (!node) return "";
  const p = node.props || {};
  const value = (key, unit = "") => p[key] == null ? "" : `${p[key]}${unit}`;
  if (node.label === "Room") return [value("temperature", "°C"), value("humidity", "%"), value("co2", " ppm")].filter(Boolean).join(" · ");
  if (node.label === "InfusionPump") return [value("battery", "% battery"), value("remaining_ml", " mL remaining"), p.occlusion ? "Occlusion" : ""].filter(Boolean).join(" · ");
  if (node.label === "Ventilator") return [value("battery", "% battery"), value("respiratory_rate", " breaths/min"), value("tidal_volume", " mL tidal volume")].filter(Boolean).join(" · ");
  if (node.label === "Wheelchair") return [p.in_use == null ? "" : p.in_use ? "In use" : "Available", p.online === false ? "Offline" : "Online"].filter(Boolean).join(" · ");
  if (node.label === "EnvSensor") return [Array.isArray(p.measures) ? p.measures.join(", ") : p.measures, p.online === false ? "Offline" : "Online"].filter(Boolean).join(" · ");
  if (node.label === "Alert") return [p.rule, p.severity, p.active ? "Active" : "Resolved"].filter(Boolean).join(" · ");
  if (node.label === "Patient") return "Synthetic patient record";
  if (node.label === "Ward") return p.floor == null ? "Hospital ward" : `Floor ${p.floor}`;
  return p.name || node.label;
}

export default function App() {
  const state = usePoll(`${API}/state`);
  const graph = usePoll(`${API}/graph`, 5000);
  const [sel, setSel] = useState("R101");
  const [metric, setMetric] = useState("temperature");
  const [graphSearch, setGraphSearch] = useState("");
  const [graphFocusId, setGraphFocusId] = useState(null);
  const [hoveredGraphId, setHoveredGraphId] = useState(null);
    const [theme, setTheme] = useState(
    () => localStorage.getItem("ward-theme") || "dark"
  );
  const graphWrapRef = useRef(null);
  const forceGraphRef = useRef(null);
  const [graphWidth, setGraphWidth] = useState(900);
  const previousGraphRef = useRef({ nodes: [], links: [] });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ward-theme", theme);
  }, [theme]);

  useEffect(() => {
    const element = graphWrapRef.current;
    if (!element) return;

    const updateGraphWidth = () => {
      const width = Math.floor(element.getBoundingClientRect().width);
      if (width > 0) setGraphWidth(current => current === width ? current : width);
    };
    updateGraphWidth();
    const observer = new ResizeObserver(updateGraphWidth);

    observer.observe(element);
    window.addEventListener("resize", updateGraphWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateGraphWidth);
    };
  }, [Boolean(state)]);
  const series = usePoll(`${API}/timeseries/${sel}`) || [];

  const last = series[series.length - 1] || {};
  const keys = Object.keys(last).filter(k => k !== "ts" && typeof last[k] === "number");
  const m = keys.includes(metric) ? metric : keys[0];
  const chartData = series.map(p => ({ ...p, time: new Date(p.ts * 1000).toLocaleTimeString() }));

  useEffect(() => {
    if (keys.length && !keys.includes(metric)) setMetric(keys[0]);
  }, [keys.join("|"), metric]);

  const gdata = useMemo(() => {
    if (!graph) return { nodes: [], links: [] };
    const previous = new Map(previousGraphRef.current.nodes.map(n => [n.id, n]));
    const nodes = graph.nodes.map(n => ({ ...previous.get(n.id), ...n }));
    const links = graph.edges.map(e => ({ ...e }));
    previousGraphRef.current = { nodes, links };
    return { nodes, links };
  }, [graph]);

  if (!state) return <div className="loading">Connecting to the digital twin…</div>;
  const { rooms, assets, alerts, kpis } = state;
  const ids = [...rooms.filter(r => r.type === "patient").map(r => r.id), ...assets.map(a => a.id)];
  const batteryAlertRules = new Set(["BATTERY_LOW", "BATTERY_PREDICTED", "BATTERY_CRITICAL"]);
  const batteryAlertsByEntity = new Map();
  const displayAlerts = [];
  alerts.forEach(alert => {
    if (alert.active && batteryAlertRules.has(alert.rule)) {
      const group = batteryAlertsByEntity.get(alert.entity) || [];
      group.push(alert);
      batteryAlertsByEntity.set(alert.entity, group);
    } else {
      displayAlerts.push(alert);
    }
  });
  batteryAlertsByEntity.forEach((group, entity) => {
    const lowAlert = group.find(alert => alert.rule === "BATTERY_LOW");
    const predictedAlert = group.find(alert => alert.rule === "BATTERY_PREDICTED");
    const criticalAlert = group.find(alert => alert.rule === "BATTERY_CRITICAL");
    if (!criticalAlert && !lowAlert && !predictedAlert) {
      displayAlerts.push(...group);
      return;
    }
    const asset = assets.find(item => item.id === entity);
    const battery = asset?.battery;
    const eta = asset?.batteryEtaMin;
    const detail = criticalAlert
      ? battery != null
        ? `Battery ${battery.toFixed(1)}% — below the 10% critical threshold.`
        : criticalAlert.message
      : battery != null && eta != null
        ? `Battery at ${battery.toFixed(1)}%; estimated to reach 10% in ${eta.toFixed(1)} min.`
        : lowAlert && predictedAlert
          ? `${lowAlert.message}; ${predictedAlert.message}.`
          : (lowAlert || predictedAlert).message;
    displayAlerts.push({
      ...(criticalAlert || predictedAlert || lowAlert),
      id: `combined-battery-${entity}`,
      rule: criticalAlert ? "BATTERY CRITICAL" : lowAlert && predictedAlert ? "BATTERY LOW + PREDICTED" : lowAlert ? "BATTERY LOW" : "BATTERY PREDICTED",
      message: detail,
      ts: Math.max(...group.map(alert => alert.ts)),
      severity: criticalAlert ? "critical" : "warning",
      active: true,
      combinedRules: group.map(alert => alert.rule),
    });
  });
  const sortedAlerts = displayAlerts.sort((a, b) => Number(Boolean(b.active)) - Number(Boolean(a.active)) || (b.resolvedTs || b.ts) - (a.resolvedTs || a.ts));
  const focusedNode = graph?.nodes.find(n => n.id === graphFocusId);
  const hoveredGraphNode = gdata.nodes.find(node => node.id === hoveredGraphId);
  const edgeNodeId = endpoint => typeof endpoint === "object" ? endpoint?.id : endpoint;
  const focusedEdges = focusedNode ? (graph?.edges || []).filter(e => edgeNodeId(e.source) === focusedNode.id || edgeNodeId(e.target) === focusedNode.id) : [];
  const graphNodesById = new Map((graph?.nodes || []).map(n => [n.id, n]));

  const focusGraphNode = node => {
    if (!node) return;
    setGraphFocusId(node.id);
    forceGraphRef.current?.centerAt(node.x || 0, node.y || 0, 500);
    forceGraphRef.current?.zoom(2.1, 500);
    if (ids.includes(node.name)) setSel(node.name);
  };

  const findGraphNode = event => {
    event.preventDefault();
    const query = graphSearch.trim().toLowerCase();
    if (!query) return;
    const match = gdata.nodes.find(n => [n.name, n.label, n.props?.name]
      .some(value => String(value || "").toLowerCase() === query))
      || gdata.nodes.find(n => [n.name, n.label, n.props?.name]
        .some(value => String(value || "").toLowerCase().includes(query)));
    if (match) focusGraphNode(match);
  };

  return (
    <div className="app">
            <header>
        <h1>Ward 1 · Floor 3, Digital Twin</h1>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀ Light mode" : "☾ Dark mode"}
          </button>
          <span className="live">● LIVE</span>
        </div>
      </header>

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
          <h2>Ward layout · select a patient room or asset to chart it</h2>
          <div className="rooms">
            {rooms.map(r => (
              <div
  key={r.id}
  className={`room ${r.alertStatus ? "bad" : ""} ${r.type === "patient" ? "selectable" : ""} ${sel === r.id ? "selected" : ""}`}
  onClick={r.type === "patient" ? () => setSel(r.id) : undefined}
>
                <b>{r.name}</b>
                {r.type === "patient" && (
                  <div className="env">
                    {r.temperature?.toFixed(1) ?? "–"}°C · {r.humidity?.toFixed(0) ?? "–"}% · {r.co2 ?? "–"} ppm
                    <div className="small">Comfort index: {r.comfortIndex}</div>
                  </div>
                )}
                <div className="chips">
                  {assets.filter(a => a.room === r.id).map(a => (
                    <span key={a.id} className={`chip ${a.alertStatus || !a.online ? "bad" : ""} ${sel === a.id ? "selected" : ""}`}
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
          <div className="alert-key" aria-label="Alert color key">
            <span><i className="critical-key" />Critical</span>
            <span><i className="warning-key" />Warning</span>
            <span><i className="resolved-key" />Resolved</span>
          </div>
          <div className="alerts">
            {sortedAlerts.length === 0 && <div className="small">No alerts yet</div>}
            {sortedAlerts.map(a => {
  const isRecent = a.active && Date.now() / 1000 - a.ts < 300;

  return (
    <div
      key={a.id}
      className={`alert ${a.active ? a.severity : "resolved"}`}
    >
            <div className="alert-topline">
        <b>{a.entity}</b>
        <span className="alert-rule">{a.rule}</span>
        <span className={`alert-badge ${a.severity || "warning"}`}>
          {(a.severity || "warning").toUpperCase()}
        </span>
        {!a.active && (
          <span className="alert-badge resolved-badge">RESOLVED</span>
        )}
        {isRecent && <span className="alert-new">NEW</span>}
      </div>

      <p className="alert-message">{a.message}</p>

            <div className="alert-meta">
        {new Date((a.active ? a.ts : a.resolvedTs || a.ts) * 1000).toLocaleTimeString()}
      </div>
    </div>
  );
})}          </div>
        </section>
      </div>

      <WardTwin3D rooms={rooms} assets={assets} selected={sel} onSelect={setSel} theme={theme} />

      <section className="card" id="telemetry-chart">
        <h2>Telemetry:&nbsp;
          <select value={sel} onChange={e => setSel(e.target.value)}>{ids.map(i => <option key={i}>{i}</option>)}</select>
          &nbsp;
          <select value={m} onChange={e => setMetric(e.target.value)}>{keys.map(k => <option key={k}>{k}</option>)}</select>
        </h2>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={chartData}>
            <CartesianGrid
  strokeDasharray="3 3"
  stroke={theme === "dark" ? "#303832" : "#dedbd0"}
/>
<XAxis
  dataKey="time"
  stroke={theme === "dark" ? "#a5ada6" : "#687168"}
  minTickGap={40}
/>
<YAxis
  stroke={theme === "dark" ? "#a5ada6" : "#687168"}
  domain={["auto", "auto"]}
/>
<Tooltip
  contentStyle={{
    backgroundColor: theme === "dark" ? "#171a18" : "#fffdf8",
    borderColor: theme === "dark" ? "#2b332e" : "#dedbd0",
    borderRadius: 12,
    color: theme === "dark" ? "#f3f5f0" : "#20261f"
  }}
/>
<Line
  type="monotone"
  dataKey={m}
  stroke={theme === "dark" ? "#a8c5ff" : "#315eab"}
  dot={false}
  isAnimationActive={false}
/>
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="card">
        <h2>Knowledge graph (live from Memgraph)</h2>
        <form className="graph-search" onSubmit={findGraphNode}>
          <input
            value={graphSearch}
            onChange={event => setGraphSearch(event.target.value)}
            placeholder="Find a room or asset (e.g., R103, PUMP-01)"
            aria-label="Search digital twin graph"
          />
          <button type="submit">Find</button>
        </form>
        <div className="graph-layout">
        <div className={`graph-wrap${hoveredGraphNode ? " is-hovering-node" : ""}`} ref={graphWrapRef}>
          <ForceGraph2D
            ref={forceGraphRef}
            graphData={gdata}
            width={graphWidth}
            height={Math.min(520, Math.max(280, graphWidth * 0.5))}
            backgroundColor={theme === "dark" ? "#101311" : "#fffdf8"}
            nodeLabel="name"
            nodeRelSize={6}
            nodePointerAreaPaint={(node, color, ctx, scale = 1) => {
              if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) return;
              const safeScale = Number.isFinite(scale) && scale > 0 ? scale : 1;
              const hitRadius = Math.max(14, 10 * Math.sqrt(node.val || 1)) / safeScale;
              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(node.x, node.y, hitRadius, 0, 2 * Math.PI);
              ctx.fill();
            }}
            nodeColor={n => COLORS[n.label] || "#999"}
            nodeCanvasObjectMode={() => "replace"}
            nodeCanvasObject={(node, ctx, scale) => {
              if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) return;
              const safeScale = Number.isFinite(scale) && scale > 0 ? scale : 1;
              const radius = 6 * Math.sqrt(node.val || 1);
              ctx.beginPath();
              if (node.label === "Room") {
                ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
              } else if (node.label === "EnvSensor") {
                ctx.moveTo(node.x, node.y - radius);
                ctx.lineTo(node.x + radius, node.y);
                ctx.lineTo(node.x, node.y + radius);
                ctx.lineTo(node.x - radius, node.y);
                ctx.closePath();
              } else if (node.label === "Wheelchair") {
                const arm = radius * 0.42;
                const wide = radius * 0.95;
                ctx.moveTo(node.x - arm, node.y - wide);
                ctx.lineTo(node.x + arm, node.y - wide);
                ctx.lineTo(node.x + arm, node.y - arm);
                ctx.lineTo(node.x + wide, node.y - arm);
                ctx.lineTo(node.x + wide, node.y + arm);
                ctx.lineTo(node.x + arm, node.y + arm);
                ctx.lineTo(node.x + arm, node.y + wide);
                ctx.lineTo(node.x - arm, node.y + wide);
                ctx.lineTo(node.x - arm, node.y + arm);
                ctx.lineTo(node.x - wide, node.y + arm);
                ctx.lineTo(node.x - wide, node.y - arm);
                ctx.lineTo(node.x - arm, node.y - arm);
                ctx.closePath();
              } else {
                const count = node.label === "Alert" ? 10 : node.label === "InfusionPump" ? 6 : node.label === "Ward" ? 4 : 3;
                const rotation = node.label === "Ward" ? 0 : node.label === "Ventilator" ? Math.PI : -Math.PI / 2;
                for (let i = 0; i < count; i += 1) {
                  const angle = rotation + (i * 2 * Math.PI) / count;
                  const r = node.label === "Alert" && i % 2 ? radius * 0.48 : radius;
                  const x = node.x + Math.cos(angle) * r;
                  const y = node.y + Math.sin(angle) * r;
                  if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
                }
                ctx.closePath();
              }
              ctx.fillStyle = COLORS[node.label] || "#929292";
              ctx.fill();
              ctx.strokeStyle = theme === "dark" ? "#f3f5f0" : "#263238";
              ctx.lineWidth = 1.4 / safeScale;
              ctx.stroke();
              if (node.id === graphFocusId) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, radius + 3.5 / safeScale, 0, 2 * Math.PI, false);
                ctx.strokeStyle = theme === "dark" ? "#a8c5ff" : "#315eab";
                ctx.lineWidth = 2 / safeScale;
                ctx.stroke();
              }
            }}
            linkLabel="type"
            linkWidth={link => edgeNodeId(link.source) === graphFocusId || edgeNodeId(link.target) === graphFocusId ? 2 : 1}
            linkDirectionalArrowLength={4}
            linkColor={() => theme === "dark" ? "#64748b" : "#94a3b8"}
            onNodeHover={node => setHoveredGraphId(current => current === (node?.id ?? null) ? current : node?.id ?? null)}
            onNodeClick={node => {
              focusGraphNode(node);
              setHoveredGraphId(node?.id ?? null);
            }}
            onLinkClick={link => {
              const sourceId = edgeNodeId(link.source);
              focusGraphNode(gdata.nodes.find(node => node.id === sourceId));
            }}
          />
          {hoveredGraphNode && <div className="graph-hover-tooltip" aria-live="polite">
            <b>{hoveredGraphNode.label} · {hoveredGraphNode.name || hoveredGraphNode.id}</b>
            <span>{graphNodeSummary(hoveredGraphNode) || "Digital twin entity"}</span>
            <small>Click to inspect details and update telemetry</small>
          </div>}
        </div>
        <aside className="graph-inspector">
          {focusedNode ? (
            <>
              <div className="graph-inspector-title">
                <div><span>{focusedNode.label}</span><b>{focusedNode.name}</b></div>
                <button type="button" className="graph-clear" onClick={() => setGraphFocusId(null)} aria-label="Clear selection">×</button>
              </div>
              {ids.includes(focusedNode.name) && (
                <button
                  type="button"
                  className="graph-chart-button"
                  onClick={() => {
                    setSel(focusedNode.name);
                    document.getElementById("telemetry-chart")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >View live telemetry for {focusedNode.name}</button>
              )}
              <h3>Properties</h3>
              <dl className="graph-properties">
                {Object.entries(focusedNode.props || {}).filter(([key]) => key !== "id").slice(0, 8).map(([key, value]) => (
                  <div key={key}><dt>{key}</dt><dd>{typeof value === "boolean" ? String(value) : String(value)}</dd></div>
                ))}
              </dl>
              <h3>Connected relationships</h3>
              <ul className="graph-relations">
                {focusedEdges.length ? focusedEdges.slice(0, 8).map((edge, index) => {
                  const source = graphNodesById.get(edge.source);
                  const target = graphNodesById.get(edge.target);
                  const other = edge.source === focusedNode.id ? target : source;
                  const direction = edge.source === focusedNode.id ? "→" : "←";
                  return <li key={`${edge.type}-${other?.id}-${index}`}><b>{edge.type}</b> {direction} {other?.name || other?.label || "entity"}</li>;
                }) : <li>No connected relationships found.</li>}
              </ul>
            </>
          ) : (
            <div className="graph-inspector-empty"><b>Explore the twin</b><span>Click a node to inspect its properties and connections, or search by ID.</span></div>
          )}
        </aside>
        </div>
        <div className="legend">{Object.entries(COLORS).map(([k, c]) =>
          <span key={k}><i style={{ color: c }}>{NODE_SHAPES[k]}</i>{k}</span>)}</div>
      </section>
    </div>
  );
}
