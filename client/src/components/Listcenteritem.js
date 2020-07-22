import React, { Component } from "react";
import "../styles/Listcenteritem.css";
import calendericon from "../cal.png";
import authoricon from "../author.png";
import noimage from "../noImage.png";

import { Grid, Col, Row, Container } from "react-bootstrap";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class Listcenteritem extends Component {
  constructor(props) {
    super(props);

    const time = new Date(props.data.time).toUTCString();

    this.state = {
      titleColor: "black",
      over: false,
      author: props.data.author,
      title: props.data.title,
      imageurl: props.data.imageurl,
      url: props.data.url,
      time: time,
      description: props.data.description,
    };
    this.toggleOver = this.toggleOver.bind(this);
  }

  toggleOver() {
    var flag = this.state.over;
    flag = !flag;
    var color = flag ? "blue" : "black";
    this.setState({
      over: flag,
      titleColor: color,
    });
  }

  render() {
    const temp = this.state.author ? (
      <img id="cal-icon" src={authoricon}></img>
    ) : (
      <div></div>
    );

    const curColor = this.state.titleColor;
    return (
      <div id="whole-item">
        <a
          style={{ textDecoration: "None" }}
          href={this.state.url}
          target="_blank"
        >
          <Card
            onMouseOver={this.toggleOver}
            onMouseOut={this.toggleOver}
            raised={this.state.over}
          >
            <CardContent>
              <Container>
                <Row>
                  <Col sm={4}>
                    <div id="image-box">
                      <img
                        id="image"
                        placeholder={noimage}
                        src={this.state.imageurl}
                      />
                    </div>
                  </Col>
                  <Col sm={8}>
                    <div id="info">
                      <h4 style={{ color: { curColor } }} id="title">
                        {this.state.title}
                      </h4>
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
            </CardContent>
          </Card>
        </a>
      </div>
    );
  }
}
export default Listcenteritem;
