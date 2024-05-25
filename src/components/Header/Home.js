import React from "react";
import { Row, Form, Button, FormControl, Col } from "react-bootstrap";
import About from "./About";
import Jops from "./Jops";
const Home = () => {
  return (
    <>
      <Row className="home">
        <Col className="home-col">
          <h1>Find the Best Jobs in Egypt</h1>
          <p>
            Searching for vacancies & career opportunities? WUZZUF helps you in
            your job search in Egypt
          </p>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search A Job"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" style={{ marginLeft: "10px" }}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <About />
      <Jops />
    </>
  );
};

export default Home;
