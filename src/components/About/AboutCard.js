import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jalla Monika</span>{" "}
            from <span className="purple">Tirupati, Andhra Pradesh, India</span>.
            <br />
            I’m a <span className="purple">Computer Science undergraduate</span>{" "}
            at <span className="purple">SRM University-AP with a specialization in Data Science and a minor in Marketing</span>.
            <br />
            I’m passionate about{" "}
            <span className="purple">Full Stack Development, Data Science, and Machine Learning</span>.
            <br />
            <br />
            I have hands-on experience building scalable web applications,
            AI-powered systems, and data-driven solutions.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Development 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Machine Learning 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Science 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Real-World Projects 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into meaningful technology!"
          </p>
          <footer className="blockquote-footer">Jalla Monika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;