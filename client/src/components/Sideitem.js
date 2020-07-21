import React, { Component } from "react";

class Sideitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
    };
  }

  render() {
    return (
      <div>
        <h2>Trending Clicks</h2>
      </div>
    );
  }
}

export default Sideitem;
