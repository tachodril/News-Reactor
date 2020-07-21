import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Listcenter from "./components/Listcenter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Listcenter />
      </div>
    );
  }
}

export default App;
