import React from "react";
import CamelGame from "./CamelGame";

export default function DesertWorld({ character, onNavigate, onBack }) {
  // For demo, only camel shows game, can extend for more characters!
  return (
    <div style={{ minHeight: "100vh", background: "#efd197", textAlign: "center" }}>
      <h2>{character ? `${character.name}'s Desert Adventure` : "Desert Adventure"}</h2>
      <CamelGame />
      <div style={{ marginTop: "2em" }}>
        <button onClick={onBack} style={{ margin: "1.5em", padding: "1em 2em", borderRadius: 9, background: "#a97c50", color: "#fff", fontWeight: "bold", border: 0, fontSize: 17 }}>⬅ Back to Character Select</button>
        {/* Adventure navigation buttons can go here */}
      </div>
    </div>
  );
}
