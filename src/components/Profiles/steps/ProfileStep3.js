import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
const ProfileStep3 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/explore";
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
                How many years of experience do you have?
              </Card.Body>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control type="text" placeholder="Enter Years" />
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
                What is your current educational level?{" "}
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
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="highSchool">High School</option>
                  <option value="vocational">Vocational</option>
                  <option value="diploma">Diploma</option>
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
              <Card.Body style={{ fontSize: "25px" }}>Digree Details</Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>Field</Form.Label>
                <Form.Control type="text" placeholder="field" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>University</Form.Label>
                <Form.Control type="text" placeholder="university" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" placeholder="grade" />
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
                What skills, tools, technologies and fields of expertise do you
                have?{" "}
              </Card.Body>

              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ width: "300px" }}
              >
                <Form.Control type="text" placeholder="skills" />
              </Form.Group>
            </Card>
            <Card
              style={{
                backgroundColor: "rgb(248, 248, 248)",
                marginBottom: "15px",
              }}
            >
              <Card.Body style={{ fontSize: "25px" }}>Upload CV </Card.Body>

              <Form.Group className="mb-3" style={{ width: "120px" }}>
                <Form.Label
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: "#fff",
                    marginLeft: "20px",
                    border: "1px solid #ccc",
                    display: "inline-block",

                    cursor: "pointer",
                    backgroundColor: "  blueviolet",
                    position: "relative",
                  }}
                >
                  <Form.Control
                    type="file"
                    style={{ backgroundColor: "  blueviolet", opacity: "0" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      color: "#fff",
                      top: "10%",
                      right: "30%",
                    }}
                  >
                    Upload
                  </span>
                </Form.Label>
              </Form.Group>
            </Card>

            <Button type="submit">save and continue</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStep3;
