import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MatchLandingPage from './components/MatchLandingPage'
import MatchSummaryDetails from './components/MatchSummaryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/matches" component={MatchLandingPage}></Route>
          <Route exact path="/matches/summary/:id" component={MatchSummaryDetails}></Route>

        </div>
      </Router>
    </div>
    
  );
}

export default App;
