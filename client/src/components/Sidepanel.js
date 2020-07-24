import React, { Component } from "react";
import Sideitem from "./Sideitem";
import { connect } from "react-redux";

class Sidepanel extends Component {
  render() {
    const MapCenterSide = {
      0: [1, 2, 3, 4],
      1: [3, 4, 5, 6],
      2: [5, 3, 4, 1],
      3: [6, 4, 7, 8],
      4: [1, 2, 6, 7],
      5: [6, 3, 4, 2],
      6: [1, 2, 3, 4],
      7: [3, 4, 5, 6],
    };

    const cur = this.props.curTab;
    var list = [];
    list = MapCenterSide[cur];
    return (
      <div>
        <div style={{ marginTop: "60px" }}>
          <Sideitem category={list[0]} />
          <Sideitem category={list[1]} />
          <Sideitem category={list[2]} />
          <Sideitem category={list[3]} />
        </div>
      </div>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    curTab: state.curTab,
  };
};

export default connect(matchStateToProps)(Sidepanel);
