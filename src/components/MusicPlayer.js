import React from "react";

export default function MusicPlayer() {
  return (
    <audio
      controls
      autoPlay
      loop
      style={{ position: 'absolute', top: 20, left: 20 }}
    >
      <source src="/music-desert-theme.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}
