import React, { Component } from "react";
import { getNews, getNewsById } from "../actions/NewsAction";
import { connect } from "react-redux";

export class NewsPage extends Component {
  componentDidMount() {
    console.log("NEWSPAGE");
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.props.getNewsById(id);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <div className="div-section">
          <div className="div-news-section">
            {this.props.news.map(news => (
              <div className="div-news">
                <div
                  className="div-news-images"
                  style={
                    {
                      // backgroundImage: `url(${news_img})`,
                    }
                  }
                ></div>
                <div className="div-news-details">
                  <p className="p-news">
                    <b>{news.news_title}</b>
                  </p>
                  <p className="date">{news.news_content} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.NewsReducer.news,
});
export default connect(
  mapStateToProps,
  {
    getNewsById,
  }
)(NewsPage);
