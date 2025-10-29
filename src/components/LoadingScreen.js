import React, { useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      background: "linear-gradient(#efd197, #eab676 80%, #f5ecd7)",
      minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <h1 style={{ color: "#8d6748", fontSize: "2.7em", marginBottom: "0.5em" }}>
        Desert Drilling Portfolio
      </h1>
      {/* SVG and animated elements here */}
      <div style={{ fontSize: "1.2em", color: "#a97c50", animation: "pulse 1.5s infinite" }}>
        Oil rig boots up... Truck arrives... Extracting story and projects...
      </div>
      <style>
        {`@keyframes pulse {
            0%{ opacity:0.7;}
            50%{opacity:1;}
            100%{opacity:0.7;}
        }`}
      </style>
    </div>
  );
}
