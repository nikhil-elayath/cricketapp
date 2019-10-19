import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  getPlayers,
  createPlayer,
  editPlayer,
  deletePlayer,
  getPlayerSearch
} from "../actions/Admin";
import { connect } from "react-redux";
import "./css/Adminpage.css";
// import NavBar from "./common/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class AdminPlayerPage extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      player_gender: "Gender",
      batting_style: "Batting Style",
      bowling_style: "Bowling style",
      player_role: "Player Role",
      searchString: ""
    };
    this.OnSelectGender = this.OnSelectGender.bind(this);
    this.OnSelectBattingStyle = this.OnSelectBattingStyle.bind(this);
    this.OnSelectBowlerStyle = this.OnSelectBowlerStyle.bind(this);
    this.OnSelectRole = this.OnSelectRole.bind(this);
    this.OnChange = this.OnChange.bind(this);
  }
  OnSelectGender(e) {
    this.setState({
      player_gender: e.target.value
    });
  }
  OnSelectBattingStyle(e) {
    this.setState({
      batting_style: e.target.value
    });
  }
  OnSelectBowlerStyle(e) {
    this.setState({
      bowling_style: e.target.value
    });
  }
  OnSelectRole(e) {
    this.setState({
      player_role: e.target.value
    });
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login");
    }
    this.props.getPlayers();
  }

  state = {
    player_name: "",
    player_country: "",
    batting_style: "",
    bowling_style: "",
    player_gender: "",
    player_role: "",
    debut_odi_match: "",
    debut_test_match: "",
    debut_t20_match: "",
    showError: false,
    errorMessage: "",
    player_dob: new Date(),
    searchString: "",
    show: false
  };

  OnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = date => {
    this.setState({
      player_dob: date
    });
  };

  onRegister = e => {
    e.preventDefault();
    if (
      !this.state.player_name ||
      !this.state.player_country ||
      !this.state.player_gender ||
      !this.state.batting_style ||
      !this.state.bowling_style ||
      !this.state.player_dob ||
      !this.state.player_role ||
      !this.state.debut_odi_match ||
      !this.state.debut_test_match ||
      !this.state.debut_t20_match
    ) {
      this.setState({
        showError: true,
        errorMessage: "Enter all the fields"
      });
    } else {
      //   e.preventDefault();

      // e.preventDefault();
      if (this.state.player_name.length < 2) {
        this.setState({
          showError: true,
          errorMessage: "Name length should be greater then 1!"
        });
      } else {
        if (this.state.player_gender.length < 2) {
          this.setState({
            showError: true,
            errorMessage: "Please enter valid player type!"
          });
        } else {
          if (this.state.player_country.length < 2) {
            this.setState({
              showError: true,
              errorMessage: "Please enter valid player type!"
            });
          } else {
            if (this.state.batting_style.length < 5) {
              this.setState({
                showError: true,
                errorMessage: "Please enter valid batting style!"
              });
            } else {
              if (this.state.bowling_style.length < 5) {
                this.setState({
                  showError: true,
                  errorMessage: "Please enter valid bowling style!"
                });
              } else {
                if (this.state.player_dob.length < 5) {
                  this.setState({
                    showError: true,
                    errorMessage: "Please enter valid player dob!"
                  });
                } else {
                  if (this.state.player_role.length < 5) {
                    this.setState({
                      showError: true,
                      errorMessage: "Please enter valid player role!"
                    });
                  } else {
                    if (this.state.debut_odi_match.length < 5) {
                      this.setState({
                        showError: true,
                        errorMessage: "Please enter valid debut odi match!"
                      });
                    } else {
                      if (this.state.debut_test_match.length < 5) {
                        this.setState({
                          showError: true,
                          errorMessage: "Please enter valid debut test match!"
                        });
                      } else {
                        if (this.state.debut_t20_match.length < 5) {
                          this.setState({
                            showError: true,
                            errorMessage: "Please enter valid debut t20 match!"
                          });
                        } else {
                          this.setState({
                            showError: false,
                            errorMessage: ""
                          });
                          let player = {
                            player_name: this.state.player_name,
                            player_country: this.state.player_country,
                            batting_style: this.state.batting_style,
                            bowling_style: this.state.bowling_style,
                            player_dob: this.state.player_dob.toLocaleDateString(
                              "en-GB"
                            ),
                            player_role: this.state.player_role,
                            player_gender: this.state.player_gender,
                            debut_odi_match: this.state.debut_odi_match,
                            debut_test_match: this.state.debut_test_match,
                            debut_t20_match: this.state.debut_t20_match
                          };
                          this.props.createPlayer(player);
                          //   this.props.history.push("/login");
                          this.setState({
                            player_name: "",
                            player_country: "",
                            batting_style: "",
                            bowling_style: "",
                            player_dob: "",
                            player_gender: "",
                            player_role: "",
                            debut_odi_match: "",
                            debut_test_match: "",
                            debut_t20_match: ""
                          });
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
      this.props.getPlayerSearch(this.state.searchString);
    } else {
      this.setState({ searchString: "" });
    }
  };

  render() {
    console.log("loading is:", this.props.isLoading);
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
                  <h1 id="heading-1">All Players</h1>
                </div>
                <div>
                  {" "}
                  <input
                    id="searchInput"
                    type="text"
                    name="Search"
                    margin="normal"
                    placeholder="Search"
                    onChange={this.onSearchInputChange}
                  />
                </div>
              </div>

              <div className="player-list">
                {this.props.playerInfo.map(players => (
                  <div className="player-name">
                    <p>{players.player_name}</p>
                    <div className="inner-button">
                      <div style={{ marginRight: "5px" }}>
                        <button
                          id="editbutton"
                          className="admininnerbutton"
                          onChange={this.OnChange}
                          onClick={() => {
                            this.props.history.push(
                              "/admineditplayer/" + players.player_id,
                              { players }
                            );
                          }}
                        >
                          Edit
                        </button>
                        {/* <Link
                        className="link-button"
                        to={{
                          pathname: "/admineditplayer/" + players.player_id,
                          state: { players }
                        }}
                      >
                        Edit
                      </Link> */}
                      </div>

                      <div>
                        <button
                          id="deletebutton"
                          className="admininnerbutton"
                          onChange={this.OnChange}
                          // onClick={() =>
                          //   this.props.deletePlayer(players.player_id)
                          // }
                          onClick={() => this.setState({ show: true })}
                          style={{ background: "#E74C3c" }}
                        >
                          Delete
                        </button>
                        <SweetAlert
                          id="SweetAlert"
                          show={this.state.show}
                          type="warning"
                          title={`DELETE PLAYER!`}
                          text="Are you sure?"
                          confirmButtonText="Delete!"
                          confirmButtonColor="#e74c3c"
                          cancelButtonText="No, keep it"
                          showCancelButton
                          onConfirm={() => {
                            // console.log("confirm");
                            this.setState({ show: false });
                            this.props.deletePlayer(players.player_id);
                          }}
                          onCancel={() => {
                            // console.log("cancel");

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
              <h2 id="heading-2">Add New Player</h2>
              <input
                type="text"
                name="player_name"
                id="enter-name"
                placeholder="Enter Name"
                value={this.state.player_name}
                onChange={this.OnChange}
              />
              <input
                type="text"
                id="player_country"
                name="player_country"
                placeholder="Enter Player Country"
                value={this.state.player_country}
                onChange={this.OnChange}
              />
              <div className="playing-style">
                <div>
                  <select
                    type="text"
                    id="batting_style"
                    name="batting_style"
                    value={this.state.batting_style}
                    onChange={this.OnSelectBattingStyle}
                    className="choice"
                  >
                    <option name="choice">Batting style</option>
                    <option name="male">Right Hand</option>
                    <option name="male">left Hand</option>
                  </select>
                </div>
                <div>
                  <select
                    id="bowling_style"
                    type="text"
                    name="bowling_style"
                    value={this.state.bowling_style}
                    onChange={this.OnSelectBowlerStyle}
                    className="choice"
                  >
                    <option name="choice">Bowling style</option>
                    <option name="male">Right-arm fast</option>
                    <option name="male">Right-arm fast medium</option>
                    <option name="male">Right-arm medium fast</option>
                    <option name="male">Right-arm medium</option>
                    <option name="male">Left-arm fast</option>
                    <option name="male">Left-arm fast medium</option>
                    <option name="male">Left-arm medium fast</option>
                    <option name="male">Left-arm medium</option>
                    <option name="male">Off break (right-arm)</option>
                    <option name="male">Leg break (right-arm)</option>
                    <option name="male">Slow left-arm orthodox</option>
                    <option name="male">Slow left-arm chinaman</option>
                  </select>
                </div>
              </div>
              <div className="playing-style">
                <DatePicker
                  id="DatePicker"
                  name="datepicker"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="DOB"
                  selected={this.state.player_dob}
                  onChange={this.handleChange}
                />

                <div>
                  <select
                    id="player_gender"
                    type="text"
                    name="player_gender"
                    value={this.state.player_gender}
                    onChange={this.OnSelectGender}
                    className="choice"
                  >
                    <option name="choice">Gender</option>
                    <option name="male">male</option>
                    <option name="male">female</option>
                  </select>
                </div>
              </div>
              <select
                id="player_role"
                type="text"
                name="player_role"
                placeholder="Enter Player Role"
                value={this.state.player_role}
                onChange={this.OnSelectRole}
                className="choice"
              >
                <option name="choice">Player Role</option>
                <option name="male">Wicket-keeper-batsmen</option>
                <option name="male">Wicket-keeper-batswomen</option>
                <option name="male">Bowler</option>
                <option name="male">Batsmen</option>
                <option name="male">Batswomen</option>
                <option name="male">Allrounder</option>
              </select>
              <input
                id="debut_odi_match"
                type="text"
                name="debut_odi_match"
                placeholder="Enter Debut ODI Match"
                value={this.state.debut_odi_match}
                onChange={this.OnChange}
              />
              <input
                id="debut_test_match"
                type="text"
                name="debut_test_match"
                placeholder="Enter Debut Test Match"
                value={this.state.debut_test_match}
                onChange={this.OnChange}
              />
              <input
                id="debut_t20_match"
                type="text"
                name="debut_t20_match"
                placeholder="Enter Debut T20 Match"
                value={this.state.debut_t20_match}
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
                id="addbutton"
                className="adminpagebutton "
                onChange={this.OnChange}
                onClick={this.onRegister}
              >
                Add Player
                {/* {console.log(this.onRegister)} */}
              </button>
              {/* <p>
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
            </p> */}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.AdminPlayerReducer.player,
  playerInfo: state.PlayerReducer.playerInfo,
  error: state.AdminPlayerReducer.error,
  isLoading: state.LoadingReducer.isLoading
});

export default connect(
  mapStateToProps,
  { getPlayers, createPlayer, editPlayer, deletePlayer, getPlayerSearch }
)(AdminPlayerPage);
