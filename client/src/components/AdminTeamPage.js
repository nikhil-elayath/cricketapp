import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  createTeam,
  editTeam,
  deleteTeam,
  getTeamSearch,
  getAllTeams
} from "../actions/Admin";
import { connect } from "react-redux";
import "./css/Adminpage.css";
import NavBar from "./common/Navbar";

export class AdminTeamPage extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
    this.props.getAllTeams();
  }
  state = {
    team_name: "",
    showError: false,
    errorMessage: "",
    searchString: ""
  };

  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRegister = e => {
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
          team_name: this.state.team_name
        };
        this.props.createTeam(team);
        //   this.props.history.push("/login");
        this.setState({
          team_name: ""
        });
      }
    }
  };
  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
      this.props.getTeamSearch(this.state.searchString);
    } else {
      this.setState({ searchString: "" });
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="player-page">
          <div className="players">
            <div className="inner-heading">
              <div>
                <h1>All Team</h1>
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="Search"
                  margin="normal"
                  placeholder="Search"
                  onChange={this.onSearchInputChange}
                />
              </div>
            </div>
            <div className="player-list">
              {this.props.team.length == 0 ? (
                <div className="loader"></div>
              ) : (
                this.props.team.map(teams => (
                  <div className="player-name">
                    <p>{teams.team_name}</p>
                    <div className="inner-button">
                      <div style={{ marginRight: "5px" }}>
                        <button
                          onChange={this.OnChange}
                          onClick={() => {
                            this.props.history.push(
                              "/admineditteam/" + teams.team_id,
                              { teams }
                            );
                          }}
                        >
                          Edit
                        </button>
                      </div>

                      <div>
                        <button
                          onChange={this.OnChange}
                          onClick={() => this.props.deleteTeam(teams.team_id)}
                          style={{ background: "#E74C3c" }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div id="Adminform">
            <fieldset>
              <h1>Add New Team</h1>
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
              <button onChange={this.OnChange} onClick={this.onRegister}>
                Add Team
              </button>
            </fieldset>
          </div>
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
  { getAllTeams, createTeam, editTeam, deleteTeam, getTeamSearch }
)(AdminTeamPage);
