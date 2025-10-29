import React from "react";

export default function ResumeSection() {
  return (
    <section style={{ padding: "2em", background: "#e1efe8" }}>
      <h2>Resume</h2>
      <div>
        <b>Mohammed Shoeb Nawaz Khan</b><br />
        Email: shoebnawazmech@gmail.com<br />
        Location: Mumbai, India<br />
        LinkedIn: <a href="https://www.linkedin.com/in/shoebkhan">shoebkhan</a><br />
      </div>
      <hr />
      <b>Education:</b>
      <ul>
        <li>B.E. Mechanical Engineering, University of Mumbai (2023)</li>
      </ul>
      <b>Technical Skills:</b>
      <ul>
        <li>React, Node.js, Basics of Three.js, Python</li>
        <li>Simulation, Mechanical Design, IoT</li>
      </ul>
      <b>Experience:</b>
      <ul>
        <li>Internship: Bharat Petroleum Corp. Ltd, Mumbai</li>
        <li>Research: Desert Drilling Simulation Project</li>
      </ul>
      <b>Certifications:</b>
      <ul>
        <li>Certified Mechanical Engineer (Institution of Engineers)</li>
      </ul>
      <b>Projects:</b>
      <ul>
        <li>Desert Drilling Simulation — Lead Developer</li>
        <li>Mobile Oil Analyzer — IoT & App Integration</li>
      </ul>
    </section>
  );
}
