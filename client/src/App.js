import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Listcenter from "./components/Listcenter";
import Sidepanel from "./components/Sidepanel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div id="data">
          <div>
            <Listcenter id="center-main" />
          </div>
          <div>
            <Sidepanel id="side-main" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
