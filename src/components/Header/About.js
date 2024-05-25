import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row className="about">
        <Col className="about-col">
          <h3>Track Your Application, The Easy Way</h3>
          <p style={{ lineHeight: "2.5" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button>Get Started Now</Button>
        </Col>
        <Col style={{ marginLeft: "30px" }}>
          <img src="https://resumeinventor.com/wp-content/uploads/edd/2021/06/03_-Resume-Cover-Letter-Page-Free-Resume-Design-Template-11.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
