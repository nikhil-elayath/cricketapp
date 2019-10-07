import React from 'react';
import './App.css';
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
import MatchSummaryDetails from './components/MatchSummaryDetails';

function App() {
	return (
		<Router>
			<Route path="/login" exact component={Login} />
			<Route path="/register" exact component={Register} />
			<Route path="/resetPassword" exact component={ResetPassword} />
			<Route exact path="/players" component={PlayerLandingPage}></Route>
			<Route
				exact
				path="/playerInfo/:player_id"
				component={PlayerInfo}
			></Route>
			<Route
				exact
				path="/matches/summary/:id"
				component={MatchSummaryDetails}
			></Route>
			<Route
				exact
				path="/matches/scorecard/:id"
				component={MatchSummaryDetails}
			></Route>
			<Route exact path="/matches" component={MatchLandingPage}></Route>
			<Route exact path="/teams" component={TeamLandingPage}></Route>
			<Route exact path="/teaminfo/:team_id" component={TeamInfo}></Route>
			<Route path="/" exact component={Home} />
		</Router>
	);
}

export default App;
