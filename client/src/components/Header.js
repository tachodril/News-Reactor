import React, { Component } from "react";
import "../styles/Header.css";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram-80.png";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <span>
          <h2 id="title-header">News Reactor</h2>
        </span>
        <span>
          <h4 id="follow-text">
            Follow us here
            <img id="img" src={github}></img>
            <img id="img" src={twitter}></img>
            <img id="img" src={instagram}></img>
          </h4>
        </span>
      </div>
    );
  }
}

export default Header;
