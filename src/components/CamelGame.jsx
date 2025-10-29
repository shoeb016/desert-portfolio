import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Camel({ position, direction }) {
  const { scene } = useGLTF("/models/camel.glb");
  const camelRef = useRef();
  useFrame(() => {
    if (camelRef.current) {
      camelRef.current.rotation.y = direction;
      camelRef.current.position.set(...position);
    }
  });
  return <primitive object={scene} ref={camelRef} scale={2} />;
}

export default function CamelGame() {
  const [position, setPosition] = useState([0, 0, 0]);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      let [x, y, z] = position;
      let dir = direction;
      if (e.key === "ArrowUp" || e.key === "w")   { z -= 0.5; dir = 0; }
      if (e.key === "ArrowDown" || e.key === "s") { z += 0.5; dir = Math.PI; }
      if (e.key === "ArrowLeft" || e.key === "a") { x -= 0.5; dir = Math.PI / 2; }
      if (e.key === "ArrowRight" || e.key === "d") { x += 0.5; dir = -Math.PI / 2; }
      setPosition([x, y, z]);
      setDirection(dir);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [position, direction]);

  return (
    <div style={{ width: "100vw", height: "70vh", background: "#efd197", borderRadius: 22, boxShadow: "0 0 22px #aeaeae" }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5,10,5]} intensity={0.5} />
        <Camel position={position} direction={direction} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f6deaa" />
        </mesh>
        <OrbitControls />
      </Canvas>
      <div style={{ textAlign: "center", marginTop: 18, fontSize: 18 }}>
        Use arrow keys or W/A/S/D to walk your camel!
      </div>
    </div>
  );
}
