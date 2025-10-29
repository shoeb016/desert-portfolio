import React, { useRef, useState, useEffect } from "react";
export default function MusicPlayer() {
  const [muted, setMuted] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) ref.current.muted = muted;
  }, [muted]);
  return (
    <div className="music-player" style={{ position: "fixed", bottom: 10, right: 15 }}>
      <audio ref={ref} src="https://cdn.pixabay.com/audio/2022/12/19/audio_12b5a2575f.mp3" autoPlay loop />
      <button onClick={() => setMuted(!muted)} style={{ padding: "0.3em 1em", borderRadius: 8, border: "none", background: "#c19a6b", color: "#fff" }}>
        {muted ? "Unmute Music" : "Mute Music"}
      </button>
    </div>
  );
}
