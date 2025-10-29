import React from "react";

const timeline = [
  {
    date: "Oct 2025",
    title: "Started Portfolio Project",
    description: "Began building my desert-themed interactive portfolio in React."
  },
  {
    date: "Sep 2024",
    title: "Mechanical Engineer Certification",
    description: "Earned my certification and joined a major internship."
  },
  {
    date: "Jun 2023",
    title: "Graduation Day",
    description: "Graduated from University of Mumbai."
  }
];

export default function BlogSection() {
  return (
    <section style={{ padding: "2em", background: "#faf1e0" }}>
      <h2>Blog & Timeline</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {timeline.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "2em", borderLeft: "3px solid #c19a6b", paddingLeft: "1em" }}>
            <b>{item.date}: {item.title}</b>
            <br />
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
