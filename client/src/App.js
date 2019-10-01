import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SecondaryNavbar from "./components/common/SecondaryNavbar";

function App() {
	return (
		<Router>
			<Route path="/nav" exact component={SecondaryNavbar} />
		</Router>
	);
}

export default App;
