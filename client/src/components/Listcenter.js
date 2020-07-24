import React, { Component } from "react";
import Listcenteritem from "./Listcenteritem";
import { connect } from "react-redux";

class Listcenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(Listcenter);
