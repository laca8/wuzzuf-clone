import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProfileStep1 = () => {
  const { no } = useParams;
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/createProfile/2";
  };
  return (
    <Container>
      <Row style={{ textAlign: "left" }}>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>
                What is your current career level?
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Select
                  aria-label="Default select example"
                  style={{ padding: "0.5rem", width: "200px" }}
                >
                  <option value="student">Student</option>
                  <option value="entryLevel">Entry Level</option>
                  <option value="experienced">Experienced</option>
                  <option value="manager">Manager</option>
                  <option value="seniorManger">Senior Manager</option>
                </Form.Select>
              </Form.Group>
            </Card>

            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>
                What type(s) of job are you open to?
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Select
                  aria-label="Default select example"
                  style={{ padding: "0.5rem", width: "200px" }}
                >
                  <option value="partTime">Part Time</option>
                  <option value="fullTime">Full Time</option>
                  <option value="intership">Intership</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="studentActivity">Student Activity</option>
                </Form.Select>
              </Form.Group>
            </Card>

            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>
                What are the job titles that describe what you are looking for?
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control
                  type="text"
                  placeholder="e.g. Android Developer"
                />
              </Form.Group>
            </Card>
            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>
                What is the minimum salary you would accept?
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control type="text" placeholder="salary" />
              </Form.Group>
            </Card>

            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>
                What's your current job search status?
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control type="text" placeholder="jop" />
              </Form.Group>
            </Card>
            <Button type="submit">save and continue</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStep1;
