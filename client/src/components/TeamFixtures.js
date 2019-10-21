import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamFixtures.css";
import { getFixtures } from "../actions/Teams";

export class TeamFixtures extends Component {
  componentDidMount() {
    this.props.getFixtures();
  }
  render() {
    return (
      <div id="bla">
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
          {this.props.fixtures.map(fixtures => (
            <p>hello {fixtures.team_one} </p>
          ))}
        </div>
        <p> asdsd</p>
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
