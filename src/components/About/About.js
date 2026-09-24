import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>

              <Aboutcard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>

          <Toolstack />

          <Row
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "30px",
            }}
          >
            <Col md={10}>
              <h1 className="project-heading">
                My <strong className="purple">Experience</strong>
              </h1>

              <div className="experience-card">
                <h3>Full Stack Developer Intern</h3>
                <h4>Exafluence · Tirupati, Andhra Pradesh</h4>
                <p>Jun 2025 – Jul 2025</p>

                <ul>
                  <li>
                    Built an automated resume screening and email response
                    platform using Python, Flask, MySQL, and NLP.
                  </li>
                  <li>
                    Reduced manual resume screening effort by approximately
                    60%.
                  </li>
                  <li>
                    Implemented Google OAuth and automated resume parsing for
                    PDF, DOCX, and email content.
                  </li>
                  <li>
                    Designed a real-time dashboard for candidate tracking and
                    automated communication workflows.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;