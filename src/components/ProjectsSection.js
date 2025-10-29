// /src/components/ProjectsSection.js

import React from "react";

const projects = [
  {
    name: "Desert Drilling Simulation",
    description: "A simulation of drilling rigs and pipelines in the desert.",
    image: "https://picsum.photos/seed/project1/400/200",
    link: "#"
  },
  {
    name: "Mobile Oil Analyzer",
    description: "A mobile tool to check oil quality with IoT sensors.",
    image: "https://picsum.photos/seed/project2/400/200",
    link: "#"
  },
];

export default function ProjectsSection() {
  return (
    <section style={{ padding: "2em", background: "#f5ecd7" }}>
      <h2>Projects</h2>
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ border: "1px solid #eee", borderRadius: 12, padding: 20, width: 300 }}>
            <img src={proj.image} alt={proj.name} style={{ width: "100%", borderRadius: 8 }} />
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link}>View More</a>
          </div>
        ))}
      </div>
    </section>
  )
}
