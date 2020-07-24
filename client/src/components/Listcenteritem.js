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

    // this.state = {
    //   author: props.data.author,
    //   title: props.data.title,
    //   imageurl: props.data.imageurl,
    //   url: props.data.url,
    //   time: time,
    //   description: props.data.description,
    // };
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
          <Card>
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
                      <h4 id="title">{this.props.data.title}</h4>
                      <div>
                        <p id="temp">
                          <img id="cal-icon" src={calendericon}></img>
                          {this.props.data.time}
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
