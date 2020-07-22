import React, { Component } from "react";
import axios from "axios";
import Listcenteritem from "./Listcenteritem";

class Listcenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&language=en&category=general&pageSize=35&apiKey=37fb26157b3b48dd80f9ef8a891e1374"
      )
      .then((res) => {
        console.log(res);

        if (res) {
          this.setState({
            articles: res.data.articles,
            isLoaded: true,
          });
        }
      });
  }

  render() {
    const posts = this.state.articles.map((article) => {
      const temp = {
        author: article.author,
        title: article.title,
        imageurl: article.urlToImage,
        url: article.url,
        time: article.publishedAt,
        description: article.description,
      };
      return <Listcenteritem data={temp} />;
    });

    if (this.state.isLoaded === true) {
      return <div>{posts}</div>;
    } else {
      return (
        <div className="center">
          <h2 style={{ textAlign: "center" }}>Loading, please wait...</h2>
        </div>
      );
    }
  }
}

export default Listcenter;
