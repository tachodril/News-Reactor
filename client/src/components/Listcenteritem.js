import React, { Component } from "react";
import "../styles/Listcenteritem.css";
import calendericon from "../cal.png";
import authoricon from "../author.png";
import noimage from "../noImage.png";

import { Col, Row, Container } from "react-bootstrap";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Listcenteritem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raised: false,
      titleStyle: { fontFamily: "Open Sans Bold" },
    };
    this.getTime = this.getTime.bind(this);
    this.changeTitleStyle = this.changeTitleStyle.bind(this);
  }

  changeTitleStyle(id) {
    var temp = {};
    var flag;
    if (id === 0) {
      flag = false;
      temp = { fontFamily: "Open Sans Bold" };
    } else {
      flag = true;
      temp = {
        color: "rgb(8, 8, 73)",
        fontFamily: "Open Sans Bold",
        textDecoration: "underline",
      };
    }
    this.setState({ raised: flag, titleStyle: temp });
  }

  getTime() {
    return new Date(this.props.data.time).toUTCString();
  }

  render() {
    const temp = this.props.data.author ? (
      <img id="cal-icon" src={authoricon}></img>
    ) : (
      <div></div>
    );

    return (
      <div id="whole-item">
        <a
          style={{ textDecoration: "None" }}
          href={this.props.data.url}
          target="_blank"
        >
          <Card
            onMouseEnter={() => this.changeTitleStyle(1)}
            onMouseLeave={() => this.changeTitleStyle(0)}
            raised={this.state.raised}
          >
            <CardContent>
              <Container>
                <Row>
                  <Col sm={4}>
                    <div id="image-box">
                      <img
                        id="image"
                        placeholder={noimage}
                        src={this.props.data.imageurl}
                      />
                    </div>
                  </Col>
                  <Col sm={8}>
                    <div id="info">
                      <h4 style={this.state.titleStyle}>
                        {this.props.data.title}
                      </h4>
                      <div>
                        <p id="temp">
                          <img id="cal-icon" src={calendericon}></img>
                          {this.getTime()}
                          <span id="gap"></span>
                          {temp}
                          {this.props.data.author}
                        </p>
                      </div>
                      <p>{this.props.data.description}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </CardContent>
          </Card>
        </a>
      </div>
    );
  }
}
export default Listcenteritem;
