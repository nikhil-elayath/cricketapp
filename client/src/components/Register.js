import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUsers, createUsers } from "../actions/users";
import { connect } from "react-redux";
import "./css/Login.css";
import NavBar from "./common/Navbar";

export class Register extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.onRegister = this.onRegister.bind(this);
	// }

	// componentDidMount() {
	//   this.props.getUsers();
	// }

	componentDidMount() {
		if (localStorage.getItem("token")) {
			this.props.history.push("/");
		}
	}

	state = {
		user_name: "",
		user_email: "",
		user_password: "",
		isadmin: false,
		confirmPassword: "",
		showError: false,
		errorMessage: ""
	};

	OnChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onRegister = e => {
		e.preventDefault();
		if (
			!this.state.user_name ||
			!this.state.user_email ||
			!this.state.user_password ||
			!this.state.confirmPassword
		) {
			this.setState({
				showError: true,
				errorMessage: "Enter all the fields"
			});
		} else {
			if (this.state.user_password !== this.state.confirmPassword) {
				this.setState({
					show_error: true,
					error_message: "Password does not match"
				});
			} else {
				this.setState({
					showError: false,
					errorMessage: ""
				});
				let user = {
					user_name: this.state.user_name,
					user_email: this.state.user_email,
					user_password: this.state.user_password,
					isadmin: this.state.isadmin
				};
				this.props.createUsers(user);
				this.props.history.push("/login");

				this.setState({
					user_name: "",
					user_email: "",
					user_password: "",
					confirmPassword: ""
				});
			}
		}
	};

	render() {
		return (
			<div>
				<NavBar />
				<form id="msform">
					<fieldset>
						<h1>Register</h1>
						<input
							type="text"
							name="user_name"
							placeholder="Enter Name"
							value={this.state.user_name}
							onChange={this.OnChange}
						/>
						<input
							type="text"
							name="user_email"
							placeholder="Enter Email"
							value={this.state.user_email}
							onChange={this.OnChange}
						/>
						<input
							type="password"
							name="user_password"
							placeholder="Enter Password"
							value={this.state.user_password}
							onChange={this.OnChange}
						/>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							value={this.state.confirmPassword}
							onChange={this.OnChange}
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
						<button
							onChange={this.OnChange}
							onClick={this.onRegister}
						>
							Sign Up
						</button>
						<p>
							Already have an account ?
							<Link to="/login">
								<span
									style={{
										color: "#2980b9",
										fontWeight: "bold"
									}}
								>
									Login
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
	{ getUsers, createUsers }
)(Register);
