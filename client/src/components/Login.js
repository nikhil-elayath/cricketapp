import React, { Component } from "react";

import { login, getUsers } from "../actions/users";
import { connect } from "react-redux";
import Navbar from "./common/Navbar";

import { Link } from "react-router-dom";
import "./css/Login.css";

export class Login extends Component {
	// constructor(props) {
	//   super(props);
	//   this.onLogin = this.onLogin.bind(this);
	// }

	state = {
		user_email: "",
		user_password: "",
		showError: false,
		errorMessage: ""
	};

	componentDidMount() {
		//   axios.get(`http://localhost:5000/api/ecommerce/user/all`).then(res => {
		//     const users = res.data;
		//     this.setState({ users });
		//     console.log(users);
		//   });
		// }
		if (localStorage.getItem("token")) {
			this.props.history.push("/");
		}
	}

	OnChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onLogin = e => {
		e.preventDefault();
		if (!this.state.user_email || !this.state.user_password) {
			this.setState({
				showError: true,
				errorMessage: "Enter all the fields"
			});
		} else {
			this.setState({
				showError: false,
				errorMessage: ""
			});
			let user = {
				user_email: this.state.user_email,
				user_password: this.state.user_password
			};
			this.props.login(user, this.props.history);
			this.setState({
				user_email: "",
				user_password: ""
			});
		}
	};

	render() {
		return (
			<div>
				<Navbar />
				<form id="msform">
					<fieldset>
						<h1>Login</h1>
						<input
							type="text"
							name="user_email"
							placeholder="Enter Email"
							onChange={this.OnChange}
							value={this.state.user_email}
						/>
						<input
							type="password"
							name="user_password"
							placeholder="Enter Password"
							onChange={this.OnChange}
							value={this.state.user_password}
						/>
						<span
							className="errorMessage"
							style={{
								color: "#c0392b",
								display: this.state.showError ? "block" : "none"
							}}
						>
							{this.state.errorMessage}
						</span>
						<p>
							<Link className="link" to="/resetPassword">
								<span
									style={{
										color: "#2980b9",
										fontWeight: "bold"
									}}
								>
									Forgot Password ?
								</span>
							</Link>
						</p>

						<button onChange={this.onChange} onClick={this.onLogin}>
							Login
						</button>
						<p>
							Not a User ?{" "}
							<Link className="link" to="/register">
								<span
									style={{
										color: "#2980b9",
										fontWeight: "bold"
									}}
								>
									Register Now
								</span>
							</Link>
						</p>
					</fieldset>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.userReducer.users
});

export default connect(
	mapStateToProps,
	{ login, getUsers }
)(Login);
