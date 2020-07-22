import React, { Component } from "react";
import "../styles/Navbar.css";
import { Grid, Col, Row, Container } from "react-bootstrap";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Container id="Container">
          <Row>
            <Col>
              <h2 id="nav-item">India</h2>
            </Col>
            <Col>
              <h2 id="nav-item">World</h2>
            </Col>
            <Col>
              <h2 id="nav-item">Politics</h2>
            </Col>
            <Col>
              <h2 id="nav-item">Entertainment</h2>
            </Col>
            <Col>
              <h2 id="nav-item">Sports</h2>
            </Col>
            <Col>
              <h2 id="nav-item">Science</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;
