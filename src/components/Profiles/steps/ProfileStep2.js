import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
const ProfileStep2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/createProfile/3";
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
                Your Personal Info
              </Card.Body>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                style={{ width: "300px" }}
              >
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
                style={{ width: "300px" }}
              >
                <Form.Label>Gender</Form.Label>
                <br />
                <Form.Select
                  aria-label="Default select example"
                  style={{ padding: "0.5rem", width: "200px" }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
                style={{ width: "300px" }}
              >
                <Form.Label>Nathonality</Form.Label>
                <Form.Control type="text" placeholder="Enter Nathonality" />
              </Form.Group>
            </Card>

            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>Your Location</Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
              </Form.Group>
            </Card>

            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                padding: "10px",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>Contact Info</Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control type="text" placeholder="mobile" />
              </Form.Group>
            </Card>

            <Button type="submit">save and continue</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStep2;
