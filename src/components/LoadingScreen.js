import React, { useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    // Automatically hide after 2.5 seconds
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
      <svg width="450" height="200" viewBox="0 0 450 200"
        style={{ marginBottom: "2em", animation: "slideIn 2.5s" }}>
        {/* Oil Rig */}
        <rect x="130" y="80" width="20" height="70" fill="#a97c50" />
        <rect x="138" y="55" width="5" height="35" fill="#8d6748" />
        <rect x="132" y="40" width="16" height="17" fill="#dbc29d" rx="8" />
        {/* Drilling Rod */}
        <rect x="142" y="170" width="6" height="20" fill="#555" />
        {/* Truck */}
        <rect x="220" y="160" width="40" height="18" fill="#b5593b" rx="4" />
        <rect x="216" y="176" width="48" height="10" fill="#333" rx="3" />
        <circle cx="228" cy="188" r="6" fill="#666" />
        <circle cx="252" cy="188" r="6" fill="#666" />
        {/* Desert Dunes */}
        <ellipse cx="350" cy="180" rx="70" ry="20" fill="#f5ecd7" />
        <ellipse cx="80" cy="180" rx="60" ry="12" fill="#f0cd88" />
        {/* Simple oil drops animating */}
        <circle cx="145" cy="190" r="5" fill="#232323">
          <animate attributeName="cy" values="180;195;180" dur="1.4s" repeatCount="indefinite" />
        </circle>
        {/* Sun */}
        <circle cx="410" cy="40" r="24" fill="#ffe382" opacity="0.8" />
      </svg>
      <div style={{ fontSize: "1.2em", color: "#a97c50", animation: "pulse 1.5s infinite" }}>
        Oil rig boots up... Truck arrives... Extracting story and projects...
      </div>
      <style>
        {`@keyframes slideIn { 
            0% { opacity:0; transform:translateY(50px);}
           70% { opacity:1; transform:translateY(0);}
           100% { opacity:1; }
        }
          @keyframes pulse {
            0%{ opacity:0.7;}
            50%{opacity:1;}
            100%{opacity:0.7;}
        }`}
      </style>
    </div>
  );
}
