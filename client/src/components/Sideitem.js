import React, { Component } from "react";
import axios from "axios";
import "../styles/Sideitem.css";

class Sideitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&language=en&category=general&pageSize=8&apiKey=37fb26157b3b48dd80f9ef8a891e1374"
      )
      .then((res) => {
        this.setState({
          posts: res.data.articles,
        });
      });
  }

  render() {
    const items = this.state.posts.map((post) => {
      return (
        <div id="side-item">
          <img id="side-image" src={post.urlToImage}></img>
          <h3 id="side-title">{post.title}</h3>
        </div>
      );
    });

    if (!this.state.posts.length) {
      return <div></div>;
    } else {
      return (
        <div>
          <div id="small-header">
            <h2 id="trending-text">Trending Clicks</h2>
            <h4 id="see-all">See all</h4>
          </div>
          {items}
        </div>
      );
    }
  }
}

export default Sideitem;
