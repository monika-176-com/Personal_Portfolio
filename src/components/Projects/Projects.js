import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sentiment from "../../Assets/Projects/sentiment.png";
import medassist from "../../Assets/Projects/medassist.png";
import notes from "../../Assets/Projects/notes.png";
import suicide from "../../Assets/Projects/suicide.png";
import employee from "../../Assets/Projects/employee.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Pulse AI"
              description="A Chrome extension built with Node.js, Express.js, and Gemini AI for multilingual sentiment analysis and website safety auditing. It provides real-time sentiment classification, thematic clustering, smart replies, AI insights, trust scoring, dark pattern detection, SSL verification, and malicious link analysis."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medassist}
              isBlog={false}
              title="MedAssist AI"
              description="An AI-powered clinical decision support system built using Python, PyTorch, and EasyOCR. It uses a ResNet-18 model for pneumonia detection from chest X-rays with 95% accuracy, along with OCR, RxNorm integration, drug safety analysis, and clinical recommendations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Student Notes Exchange Portal"
              description="A MERN-based platform for students to securely upload, share, bookmark, vote, comment, search, and filter academic notes. The project includes secure authentication, file uploads, and an admin moderation dashboard."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Global Suicide Rate Analysis"
              description="A data analysis project focused on examining global suicide-rate patterns and extracting meaningful insights from the available dataset."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Management System"
              description="An employee management project developed as part of my software development work."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;