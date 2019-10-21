import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamFixtures.css";
import { getFixtures } from "../actions/Teams";

export class TeamFixtures extends Component {
  componentDidMount() {
    this.props.getFixtures({ team_name: this.props.teams.team_name });
    console.log(this.props.teams.team_name);
  }
  render() {
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
            {this.props.fixtures.map(fixtures => (
              <div id="fixgrid-item1">
                {/* //main grid container */}
                <div id="fixture-container">
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
                </div>
              </div>
            ))}
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
  { getFixtures }
)(TeamFixtures);
