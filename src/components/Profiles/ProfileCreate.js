import React from "react";
import { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import ProfileStep1 from "./steps/ProfileStep1";
import ProfileStep2 from "./steps/ProfileStep2";
import ProfileStep3 from "./steps/ProfileStep3";
import { useParams } from "react-router-dom";

const ProfileCreate = ({ match }) => {
  const page = match.params.page;
  console.log(page);
  const [step, setStep] = useState(page);
  return (
    <Container>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h5>step {step}/3</h5>
          <h4>Career Interests</h4>
          <Alert variant="warning">
            Providing this information enables us to recommend better
            opportunities to you.
          </Alert>
        </Col>
        {step == 2 ? (
          <ProfileStep2 />
        ) : step == 3 ? (
          <ProfileStep3 />
        ) : (
          <ProfileStep1 />
        )}
      </Row>
    </Container>
  );
};

export default ProfileCreate;
