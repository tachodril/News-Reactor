import React, { Component } from "react";
import "../styles/Templist.css";
import calendericon from "../cal.png";
import authoricon from "../author.png";

import { Grid, Col, Row, Container } from "react-bootstrap";

class Templist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.data.author,
      title: props.data.title,
      imageurl: props.data.imageurl,
      url: props.data.url,
      time: props.data.time,
      description: props.data.description,
    };
  }
  render() {
    const temp = this.state.author ? (
      <img id="cal-icon" src={authoricon}></img>
    ) : (
      <div></div>
    );
    return (
      <div id="whole-item">
        <Container>
          <Row>
            <Col sm={4}>
              <div id="image-box">
                <img id="image" src={this.state.imageurl} />
              </div>
            </Col>
            <Col sm={8}>
              <div id="info">
                <h4 id="title">{this.state.title}</h4>
                <div>
                  <p id="temp">
                    <img id="cal-icon" src={calendericon}></img>
                    {this.state.time}
                    <span id="gap"></span>
                    {temp}
                    {this.state.author}
                  </p>
                </div>
                <p>{this.state.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Templist;
