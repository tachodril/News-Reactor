import React, { Component } from "react";
import axios from "axios";
import "../styles/Sideitem.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { connect } from "react-redux";

class Sideitem extends Component {
  render() {
    const items = this.props.articles.map((post) => {
      return (
        <a style={{}} href={post.url} target="_blank">
          <div id="side-item">
            <img id="side-image" src={post.urlToImage}></img>
            <h6 id="side-title">{post.title}</h6>
          </div>
        </a>
      );
    });

    if (!this.props.articles.length) {
      return <div></div>;
    } else {
      return (
        <div id="full-item">
          <Card raised="true">
            <CardContent>
              <div id="small-header">
                <h5 id="trending-text">Trending Clicks</h5>
                <h6 id="see-all">See all</h6>
              </div>
              {items}
            </CardContent>
          </Card>
        </div>
      );
    }
  }
}

const matchStateToProps = (state, ownprops) => {
  var articles = [];
  if (ownprops.category === 0) {
    articles = state.articles1;
  } else if (ownprops.category === 1) {
    articles = state.articles2;
  } else if (ownprops.category === 2) {
    articles = state.articles3;
  } else if (ownprops.category === 3) {
    articles = state.articles4;
  } else if (ownprops.category === 4) {
    articles = state.articles5;
  } else if (ownprops.category === 5) {
    articles = state.articles6;
  } else if (ownprops.category === 6) {
    articles = state.articles7;
  } else if (ownprops.category === 7) {
    articles = state.articles8;
  }
  return {
    ...ownprops,
    articles: articles.slice(0, 6),
  };
};

export default connect(matchStateToProps)(Sideitem);
