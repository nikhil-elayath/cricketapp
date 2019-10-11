import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTeams, editTeam } from "../actions/Admin";
import { connect } from "react-redux";
import "./css/AdminEditPage.css";
import NavBar from "./common/Navbar";

export class AdminEditTeam extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    }
    this.props.getTeams(this.props.match.params.team_id);
  }

  state = {
    team_id: this.props.match.params.team_id,
    team_name: this.props.history.location.state.teams.team_name,
    showError: false,
    errorMessage: ""
  };

  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
        <NavBar />

        <div id="AdminEditform">
          <fieldset>
            <h1>Edit Team</h1>
            <input
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
                <button className="cancel">Cancel</button>
              </Link>

              <button onChange={this.OnChange} onClick={this.OnEdit}>
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
  teams: state.TeamsReducer.teams,
  team: state.AdminTeamReducer.team
});

export default connect(
  mapStateToProps,
  { getTeams, editTeam }
)(AdminEditTeam);
