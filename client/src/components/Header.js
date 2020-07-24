import React, { Component } from "react";
import "../styles/Header.css";
import github from "../icons/github.svg";
import twitter from "../icons/twitter.svg";
import instagram from "../icons/instagram.svg";

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
            <a
              style={{}}
              href={"https://github.com/tachodril/News-Reactor.git"}
              target="_blank"
            >
              <img id="img" src={github}></img>
            </a>
            <img id="img" src={twitter}></img>
            <img id="img" src={instagram}></img>
          </h4>
        </span>
      </div>
    );
  }
}

export default Header;
