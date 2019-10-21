import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/TeamLandingPage.css";
import logo from "./images/indialogo.jpg";
import Navbar from "../components/common/Navbar";
import { getTeams } from "../actions/Teams";
import MostWins from "./MostWins";

export class TeamLandingPage extends Component {
  state = {
    testClick: true,
    odiClick: false,
    t20Click: false,
    iplClick: false
  };
  componentDidMount() {
    console.log(this.props);
    // this.props.getTeams();
    let type = {
      match_type: "Test",
      competition: "others"
    };
    this.props.getTeams(type);
  }

  onClickTest = () => {
    this.setState({
      testClick: true,
      odiClick: false,
      t20Click: false,
      iplClick: false
    });
    let type = {
      match_type: "Test",
      competition: "others"
    };
    this.props.getTeams(type);
  };

  onClickOdi = () => {
    this.setState({
      testClick: false,
      odiClick: true,
      t20Click: false,
      iplClick: false
    });
    let type = {
      match_type: "ODI",
      competition: "others"
    };
    this.props.getTeams(type);
  };

  onClickT20 = () => {
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: true,
      iplClick: false
    });
    let type = {
      match_type: "T20",
      competition: "others"
    };
    this.props.getTeams(type);
  };

  onClickIpl = () => {
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: false,
      iplClick: true
    });
    let type = {
      match_type: "T20",
      competition: "IPL"
    };
    this.props.getTeams(type);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar
          gender={this.props.gender}
          changeGender={getGender => this.props.changeGender(getGender)}
        />
        <div className="container-team">
          <h2 className="h1-team">Teams</h2>
          <div className="centered-team">
            <div className="cards-team">
              <div
                style={{ borderRadius: "8px 0px 0px 8px" }}
                className={this.state.testClick ? "cardtest" : "cardodi"}
                onClick={this.onClickTest}
              >
                <p className="p-card">Test</p>
              </div>
              <div
                className={this.state.odiClick ? "cardtest" : "cardodi"}
                onClick={this.onClickOdi}
              >
                <p className="p-card">ODI</p>
              </div>
              <div
                className={this.state.t20Click ? "cardtest" : "cardt20"}
                onClick={this.onClickT20}
              >
                <p className="p-card">IT20</p>
              </div>
              <div
                style={{ borderRadius: "0px 8px 8px 0px" }}
                className={this.state.iplClick ? "cardtest" : "cardt20"}
                onClick={this.onClickIpl}
              >
                <p className="p-card">IPL</p>
              </div>
            </div>
          </div>
          <div className="grid-container-team">
            <div>
              <div className="country-team">
                {this.props.teams.map(teams => (
                  <div
                    className="grid-class-team"
                    onClick={() => {
                      this.props.history.push("/teamdetails/" + teams.team_id, {
                        teams
                      });
                    }}
                  >
                    <div className="info-team">
                      {/* <img src={logo} className="img-team-logo" /> */}
                      <img
                        id="pImage"
                        className="playerImage"
                        // className="img-team-logo"
                        src={`data:image/jpeg;base64,${teams.team_image}`}
                      ></img>
                      <p className="p-team">{teams.team_name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="top-team">
                <MostWins
                  gender={this.props.gender}
                  changeGender={getGender => this.props.changeGender(getGender)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  teams: state.TeamsReducer.teams
});

export default connect(
  mapStateTostate,
  { getTeams }
)(TeamLandingPage);
