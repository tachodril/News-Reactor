import React, { Component } from "react";
import "../styles/Navbar.css";
import { Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleClcik = this.handleClcik.bind(this);
    this.giveStyle = this.giveStyle.bind(this);
  }

  handleClcik(tab) {
    this.props.changeTab(tab);
  }

  giveStyle(id) {
    const itemStyle =
      this.props.curTab !== id
        ? {
            height: "100%",
            cursor: "pointer",
            borderBottom: "3px solid rgb(235, 235, 240)",
            fontSize: "26px",
            fontFamily: "fantasy",
            padding: "0px 10px",
            backgroundColor: "whitesmoke",
          }
        : {
            height: "100%",
            cursor: "pointer",
            borderBottom: "3px solid midnightblue",
            fontSize: "26px",
            fontFamily: "fantasy",
            padding: "0px 10px",
            backgroundColor: "whitesmoke",
          };
    return itemStyle;
  }

  render() {
    return (
      <div id="navbar">
        <Container id="Container">
          <Row>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(0)}
                onClick={() => this.handleClcik(0)}
              >
                India
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(1)}
                onClick={() => this.handleClcik(1)}
              >
                World
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(2)}
                onClick={() => this.handleClcik(2)}
              >
                Business
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(3)}
                onClick={() => this.handleClcik(3)}
              >
                Entertainment
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(4)}
                onClick={() => this.handleClcik(4)}
              >
                Sports
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(5)}
                onClick={() => this.handleClcik(5)}
              >
                Science
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(6)}
                onClick={() => this.handleClcik(6)}
              >
                Health
              </h2>
            </Col>
            <Col>
              <h2
                className="nav-item"
                style={this.giveStyle(7)}
                onClick={() => this.handleClcik(7)}
              >
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
