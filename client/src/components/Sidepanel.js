import React, { Component } from "react";
import Sideitem from "./Sideitem";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class Sidepanel extends Component {
  render() {
    return (
      <div>
        <div style={{ marginTop: "60px" }}>
          <Card raised="true">
            <CardContent>
              <Sideitem category={"india"} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Sidepanel;
