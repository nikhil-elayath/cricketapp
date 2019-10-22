import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamFixtures.css";
import { getFixtures, getPrediction } from "../actions/Teams";

export class TeamFixtures extends Component {
  componentDidMount() {
    this.props.getFixtures({ team_name: this.props.teams.team_name });

    this.props.getPrediction({ team_id: this.props.teams.team_id });
  }
  // OnPredictButtonClick() {
  //   console.log("predict button clicked");
  //   this.props.getPrediction({ team_id: this.props.teams.team_id });
  // }
  render() {
    console.log("reducer", this.props.fixtures);
    return (
      <div id="fixture-container">
        <div id="fixture">
          {/* <div className="centered">
            <div className="cards-new">
              <div
                style={{ borderRadius: "8px 0px 0px 8px" }}
                className="cardtest"
              >
                <p className="p-card">All</p>
              </div>
              <div className="cardt20">
                <p className="p-card">Test</p>
              </div>
              <div className="cardt20">
                <p className="p-card">ODI</p>
              </div>
              <div
                style={{ borderRadius: "0px 8px 8px 0px" }}
                className="cardt20"
              >
                <p className="p-card">T20</p>
              </div>
            </div>
          </div> */}

          <div id="fix-main-grid">
            {this.props.fixtures
              ? this.props.fixtures.map(fixtures => (
                  <div id="fixgrid-item1">
                    {/* //main grid container */}
                    <div id="fixture-container">
                      {/* {this.props.fixtures.images.map(images => (
                        <div
                          className="div-news-images"
                          style={{
                            backgroundImage: `url(data:image/jpeg;base64,${images.team_image}`,
                          }}
                        /> */}
                      {/* ))} */}
                      {/* first grid item */}
                      <p id="fix-date">{fixtures.date}</p>
                      {/* second grid item */}
                      <p id="fix-teams">
                        {fixtures.team_one}vs
                        {fixtures.team_two}
                      </p>
                      <p id="fix-venue">{fixtures.venue}</p>
                      <p id="fix-time">{fixtures.time}</p>
                      {/* <img
                      // id="pImage"
                      // className="playerImage"
                      className="main_img"
                      src={`data:image/jpeg;base64,${fixtures.news_image}`}
                    ></img> */}
                      <button
                        id="editbutton"
                        className="admineditpagebutton"
                        onChange={this.OnChange}
                        onClick={() =>
                          this.props.getPrediction(
                            fixtures.team_one_id,
                            fixtures.team_two_id
                          )
                        }
                      >
                        Predicted result
                      </button>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  fixtures: state.TeamsReducer.fixtures,
});

export default connect(
  mapStateTostate,
  { getFixtures, getPrediction }
)(TeamFixtures);
