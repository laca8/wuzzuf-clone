import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
const Profile = () => {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: "3rem" }}>
          <Card
            style={{ borderTop: "3px solid rgb(0, 131, 187)", padding: "10px" }}
          >
            <Card.Body>
              <div style={{ display: "flex", position: "relative" }}>
                <img
                  src="https://www.emotivebrand.com/wp-content/uploads/2016/07/think-outside-the-box-1080x675.gif"
                  style={{
                    width: "150px",
                    borderRadius: "10%",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <h4>Ahmed Ragab</h4>
                  <p>Luxior,Egypt</p>
                  <div>
                    <span
                      style={{
                        backgroundColor: "grey",
                        borderRadius: "5px",
                        marginRight: "10px",
                        color: "#fff",
                        fontSize: "15px",
                        padding: "5px",
                      }}
                    >
                      html
                    </span>
                    <span
                      style={{
                        backgroundColor: "grey",
                        borderRadius: "5px",
                        marginRight: "10px",
                        color: "#fff",
                        fontSize: "15px",
                        padding: "5px",
                      }}
                    >
                      css
                    </span>
                  </div>
                </div>
                <a
                  href="/profile/update"
                  style={{ position: "absolute", right: "0" }}
                >
                  <i className="fa-solid fa-pen"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ marginTop: "1rem", padding: "20px", color: "gray" }}>
            <h3>General Info:</h3>
            <Row>
              <Col>
                <div style={{ marginBottom: "20px" }}>
                  <span>Age: 28 Years</span>
                  <br />
                  <span>Experience: No experience · Student</span>
                  <br />
                  <span> Minimum Salary: 3000</span>
                  <br />
                </div>
                <div>
                  <span>Nationality: Albania</span>
                  <br />
                  <span>Education Level: Diploma</span>
                  <br />
                  <span>Gender: Male</span>
                  <br />
                </div>
              </Col>
              <Col>
                <div style={{ marginBottom: "20px" }}>
                  <h4>Contact Info:</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-mobile"></i> 01140331005{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>{" "}
                      kiak09393i@gmail.com{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Career Interests:</h4>
                  <p>
                    Job Titles and Keywords: Abap Developer · Analog Design
                    Engineer
                  </p>
                  <p>Job Categories: Administration</p>
                  <p>Job Types: Part Time</p>
                </div>
              </Col>
            </Row>
          </Card>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              marginTop: "1rem",
              gridGap: "20px",
              marginBottom: "1rem",
            }}
          >
            <div>
              <Card style={{ height: "100%" }}>
                <Card.Body>
                  <h4>Experience</h4>
                  <p>1.Yrs</p>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ padding: "10px", marginBottom: "10px" }}>
                <h4>Skills</h4>
                <p>Tools and Fields of Expertise</p>
                <div>
                  <span
                    style={{
                      backgroundColor: "grey",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: "#fff",
                      fontSize: "15px",
                      padding: "5px",
                    }}
                  >
                    html
                  </span>
                  <span
                    style={{
                      backgroundColor: "grey",
                      borderRadius: "5px",
                      marginRight: "10px",
                      color: "#fff",
                      fontSize: "15px",
                      padding: "5px",
                    }}
                  >
                    css
                  </span>
                </div>
              </Card>
              <Card style={{ padding: "10px" }}>
                <h4>Language</h4>
                <p>English</p>
                <p>Intermidate</p>
              </Card>
            </div>
          </div>
          <Card
            style={{ borderTop: "3px solid rgb(0, 131, 187)", padding: "10px" }}
          >
            <Card.Body>
              <h4>Education</h4>
              <p>Diploma in cs</p>
              <p>Helwan University</p>
              <span>2022</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
