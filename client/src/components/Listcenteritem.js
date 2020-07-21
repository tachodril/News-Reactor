import React, { Component } from "react";

class Listcenteritem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.title,
      imageurl: props.data.imageurl,
      url: props.data.url,
      time: props.data.time,
      description: props.data.description,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}
export default Listcenteritem;
