import React, { Component } from "react";
import { getNewsById } from "../actions/NewsAction";

import { getNews } from "../actions/Home";
import { connect } from "react-redux";
import "./css/NewsPage.css";
// import Navbar from './common/Navbar'
import news_img from "../components/images/vk.jpeg";
import { Link } from "react-router-dom";
import "./css/Home.css";

export class NewsPage extends Component {
  componentDidMount() {
    // console.log('NEWSPAGE')
    // console.log(this.props.match.params.id)
    const id = this.props.match.params.id;
    this.props.getNews();

    this.props.getNewsById(id);
  }
  onNewsClick = id => {
    // const id = this.props.match.params.id;
    // console.log('from news click', id)
    this.props.getNewsById(id);
  };
  render() {
    return (
      <div className="parent">
        <div className="navbar">{/* <Navbar /> */}</div>
        <div>
          {this.props.news.map(news => (
            <div className="newspage-grid-container">
              <div className="grid-item2">
                <p className="grid-item2" id="newspage-news-title">
                  <b>{news.news_title}</b>
                </p>
                <p id="news-date">{news.news_date} </p>

                {/* <div
                  className="div-news-images"
                  style={{
                    backgroundImage: `url(${news_img})`,
                  }}
                > */}
                {/* <img className="main_img" src={news_img} /> */}
                <img
                  // id="pImage"
                  // className="playerImage"
                  className="main_img"
                  src={`data:image/jpeg;base64,${news.news_image}`}
                ></img>
                {/* </div> */}
                <p id="news-content">{news.news_content} </p>
              </div>

              {/* Right side recent news section */}

              <div className="grid-item">
                <div>
                  <div
                    className="div-news-images"
                    style={
                      {
                        // backgroundImage: `url(${news_img})`,
                      }
                    }
                  >
                    {/* <img className="news_img" src={news_img} /> */}
                  </div>
                  {/* using the same css from news list in news page */}
                  {/* recent news */}
                  {this.props.home.map(recent => (
                    // <Link
                    //   to={{
                    //     pathname: "/newsbyid/" + recent.news_id,
                    //   }}
                    // >
                    <div className="div-newspage">
                      <div
                        className="div-news-images"
                        style={{
                          backgroundImage: `url(data:image/jpeg;base64,${recent.news_image}`
                        }}
                      />
                      <div
                        className="div-news-details"
                        onClick={() => this.onNewsClick(recent.news_id)}
                      >
                        <p class="p-news">
                          <b id="recent-news-title">{recent.news_title}</b>
                        </p>
                        <p id="recent-news-date" className="date">
                          {recent.news_date}{" "}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.NewsReducer.news,
  home: state.HomeReducer.home
});
export default connect(
  mapStateToProps,
  {
    getNewsById,
    getNews
  }
)(NewsPage);
