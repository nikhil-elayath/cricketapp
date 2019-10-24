import React, { Component } from "react";
import MatchSecondaryNavbar from "./common/MatchSecondaryNavbar";
import MatchSummaryDetails from "./MatchSummaryDetails";
import MatchScoreDetails from "./MatchScoreDetails";
import MatchStatsDetails from "./MatchStatsDetails";
import Navbar from './common/Navbar';

export default class MatchDetails extends Component {

  // [yatin] The detault view of the matche page is the summary page,
  // hence the state has detailsType as "summary"
  state = {
    detailsType: "summary"
  };
  changeDetailsType = detailsType => {
    this.setState({ detailsType });
  };
  render() {
    return (

      <div>
        <div>

          {/*[yatin] The primary navbar will be present in all the matches page*/}
          {/*[yatin] The primary navbar will not conatin the gender options*/}
          <Navbar
            gender={this.props.gender}
            changeGender={getGender => this.props.changeGender(getGender)}
            showGender={false}
          />
        </div>
        {/*[yatin] The secondary navbar will be present in all the matches page*/}
        {/*[yatin] When cicked on any of the options(summary, scorecard, stats) */}
        {/*[yatin] the page will be with that content */}
        <MatchSecondaryNavbar
          changeDetailsType={this.changeDetailsType}
          match={this.props.history.location.state.match}
        />
        {this.state.detailsType === "stats" ? (
          <MatchStatsDetails
            match_id={this.props.history.location.state.match.match_id}
          />
        ) : this.state.detailsType === "scorecard" ? (
          <MatchScoreDetails
            match_id={this.props.history.location.state.match.match_id}
          />
        ) : (
              <MatchSummaryDetails
                match_id={this.props.history.location.state.match.match_id}
              />
            )}
      </div>
    );
  }
}
