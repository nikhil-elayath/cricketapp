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
// import NavBar from "./common/Navbar";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
    searchString: "",
    show: false
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
        {/* <NavBar /> */}
        <div className="player-page">
          {this.props.isLoading ? (
            <div style={{ margin: "auto" }}>
              <Loader
                type="TailSpin"
                color="#2980b9"
                height="100"
                width="100"
              />
            </div>
          ) : (
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
                {this.props.team.map(teams => (
                  <div className="player-name">
                    <p>{teams.team_name}</p>
                    <div className="inner-button">
                      <div style={{ marginRight: "5px" }}>
                        <button
                          className="admininnerbutton"
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
                          className="admininnerbutton"
                          onChange={this.OnChange}
                          // onClick={() => this.props.deleteTeam(teams.team_id)}
                          onClick={() => this.setState({ show: true })}
                          style={{ background: "#E74C3c" }}
                        >
                          Delete
                        </button>
                        <SweetAlert
                          show={this.state.show}
                          type="warning"
                          title={`DELETE TEAM`}
                          text="Are you sure?"
                          confirmButtonText="Delete!"
                          confirmButtonColor="#e74c3c"
                          cancelButtonText="No, keep it"
                          showCancelButton
                          onConfirm={() => {
                            console.log("confirm");
                            this.setState({ show: false });
                            this.props.deleteTeam(teams.team_id);
                          }}
                          onCancel={() => {
                            console.log("cancel");

                            this.setState({ show: false });
                          }}
                          onEscapeKey={() => this.setState({ show: false })}
                          onOutsideClick={() => this.setState({ show: false })}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div id="Adminform">
            <fieldset>
              <h2>Add New Team</h2>
              <input
                type="text"
                name="team_name"
                placeholder="Enter Team Name"
                value={this.state.team_name}
                onChange={this.OnChange}
              />

              <div
                className="errorMessage"
                style={{
                  color: "#c0392b"
                }}
              >
                {/*dispatch error from node*/}
                {this.props.error ? (
                  <>{this.props.error}</>
                ) : (
                  <span
                    className="errorMessage"
                    style={{
                      color: "#c0392b",
                      display: this.state.showError ? "block" : "none"
                    }}
                  >
                    {this.state.errorMessage}
                  </span>
                )}
              </div>
              <button
                className="adminpagebutton"
                onChange={this.OnChange}
                onClick={this.onRegister}
              >
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
  team: state.AdminTeamReducer.team,
  error: state.AdminTeamReducer.error,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getAllTeams, createTeam, editTeam, deleteTeam, getTeamSearch }
)(AdminTeamPage);
