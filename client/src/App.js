import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";

//ashfi
import PlayerLandingPage from "../src/components/PlayerLandingPage";
import PlayerInfo from "../src/components/PlayerInfo";
import BattingStats from "./components/PlayerBattingStats";
import BowlingStats from "./components/PlayerBowlingStats";

//aditya
import TeamLandingPage from "./components/TeamLandingPage";
import TeamDetails from "./components/TeamDetails";

// import TeamInfo from "./components/TeamInfo";
import Home from "./components/Home";
// import MatchLandingPage from "./components/MatchLandingPage";
// import MatchSummaryDetails from "./components/MatchSummaryDetails";
// import MatchScoreDetails from "./components/MatchScoreDetails";

//Nikhil
import NewsPage from "./components/NewsPage";

//piyush
import AdminPlayer from "./components/AdminPlayerPage";
import AdminTeam from "./components/AdminTeamPage";
import AdminEditPlayer from "./components/AdminEditPlayer";
import AdminEditTeam from "./components/AdminEditTeam";

//yatin
import MatchLandingPage from "./components/MatchLandingPage";
import MatchSummaryDetails from "./components/MatchSummaryDetails";
import MatchScoreDetails from "./components/MatchScoreDetails";
import MatchStatsDetails from "./components/MatchStatsDetails";
import MatchDetails from "./components/MatchDetails";

// ankit
import Navbar from "./components/common/Navbar";
export default class App extends Component {
  state = {
    gender: "male"
  };
  changeGender = gender_type => {
    gender_type == "male"
      ? this.setState({ gender: "male" })
      : this.setState({ gender: "female" });
  };
  render() {
    return (
      <Router>
        <Navbar
          changeGender={getGender => this.changeGender(getGender)}
          gender={this.state.gender}
        />
        {console.log("gender", this.state.gender)}
        {/* //piyush */}
        <Route exact path="/adminplayer" component={AdminPlayer}></Route>
        <Route exact path="/adminteam" component={AdminTeam}></Route>
        <Route
          exact
          path="/admineditplayer/:player_id"
          component={AdminEditPlayer}
        ></Route>
        <Route
          exact
          path="/admineditteam/:team_id"
          component={AdminEditTeam}
        ></Route>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/resetPassword" exact component={ResetPassword} />

        {/* //ashfi */}
        <Route
          exact
          path="/players"
          //   component={PlayerLandingPage}
          component={props => (
            <PlayerLandingPage {...props} gender={this.state.gender} />
          )}
        ></Route>
        <Route
          exact
          path="/playerInfo/:player_id"
          component={PlayerInfo}
          gender={this.state.gender}
        ></Route>
        <Route
          exact
          path="/batting-stats"
          component={BattingStats}
          gender={this.state.gender}
        ></Route>
        <Route
          exact
          path="/bowling-stats"
          component={BowlingStats}
          gender={this.state.gender}
        ></Route>

        <Route exact path="/match/details/:id" component={MatchDetails}></Route>
        <Route exact path="/match/details/:id" component={MatchDetails}></Route>
        <Route
          exact
          path="/matches/summary/:id"
          component={MatchSummaryDetails}
        ></Route>
        <Route
          exact
          path="/matches/scorecard/:id"
          component={MatchScoreDetails}
        ></Route>
        <Route
          exact
          path="/matches/stats/:id"
          component={MatchStatsDetails}
        ></Route>
        <Route exact path="/matches" component={MatchLandingPage}></Route>

        {/* aditya */}
        <Route
          exact
          path="/teamdetails/:team_id"
          component={TeamDetails}
        ></Route>

        <Route exact path="/teams" component={TeamLandingPage} />
        {/* <Route exact path="/teaminfo/:team_id" component={TeamInfo}></Route> */}
        <Route path="/" exact component={Home} />
        <Route exact path="/newsbyid/:id" exact component={NewsPage} />
      </Router>
    );
  }
}
