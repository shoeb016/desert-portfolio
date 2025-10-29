import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CharacterSelection from "./components/CharacterSelection";
import DesertWorld from "./components/DesertWorld";
import MusicPlayer from "./components/MusicPlayer";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";

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
      <ProjectsSection />
      <AchievementsSection />
    </>
  );
}

export default App;
