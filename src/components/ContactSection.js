import React from "react";

export default function ContactSection() {
  return (
    <section style={{ padding: "2em", background: "#e9e1ef" }}>
      <h2>Contact</h2>
      <p>
        You can reach me at:<br />
        <b>Email:</b> shoebnawazmech@gmail.com<br />
        <b>LinkedIn:</b>{" "}
        <a href="https://www.linkedin.com/in/shoebkhan" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/shoebkhan
        </a>
      </p>
      <form style={{ marginTop: "1em" }}>
        <input type="text" placeholder="Your Name" style={{ padding: "0.5em", width: "60%", marginBottom: "1em" }} /><br />
        <input type="email" placeholder="Your Email" style={{ padding: "0.5em", width: "60%", marginBottom: "1em" }} /><br />
        <textarea placeholder="Your Message" style={{ padding: "0.5em", width: "60%", height: "6em" }} /><br />
        <button type="submit" style={{ marginTop: "1em", padding: "0.8em 2em", borderRadius: 8, background: "#c19a6b", color: "#fff", border: 0 }}>Send Message</button>
      </form>
      <p style={{ color: "#999", marginTop: "1em" }}>Demo form (does not send). Replace with actual handler if needed.</p>
    </section>
  );
}
