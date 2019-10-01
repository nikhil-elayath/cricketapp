import React, { Component } from "react";

import { login, getUsers } from "../actions/users";
import { connect } from "react-redux";
// import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import "./css/Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  state = {
    user_email: "",
    user_password: ""
  };

  componentDidMount() {
    //   axios.get(`http://localhost:5000/api/ecommerce/user/all`).then(res => {
    //     const users = res.data;
    //     this.setState({ users });
    //     console.log(users);
    //   });
    // }
    if (localStorage.getItem("token")) {
      this.props.history.push("/home");
    }
  }

  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onLogin = () => {
    if (!this.state.user_email || !this.state.user_password) {
      alert("Please enter all the details");
    } else {
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
        <div>{/* <NavBar /> */}</div>
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
            <br />
            <p>
              <Link className="link" to="/reset">
                <span style={{ color: "#2980b9", fontWeight: "bold" }}>
                  Forgot Password ?
                </span>
              </Link>
            </p>
            <br />

            <button onChange={this.onChange} onClick={this.onLogin}>
              Login
            </button>
            <br />
            <br />

            <br />
            <p>
              Not a User ?{" "}
              <Link className="link" to="/register">
                <span style={{ color: "#2980b9", fontWeight: "bold" }}>
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
  users: state.userreducer.users
});

export default connect(
  mapStateToProps,
  { login, getUsers }
)(Login);
