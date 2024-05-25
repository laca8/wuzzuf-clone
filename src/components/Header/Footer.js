import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row style={{ marginTop: "20px", textAlign: "center" }}>
        <Col>
          <footer>
            <p>Jobs in Egypt | WUZZUF.net SERVICES Copyright &copy; WUZZUF. </p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
