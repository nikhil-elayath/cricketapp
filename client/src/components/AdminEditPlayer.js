import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPlayers, editPlayer } from "../actions/Admin";
import { connect } from "react-redux";
import "./css/AdminEditPage.css";
// import NavBar from "./common/Navbar";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class AdminEditPlayer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    // this.state = {
    //   player_gender: "Gender",
    //   batting_style: "Batting Style",
    //   bowling_style: "Bowling style",
    //   player_role: "Player Role"
    // };
    this.OnSelectGender = this.OnSelectGender.bind(this);
    this.OnSelectBattingStyle = this.OnSelectBattingStyle.bind(this);
    this.OnSelectBowlerStyle = this.OnSelectBowlerStyle.bind(this);
    this.OnSelectRole = this.OnSelectRole.bind(this);
    this.OnChange = this.OnChange.bind(this);
    this.OnEdit = this.OnEdit.bind(this);
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

  state = {
    player_id: this.props.match.params.player_id,
    player_name: this.props.history.location.state.players.player_name,
    player_country: this.props.history.location.state.players.player_country,
    batting_style: this.props.history.location.state.players.batting_style,
    bowling_style: this.props.history.location.state.players.bowling_style,
    player_gender: this.props.history.location.state.players.player_gender,
    player_role: this.props.history.location.state.players.player_role,
    debut_odi_match: this.props.history.location.state.players.debut_odi_match,
    debut_test_match: this.props.history.location.state.players
      .debut_test_match,
    debut_t20_match: this.props.history.location.state.players.debut_t20_match,
    player_dob: new Date(),
    showError: false,
    errorMessage: ""
  };

  componentDidMount() {
    this.props.getPlayers(this.props.match.params.player_id);
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }
  OnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = date => {
    this.setState({
      player_dob: date
    });
  };

  OnEdit = e => {
    console.log("hello");
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

      e.preventDefault();
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
                          console.log("hello");
                          this.setState({
                            showError: false,
                            errorMessage: ""
                          });
                          let player = {
                            player_id: this.state.player_id,
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
                          this.props.editPlayer(player);
                          this.props.history.push("/adminplayer");

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

  render() {
    return (
      <div>
        {/* <NavBar /> */}

        <div id="AdminEditform">
          <fieldset>
            <h1>Edit New Player</h1>
            <input
              type="text"
              name="player_name"
              placeholder="Player name"
              value={this.state.player_name}
              onChange={this.OnChange}
            />
            <input
              type="text"
              name="player_country"
              placeholder="Enter Player Country"
              value={this.state.player_country}
              onChange={this.OnChange}
            />
            <div className="playing-style">
              <div>
                <select
                  type="text"
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
                name="datepicker"
                dateFormat="yyyy-MM-dd"
                placeholderText="DOB"
                selected={this.state.player_dob}
                onChange={this.handleChange}
              />

              <div>
                <select
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
              type="text"
              name="debut_odi_match"
              placeholder="Enter Debut ODI Match"
              value={this.state.debut_odi_match}
              onChange={this.OnChange}
            />
            <input
              type="text"
              name="debut_test_match"
              placeholder="Enter Debut Test Match"
              value={this.state.debut_test_match}
              onChange={this.OnChange}
            />
            <input
              type="text"
              name="debut_t20_match"
              placeholder="Enter Debut T20 Match"
              value={this.state.debut_t20_match}
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
              <Link to="/adminplayer">
                <button className="cancel">Cancel</button>
              </Link>

              <button
                className="admineditpagebutton"
                onChange={this.OnChange}
                onClick={this.OnEdit}
              >
                Edit Player
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
  player: state.AdminPlayerReducer.player,
  playerInfo: state.PlayerReducer.playerInfo
});

export default connect(
  mapStateToProps,
  { getPlayers, editPlayer }
)(AdminEditPlayer);
