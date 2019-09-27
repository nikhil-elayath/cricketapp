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
        <Route exact path="/playersPage" component={PlayerLandingPage}></Route>
        <Route exact path="/playerInfo" component={PlayerInfo}></Route>
      </div>
    </Router>
  );
}

export default App;
