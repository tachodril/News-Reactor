import React, { Component } from "react";
import Listcenteritem from "./Listcenteritem";
import { connect } from "react-redux";
import axios from "axios";

class Listcenter extends Component {
  constructor(props) {
    super(props);

    var flags = [];
    flags = props.isLoaded;
    var flag = flags[props.curTab];
    if (!flag) {
      var catUrl = "";
      if (props.curTab === 0) {
        catUrl =
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=37fb26157b3b48dd80f9ef8a891e1374";
      }
      var posts = [];
      axios.get(catUrl).then((res) => {
        posts = res.data.articles;
        props.fetchArticles(posts);
      });
    }
  }

  render() {
    console.log("props " + this.props);

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
  return {
    articles: state.articles1,
    curTab: state.curTab,
    isLoaded: state.isLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (articles) => {
      dispatch({ type: "FETCH_ARTICLES", articles: articles });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listcenter);
