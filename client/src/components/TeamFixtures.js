import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamFixtures.css";
import { getFixtures } from "../actions/Teams";

export class TeamFixtures extends Component {
  render() {
    return (
      <div>
        <div className="team-fixtures-container">
          <div className="centered">
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
          </div>
          <div className="fixture-container">
            <div className="fixture-details">
              <div className="fixture-col-1">
                <p className="fixture-info-type">T20</p>
              </div>
              <div className="fixture-col-2">
                <p className="fixture-info-one">Wed 02 - Sun 06 Oct</p>
                <p className="fixture-info-two">9:30 (IST)</p>
              </div>
              <div className="fixture-col-3">
                <p className="fixture-info-one">India vs Bangladesh</p>
                <p className="fixture-info-two">JCA Stadium, Ranchi</p>
              </div>
            </div>
          </div>
          <div className="fixture-container">
            <div className="fixture-details">
              <div className="fixture-col-1">
                <p className="fixture-info-type">T20</p>
              </div>
              <div className="fixture-col-2">
                <p className="fixture-info-one">Wed 02 - Sun 06 Oct</p>
                <p className="fixture-info-two">9:30 (IST)</p>
              </div>
              <div className="fixture-col-3">
                <p className="fixture-info-one">India vs South Africa</p>
                <p className="fixture-info-two">JCA Stadium, Ranchi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  fixtures: state.TeamsReducer.fixtures
});

export default connect(
  mapStateTostate,
  { getFixtures }
)(TeamFixtures);
