import React, { Component } from "react";
import { connect } from "react-redux";
import TeamSecondaryNavbar from "../components/TeamSecondaryNavbar";
import TeamInfo from "./TeamInfo";
import TeamStats from "./TeamStats";
import TeamFixtures from "./TeamFixtures";
import { getTeams } from "../actions/Teams";

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
        <TeamSecondaryNavbar
          changeDetailsType={this.changeDetailsType}
          teams={this.props.history.location.state.teams}
        />
        {this.state.detailsType === "stats" ? (
          <TeamStats teams={this.props.history.location.state.teams} />
        ) : this.state.detailsType === "fixtures" ? (
          <TeamFixtures teams={this.props.history.location.state.teams} />
        ) : (
          <TeamInfo teams={this.props.history.location.state.teams} />
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
