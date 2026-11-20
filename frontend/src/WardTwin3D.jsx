import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const ROOM_POSITIONS = {
  R101: [-4.1, -2.2],
  R102: [4.1, -2.2],
  R103: [-4.1, 2.2],
  R104: [4.1, 2.2],
  STORE: [0, 7],
};

const TYPE_COLORS = {
  InfusionPump: "#d99b2b",
  Ventilator: "#4e79a7",
  Wheelchair: "#9b78a8",
};

function makeTag(text, background = "#171a18") {
  const canvas = document.createElement("canvas");
  canvas.width = 384;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = background;
  ctx.beginPath();
  ctx.roundRect(4, 4, 376, 88, 22);
  ctx.fill();
  ctx.font = "bold 38px system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#f3f5f0";
  ctx.fillText(text, 192, 50, 350);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(Math.max(1.1, Math.min(2.8, text.length * 0.105)), 0.7, 1);
  return sprite;
}

function makeAsset(id, type) {
  const group = new THREE.Group();
  const color = TYPE_COLORS[type] || "#8fa0aa";
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.48, metalness: 0.12 });
  const dark = new THREE.MeshStandardMaterial({ color: "#26312c", roughness: 0.6 });

  if (type === "InfusionPump") {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.34), material);
    body.position.y = 0.48;
    group.add(body);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.72, 12), dark);
    pole.position.set(0.28, 0.54, -0.08);
    group.add(pole);
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.08), new THREE.MeshStandardMaterial({ color: "#d9eee5" }));
    bag.position.set(0.28, 0.94, -0.08);
    group.add(bag);
  } else if (type === "Ventilator") {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.7, 0.43), material);
    body.position.y = 0.52;
    group.add(body);
    const screen = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.22, 0.025), new THREE.MeshStandardMaterial({ color: "#b9e4d5", emissive: "#2b6552", emissiveIntensity: 0.35 }));
    screen.position.set(0, 0.67, 0.23);
    group.add(screen);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.12, 0.52), dark);
    base.position.y = 0.14;
    group.add(base);
  } else {
    const wheelMat = new THREE.MeshStandardMaterial({ color: "#27312d", roughness: 0.8 });
    for (const x of [-0.27, 0.27]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.045, 8, 18), wheelMat);
      wheel.position.set(x, 0.26, 0);
      wheel.rotation.y = Math.PI / 2;
      group.add(wheel);
    }
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.09, 0.42), material);
    seat.position.set(0, 0.53, 0.02);
    group.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.08), material);
    back.position.set(0, 0.8, -0.19);
    group.add(back);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.22), dark);
    foot.position.set(0, 0.3, 0.35);
    group.add(foot);
  }

  const statusRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.39, 0.035, 8, 32),
    new THREE.MeshStandardMaterial({ color: "#56b4e9", emissive: "#245a78", emissiveIntensity: 0.35 }),
  );
  statusRing.rotation.x = -Math.PI / 2;
  statusRing.position.y = 0.04;
  group.add(statusRing);
  group.userData = { entityId: id, kind: "asset", statusRing };
  const tag = makeTag(id);
  tag.position.y = 1.55;
  group.add(tag);
  return group;
}

function statusColor(alert, offline) {
  if (offline) return "#9a8caa";
  if (alert) return "#e69f00";
  return "#56b4e9";
}

