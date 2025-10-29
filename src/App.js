import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CharacterSelection from "./components/CharacterSelection";
import DesertWorld from "./components/DesertWorld";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  if (!loadingDone) {
    return <LoadingScreen onFinish={() => setLoadingDone(true)} />;
  }

  if (!selectedCharacter) {
    return (
      <>
        <MusicPlayer />
        <CharacterSelection onSelect={(char) => setSelectedCharacter(char)} />
      </>
    );
  }

  return (
    <>
      <MusicPlayer />
      <DesertWorld character={selectedCharacter} />
    </>
  );
}

export default App;
