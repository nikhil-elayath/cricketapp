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

//Nikhil
import Home from "./components/Home";
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
import decode from "jwt-decode";

let decoded_token;
export default class App extends Component {
  state = {
    gender: "male",
  };

  changeGender = gender_type => {
    gender_type == "male"
      ? this.setState({ gender: "male" })
      : this.setState({ gender: "female" });
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      decoded_token = decode(localStorage.getItem("token"));
      console.log("decoded token", decoded_token);
    } else {
      console.log("no token found");
    }
  }
  render() {
    return (
      <Router>
        {console.log("gender", this.state.gender)}
        {/* //piyush */}
        {decoded_token ? (
          decoded_token.isAdmin ? (
            <>
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
            </>
          ) : null
        ) : null}
        <Route
          path="/login"
          exact
          component={props => (
            <Login
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
        <Route
          path="/register"
          exact
          component={props => (
            <Register
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
        <Route
          path="/resetPassword"
          exact
          component={props => (
            <ResetPassword
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />

        {/* //ashfi */}
        <Route
          exact
          path="/players"
          //   component={PlayerLandingPage}
          component={props => (
            <PlayerLandingPage
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/playerInfo/:player_id"
          component={props => (
            <PlayerInfo
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/batting-stats"
          component={props => (
            <BattingStats
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/bowling-stats"
          component={props => (
            <BowlingStats
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>

        <Route
          exact
          path="/match/details/:id"
          component={props => (
            <MatchDetails
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/matches/summary/:id"
          component={props => (
            <MatchSummaryDetails
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/matches/scorecard/:id"
          component={props => (
            <MatchScoreDetails
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/matches/stats/:id"
          component={props => (
            <MatchStatsDetails
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>
        <Route
          exact
          path="/matches"
          component={props => (
            <MatchLandingPage
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        ></Route>

        {/* aditya */}
        <Route
          exact
          path="/teamdetails/:team_id"
          // component={TeamDetails}
          component={props => (
            <TeamDetails
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
        <Route
          exact
          path="/teams"
          component={props => (
            <TeamLandingPage
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
        {/* <Route exact path="/teaminfo/:team_id" component={TeamInfo}></Route> */}
        <Route
          path="/"
          exact
          component={props => (
            <Home
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
        <Route
          exact
          path="/newsbyid/:id"
          exact
          component={props => (
            <NewsPage
              {...props}
              gender={this.state.gender}
              changeGender={getGender => this.changeGender(getGender)}
            />
          )}
        />
      </Router>
    );
  }
}
