import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CharacterSelection from "./components/CharacterSelection";
import DesertWorld from "./components/DesertWorld";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [scene, setScene] = useState("intro");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const goToCharacterSelect = () => {
    setSelectedCharacter(null);
    setScene("select");
  };

  if (!loadingDone) {
    return <LoadingScreen onFinish={() => setLoadingDone(true)} />;
  }

  if (scene === "intro") {
    return (
      <div style={{ background: "#efd197", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <MusicPlayer />
        <h1>The Desert Portfolio Quest</h1>
        <p>
          Begin your adventure in the desert.<br />
          Choose your character and discover hidden projects!
        </p>
        <button onClick={() => setScene("select")} style={{ fontSize: 20, padding: "1em 2em", borderRadius: 10, background: "#c19a6b", color: "#fff" }}>Start Adventure</button>
      </div>
    );
  }

  if (scene === "select") {
    return (
      <>
        <MusicPlayer />
        <CharacterSelection onSelect={char => { setSelectedCharacter(char); setScene("desert"); }} />
        <button onClick={() => setScene("intro")} style={{ margin: "2em auto", display: "block", padding: "0.7em 1.5em", borderRadius: 9, background: "#a97c50", color: "#fff", fontWeight: "bold", border: 0, fontSize: 17 }}>⬅ Back to Intro</button>
      </>
    );
  }

  if (scene === "desert") {
    return (
      <>
        <MusicPlayer />
        <DesertWorld character={selectedCharacter} onBack={goToCharacterSelect} />
      </>
    );
  }
}

export default App;
