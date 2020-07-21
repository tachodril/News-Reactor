import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <h2 id="nav-item">India</h2>
        <h2 id="nav-item">World</h2>
        <h2 id="nav-item">Politics</h2>
        <h2 id="nav-item">Entertainment</h2>
        <h2 id="nav-item">Sports</h2>
        <h2 id="nav-item">Science</h2>
      </div>
    );
  }
}

export default Navbar;
