import React, { Component } from "react";
import { connect } from "react-redux";
import TeamSecondaryNavbar from "../components/TeamSecondaryNavbar";
import TeamInfo from "./TeamInfo";
import TeamStats from "./TeamStats";
import TeamFixtures from "./TeamFixtures";
import { getTeams } from "../actions/Teams";
import Navbar from "./common/Navbar";

export class TeamDetails extends Component {
  state = {
    detailsType: "info"
  };
  changeDetailsType = detailsType => {
    this.setState({ detailsType });
  };
  render() {
    console.log("team props is ", this.props);
    return (
      <div>
        <Navbar
          gender={this.props.gender}
          changeGender={getGender => this.props.changeGender(getGender)}
        />
        <TeamSecondaryNavbar
          gender={this.props.gender}
          changeGender={getGender => this.props.changeGender(getGender)}
          changeDetailsType={this.changeDetailsType}
          teams={this.props.history.location.state.teams}
        />
        {this.state.detailsType === "stats" ? (
          <TeamStats
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
            teams={this.props.history.location.state.teams}
          />
        ) : this.state.detailsType === "fixtures" ? (
          <TeamFixtures
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
            teams={this.props.history.location.state.teams}
          />
        ) : (
          <TeamInfo
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
            teams={this.props.history.location.state.teams}
          />
        )}
      </div>
    );
  }
}

const mapStateTostate = state => ({
  teams: state.TeamsReducer.teams
});

export default connect(
  mapStateTostate,
  { getTeams }
)(TeamDetails);
