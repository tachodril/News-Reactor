import React, { Component } from "react";
import Listcenteritem from "./Listcenteritem";
import { connect } from "react-redux";
import axios from "axios";

class Listcenter extends Component {
  constructor(props) {
    super(props);

    this.fetchNewsFunction = this.fetchNewsFunction.bind(this);
  }

  fetchNewsFunction(cat) {
    var catUrl = "";
    if (cat === 0) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 1) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 2) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 3) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 4) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 5) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 6) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    } else if (cat === 7) {
      catUrl =
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=18&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
    }
    var posts = [];
    axios.get(catUrl).then((res) => {
      posts = res.data.articles;
      this.props.fetchArticles(posts, cat);
    });
  }

  render() {
    var flags = [];
    flags = this.props.isLoaded;
    var flag = flags[this.props.curTab];

    if (flag === false) {
      this.fetchNewsFunction(this.props.curTab);
    }

    const posts = this.props.articles.map((article) => {
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

    return <div>{posts}</div>;

    // if (this.state.isLoaded === true) {
    //   return <div>{posts}</div>;
    // } else {
    //   return (
    //     <div className="center">
    //       <h2 style={{ textAlign: "center" }}>Loading, please wait...</h2>
    //     </div>
    //   );
    // }
  }
}

const mapStateToProps = (state) => {
  var posts;
  var tab = state.curTab;

  if (tab === 0) {
    posts = [...state.articles1];
  } else if (tab === 1) {
    posts = state.articles2;
  } else if (tab === 2) {
    posts = state.articles3;
  } else if (tab === 3) {
    posts = state.articles4;
  } else if (tab === 4) {
    posts = state.articles5;
  } else if (tab === 5) {
    posts = state.articles6;
  } else if (tab === 6) {
    posts = state.articles7;
  } else if (tab === 7) {
    posts = state.articles8;
  }

  return {
    articles: posts,
    curTab: tab,
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (articles, cat) => {
      dispatch({ type: "FETCH_ARTICLES", articles: articles, cat: cat });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listcenter);
