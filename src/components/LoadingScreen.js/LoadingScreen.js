import React, { useEffect } from "react";
export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);
  return (
    <div className="loading-animation" style={{ textAlign: "center", marginTop: "20vh" }}>
      {/* TODO: Replace with animated SVG/CSS of oil extraction */}
      <h1>Extracting oil and loading tankers...</h1>
      <p>Loading your 3D desert experience!</p>
      <div style={{ width: "60%", margin: "2em auto", height: "20px", background: "#ccc" }}>
        <div style={{ width: "70%", height: "100%", background: "#c19a6b", transition: "width 4s" }} />
      </div>
      <span>Powered by React Three Fiber</span>
    </div>
  );
}
