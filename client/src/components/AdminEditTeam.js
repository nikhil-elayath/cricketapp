import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllTeams, editTeam } from "../actions/Admin";
import { connect } from "react-redux";
import "./css/AdminEditPage.css";
import AdminNavbar from "./common/AdminNavbar";

export class AdminEditTeam extends Component {
  /* componentDidMount help to get the also check is token is available or not  */
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
  }

  state = {
    team_id: this.props.match.params.team_id,
    team_name: this.props.history.location.state.teams.team_name,
    showError: false,
    errorMessage: ""
  };
  /*OnChange function is use when any change have made in the input field*/
  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  /*OnEdit function is use to check all the condition for editing team form  
after all condition is statisfy then it call to the editTeam function  */
  OnEdit = e => {
    e.preventDefault();
    if (!this.state.team_name) {
      this.setState({
        showError: true,
        errorMessage: "Enter all the fields"
      });
    } else {
      if (this.state.team_name < 2) {
        this.setState({
          showError: true,
          errorMessage: "Please enter valid team name!"
        });
      } else {
        this.setState({
          showError: false,
          errorMessage: ""
        });
        let team = {
          team_id: this.state.team_id,
          team_name: this.state.team_name
        };
        this.props.editTeam(team);

        this.props.history.push("/adminteam");

        this.setState({
          team_name: ""
        });
      }
    }
  };

  render() {
    return (
      <div>
        <AdminNavbar />
        <div id="AdminEditform">
          <fieldset>
            <h1 id="heading">Edit Team</h1>
            <input
              id="team_name"
              type="text"
              name="team_name"
              placeholder="Enter Team Name"
              value={this.state.team_name}
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
            <div className="form-button">
              <Link to="/adminteam">
                <button id="cancel" className="cancel">
                  Cancel
                </button>
              </Link>

              <button
                id="editbutton"
                className="admineditpagebutton"
                onChange={this.OnChange}
                onClick={this.OnEdit}
              >
                Edit Team
                {console.log(this.OnEdit)}
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  team: state.AdminTeamReducer.team
});

export default connect(
  mapStateToProps,
  { getAllTeams, editTeam }
)(AdminEditTeam);
