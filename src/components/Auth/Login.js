import React from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormControl,
  Button,
  Card,
} from "react-bootstrap";
const Login = () => {
  return (
    <Container>
      <Row className="form">
        <Col className="form-col">
          <Card className="form-card">
            <a
              className="btn btn-outline-dark"
              href="/users/googleauth"
              role="button"
              style={{ textTransform: "none" }}
            >
              <img
                style={{
                  marginBottom: "3px",
                  marginRight: "5px",
                  width: "20px",
                }}
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Login with Google
            </a>
            <p className="par">or</p>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
            <p>
              New Join To Wuzzuf? <a href="/register">Sign Up</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
