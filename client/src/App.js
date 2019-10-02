import React from "react";
// import logo from './logo.svg';
import "./App.css";
import PlayerLandingPage from "../src/components/PlayerLandingPage";
import PlayerInfo from "../src/components/PlayerInfo";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/players-page" component={PlayerLandingPage}></Route>
        <Route
          exact
          path="/player-info/:player_id"
          component={PlayerInfo}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
