import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MatchLandingPage from './components/MatchLandingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/match" component={MatchLandingPage}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
