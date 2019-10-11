import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import PlayerLandingPage from "../src/components/PlayerLandingPage";
import PlayerInfo from "../src/components/PlayerInfo";
import TeamLandingPage from "./components/TeamLandingPage";
import TeamInfo from "./components/TeamInfo";
import Home from "./components/Home";
import MatchLandingPage from "./components/MatchLandingPage";
import MatchSummaryDetails from "./components/MatchSummaryDetails";
import MatchScoreDetails from "./components/MatchScoreDetails";
import AdminPlayer from "./components/AdminPlayerPage";
import AdminTeam from "./components/AdminTeamPage";
import AdminEditPlayer from "./components/AdminEditPlayer";
import AdminEditTeam from "./components/AdminEditTeam";
import BattingStats from "./components/PlayerBattingStats";
import BowlingStats from "./components/PlayerBowlingStats";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/resetPassword" exact component={ResetPassword} />
      <Route exact path="/players" component={PlayerLandingPage}></Route>
      <Route exact path="/playerInfo/:player_id" component={PlayerInfo}></Route>
      <Route exact path="/batting-stats" component={BattingStats}></Route>
      <Route exact path="/bowling-stats" component={BowlingStats}></Route>
      <Route
        exact
        path="/matches/summary/:id"
        component={MatchLandingPage}
      ></Route>
      <Route exact path="/matches" component={MatchLandingPage}></Route>
      <Route exact path="/teams" component={TeamLandingPage}></Route>
      <Route exact path="/teaminfo/:team_id" component={TeamInfo}></Route>
      <Route path="/" exact component={Home} />

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
    </Router>
  );
}

export default App;
