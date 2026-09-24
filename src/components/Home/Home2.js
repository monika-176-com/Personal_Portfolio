import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <b className="purple">Jalla Monika</b>, a Computer Science
              undergraduate at <b className="purple">SRM University-AP</b>{" "}
              with a specialization in Data Science and Minor in Marketing passionate about building practical software solutions and
              exploring Mern Stack Development and Machine Learning.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, C++, JavaScript, React, Node.js,{" "}
                  MongoDB, MySQL, Machine Learning, and Data Science
                </b>
              </i>
              , and I enjoy working across both frontend and backend
              development.
              <br />
              <br />
              I have hands-on experience as a
              <i>
                <b className="purple"> Full Stack Developer Intern </b>
              </i>
              at <b className="purple">Exafluence</b>, where I worked on an
              automated resume screening platform, Google OAuth integration,
              resume parsing, and a real-time candidate tracking dashboard.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Full Stack Development, Machine
                  Learning, and Data Science
                </b>
              </i>
              . I enjoy turning ideas into useful and user-focused
              applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Jalla Monika" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;