import React from "react";

export default function CharacterSelection({ onSelect }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      <h1>Select Your Character</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "3em" }}>
        <div
          style={{ cursor: "pointer", border: "3px solid #a97c50", borderRadius: 16, background: "#fff", padding: 20 }}
          onClick={() => onSelect({ name: "Camel" })}
        >
          <div style={{ fontSize: 70, marginBottom: 15 }}>🐪</div>
          <div style={{ fontWeight: "bold", fontSize: 22, color: "#8d6748" }}>Camel</div>
          <div style={{ color: "#c19a6b", marginTop: 8 }}>Click to begin as Camel in 3D!</div>
        </div>
      </div>
      <div style={{ fontSize: 20, marginTop: 30 }}>
        Board your flying camel and start your adventure!
      </div>
    </div>
  );
}
