import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <span>
          <h1 id="title-header">News Reactor</h1>
        </span>
        <span>
          <h4 id="follow-text">Follow us here</h4>
        </span>
      </div>
    );
  }
}

export default Header;
