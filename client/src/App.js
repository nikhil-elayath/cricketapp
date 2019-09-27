import React from "react";
// import logo from './logo.svg';
import "./App.css";
import PlayerLandingPage from "../src/components/PlayerLandingPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={PlayerLandingPage}></Route>
      </div>
    </Router>
  );
}

export default App;