export default function WardTwin3D({ rooms, assets, selected, onSelect, theme }) {
  const hostRef = useRef(null);
  const worldRef = useRef(null);
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");

  useEffect(() => {
    const syncFullscreen = () => setIsFullscreen(document.fullscreenElement === cardRef.current);
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    setFullscreenError("");
    try {
      if (document.fullscreenElement === cardRef.current) {
        await document.exitFullscreen();
      } else if (cardRef.current?.requestFullscreen) {
        await cardRef.current.requestFullscreen();
      } else {
        setFullscreenError("Full screen is not supported by this browser.");
      }
    } catch {
      setFullscreenError("Could not open full screen. Try the browser's full-screen key instead.");
    }
  };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(theme === "dark" ? "#0c100e" : "#f4f2eb");
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(12, 17, 21);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight("#f3fff8", "#25312a", 2.1));
    const keyLight = new THREE.DirectionalLight("#ffffff", 2.4);
    keyLight.position.set(-7, 13, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.5, 1.2);
    controls.enableDamping = true;
    controls.minDistance = 10;
    controls.maxDistance = 34;
    controls.maxPolarAngle = Math.PI * 0.48;

    const groundMaterial = new THREE.MeshStandardMaterial({ color: theme === "dark" ? "#151b17" : "#e6e4dc", roughness: 0.95 });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(28, 25), groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(0, -0.2, 1.5);
    ground.receiveShadow = true;
    scene.add(ground);
    const grid = new THREE.GridHelper(28, 28, theme === "dark" ? "#344039" : "#c9c8bf", theme === "dark" ? "#252d28" : "#d7d5cd");
    grid.position.set(0, -0.18, 1.5);
    scene.add(grid);

    const roomObjects = new Map();
    rooms.forEach((room) => {
      const [x, z] = ROOM_POSITIONS[room.id] || [0, 0];
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      const isStore = room.type === "storage";
      const floor = new THREE.Mesh(
        new THREE.BoxGeometry(isStore ? 5.5 : 5.8, 0.22, isStore ? 3.5 : 4.0),
        new THREE.MeshStandardMaterial({ color: "#26342d", roughness: 0.78, metalness: 0.05 }),
      );
      floor.position.y = -0.04;
      floor.receiveShadow = true;
      floor.castShadow = true;
      floor.userData = { entityId: room.id, kind: "room" };
      group.add(floor);
      const outline = new THREE.LineSegments(
        new THREE.EdgesGeometry(floor.geometry),
        new THREE.LineBasicMaterial({ color: "#607368" }),
      );
      outline.position.copy(floor.position);
      outline.userData = { entityId: room.id, kind: "roomOutline" };
      group.add(outline);
      const title = makeTag(room.name, "#202a24");
      title.position.set(0, 0.56, isStore ? -0.15 : -1.35);
      group.add(title);
      if (!isStore) {
        const bed = new THREE.Mesh(
          new THREE.BoxGeometry(1.12, 0.24, 1.75),
          new THREE.MeshStandardMaterial({ color: "#cbd9d1", roughness: 0.85 }),
        );
        bed.position.set(0, 0.16, 0.42);
        bed.castShadow = true;
        group.add(bed);
        const pillow = new THREE.Mesh(
          new THREE.BoxGeometry(0.72, 0.12, 0.32),
          new THREE.MeshStandardMaterial({ color: "#edf2ec", roughness: 0.9 }),
        );
        pillow.position.set(0, 0.34, -0.22);
        group.add(pillow);
      } else {
        const shelf = new THREE.Mesh(
          new THREE.BoxGeometry(2.0, 0.5, 0.45),
          new THREE.MeshStandardMaterial({ color: "#6e7d73", roughness: 0.8 }),
        );
        shelf.position.set(0, 0.28, -0.9);
        group.add(shelf);
      }
      group.userData = { entityId: room.id, kind: "roomGroup" };
      scene.add(group);
      roomObjects.set(room.id, { group, floor, outline });
    });

    const assetObjects = new Map();
    assets.forEach((asset, index) => {
      const object = makeAsset(asset.id, asset.type);
      object.userData.order = index;
      scene.add(object);
      assetObjects.set(asset.id, object);
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const pickables = [];
    roomObjects.forEach(({ floor, outline }) => pickables.push(floor, outline));
    assetObjects.forEach((object) => pickables.push(object));
    let frame;
    const resize = () => {
      const width = Math.max(1, host.clientWidth);
      const height = Math.max(320, host.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const findEntity = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(pickables, true)[0];
      let object = hit?.object;
      while (object && !object.userData.entityId) object = object.parent;
      return object?.userData.entityId || "";
    };
    const onMove = (event) => {
      const entityId = findEntity(event);
      renderer.domElement.style.cursor = entityId ? "pointer" : "grab";
      setHovered((old) => old === entityId ? old : entityId);
    };
    const onClick = (event) => {
      const entityId = findEntity(event);
      const patientRoom = rooms.some((room) => room.id === entityId && room.type === "patient");
      if (patientRoom || assetObjects.has(entityId)) onSelect(entityId);
    };
    renderer.domElement.addEventListener("pointermove", onMove);
    renderer.domElement.addEventListener("pointerleave", () => setHovered(""));
    renderer.domElement.addEventListener("click", onClick);

    worldRef.current = { scene, renderer, roomObjects, assetObjects };
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      renderer.domElement.removeEventListener("pointermove", onMove);
      renderer.domElement.removeEventListener("click", onClick);
      scene.traverse((object) => {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
        else object.material?.dispose();
        if (object.material?.map) object.material.map.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
      worldRef.current = null;
    };
    // The 3D scene is initialized once; live entity values are applied below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const world = worldRef.current;
    if (!world) return;
    const bg = theme === "dark" ? "#0c100e" : "#f4f2eb";
    world.scene.background.set(bg);
    rooms.forEach((room) => {
      const view = world.roomObjects.get(room.id);
      if (!view) return;
      const color = room.alertStatus ? "#51452d" : room.type === "storage" ? "#353d49" : "#263b46";
      view.floor.material.color.set(color);
      view.outline.material.color.set(room.id === selected ? "#a8c5ff" : room.alertStatus ? "#e69f00" : "#607b8b");
      view.outline.material.needsUpdate = true;
    });

    const counts = new Map();
    assets.forEach((asset) => {
      const object = world.assetObjects.get(asset.id);
      if (!object) return;
      const roomId = asset.room in ROOM_POSITIONS ? asset.room : "STORE";
      const [x, z] = ROOM_POSITIONS[roomId];
      const order = counts.get(roomId) || 0;
      counts.set(roomId, order + 1);
      const offsetX = ((order % 3) - 1) * 1.35;
      const offsetZ = Math.floor(order / 3) * 0.7 + 0.38;
      object.position.set(x + offsetX, 0.13, z + offsetZ);
      object.userData.room = roomId;
      const ring = object.userData.statusRing;
      if (ring) {
        const color = statusColor(asset.alertStatus, !asset.online);
        ring.material.color.set(color);
        ring.material.emissive.set(color);
      }
      object.traverse((part) => {
        if (part.isSprite) part.material.color.set(asset.id === selected ? "#a8c5ff" : "#ffffff");
      });
    });
  }, [rooms, assets, selected, theme]);

  const hoveredRoom = rooms.find((room) => room.id === hovered);
  const hoveredAsset = assets.find((asset) => asset.id === hovered);
  const hoveredData = hoveredRoom || hoveredAsset;

  return (
    <section className="card twin3d-card" ref={cardRef}>
      <div className="twin3d-heading">
        <div>
          <h2>3D ward view</h2>
          <p>Drag to rotate · scroll to zoom · select a patient room or asset to chart it</p>
        </div>
        <div className="twin3d-heading-actions">
          <div className="twin3d-status-legend"><i /> Normal <i className="alert-dot" /> Alert <i className="offline-dot" /> Offline</div>
          <button className="twin3d-fullscreen-button" type="button" onClick={toggleFullscreen}>
            {isFullscreen ? "Exit full screen" : "⛶ Full screen"}
          </button>
        </div>
      </div>
      {fullscreenError && <div className="twin3d-fullscreen-error" role="status">{fullscreenError}</div>}
      <div className="twin3d-canvas" ref={hostRef} />
      {hoveredData && (
        <div className="twin3d-tooltip">
          <b>{hoveredData.name || hoveredData.id}</b>
          {hoveredRoom?.temperature != null && <span>{hoveredRoom.alertStatus ? "Alert active" : "No active alert"} · {hoveredRoom.temperature.toFixed(1)}°C · {hoveredRoom.humidity?.toFixed(0)}% · {hoveredRoom.co2} ppm</span>}
          {hoveredAsset && <span>{hoveredAsset.type} · {!hoveredAsset.online ? "Offline" : hoveredAsset.alertStatus ? "Alert active" : "No active alert"}{hoveredAsset.battery != null ? ` · ${hoveredAsset.battery.toFixed(0)}% battery` : ""}</span>}
        </div>
      )}
      <div className="twin3d-footnote">Room and asset colors update from the live twin state. Equipment in the store is shown in the Equipment Store area.</div>
    </section>
  );
}
