import React from "react";
const characters = [
  { name: "Engineer", img: "https://i.ibb.co/WKpKcch/engineer.png" },
  { name: "Explorer", img: "https://i.ibb.co/pKHx3Db/explorer.png" },
  { name: "Worker", img: "https://i.ibb.co/SJNHbcp/worker.png" },
  { name: "Camel", img: "https://i.ibb.co/SnVgJ7b/camel.png" },
  { name: "Gentleman", img: "https://i.ibb.co/BcF2q2Y/gentleman.png" },
];
export default function CharacterSelection({ onSelect }) {
  return (
    <div className="character-select" style={{ textAlign: "center", marginTop: "10vh" }}>
      <h2>Select Your Character</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2em" }}>
        {characters.map(char => (
          <div key={char.name} style={{ cursor: "pointer" }} onClick={() => onSelect(char)}>
            <img src={char.img} alt={char.name} style={{ maxWidth: 120, marginBottom: 10 }} />
            <span>{char.name}</span>
          </div>
        ))}
      </div>
      <p>Board your flying mat and start your adventure!</p>
    </div>
  );
}
