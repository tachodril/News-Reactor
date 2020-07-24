import React, { Component } from "react";
import "../styles/Navbar.css";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleClcik = this.handleClcik.bind(this);
  }

  handleClcik(tab) {
    this.props.changeTab(tab);
  }

  render() {
    return (
      <div id="navbar">
        <Container id="Container">
          <Row>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(0)}>
                India
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(1)}>
                World
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(2)}>
                Business
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(3)}>
                Entertainment
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(4)}>
                Sports
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(5)}>
                Science
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(6)}>
                Health
              </h2>
            </Col>
            <Col>
              <h2 id="nav-item" onClick={() => this.handleClcik(7)}>
                Technology
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    curTab: state.curTab,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    changeTab: (newTab) => {
      dispatch({ type: "CHANGE_TAB", newTab: newTab });
    },
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(Navbar);
