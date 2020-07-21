import React, { Component } from "react";
import "../styles/Listcenteritem.css";

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
          <h2 id="title">{this.state.title}</h2>
          <div>
            <h4>
              {this.state.time}
              <span id="gap"></span>
              {this.state.author}
            </h4>
          </div>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
export default Listcenteritem;
