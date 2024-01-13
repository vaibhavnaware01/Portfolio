import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Vaibhav Naware </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />
            I am currently working as a Project Engineer at Smart City Living Lab IIIT Hyderabad.
            <br />
            I have completed my BE in Electronics and Technology from St.Vincent Pallotti College of Engineering, Nagpur
            <br />
            <br />
            Other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> PC Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Dishesh
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Wireless is a Freedom!!"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
