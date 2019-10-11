import React, { Component } from "react";
import TeamSecondaryNavbar from "../components/TeamSecondaryNavbar";
import TeamInfo from "./TeamInfo";
import TeamStats from "./TeamStats";

export default class TeamDetails extends Component {
  state = {
    detailsType: "info"
  };
  changeDetailsType = detailsType => {
    this.setState({ detailsType });
  };
  render() {
    console.log("team props is ", this.props.history.location.state.teams);
    return (
      <div>
        <TeamSecondaryNavbar
          changeDetailsType={this.changeDetailsType}
          teams={this.props.history.location.state.teams}
        />
        {this.state.detailsType === "stats" ? (
          <TeamStats teams={this.props.history.location.state.teams} />
        ) : (
          <TeamInfo teams={this.props.history.location.state.teams} />
        )}
      </div>
    );
  }
}
