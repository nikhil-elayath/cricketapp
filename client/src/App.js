import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/reset" component={ResetPassword}></Route>
      </div>
    </Router>
  );
}

export default App;
