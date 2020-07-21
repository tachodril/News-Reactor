import React, { Component } from "react";
import "../styles/Listcenteritem.css";
import calendericon from "../cal.png";
import authoricon from "../author.png";

class Listcenteritem extends Component {
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
    return (
      <div id="whole-item">
        <div id="image-box">
          <img id="image" src={this.state.imageurl} />
        </div>
        <div id="info">
          <h3 id="title">{this.state.title}</h3>
          <div>
            <p>
              <img id="cal-icon" src={calendericon}></img>
              {this.state.time}
              <span id="gap"></span>
              <img id="cal-icon" src={authoricon}></img>
              {this.state.author}
            </p>
          </div>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
export default Listcenteritem;
