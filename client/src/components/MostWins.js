import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MostWins.css";
import logo from "./images/indialogo.jpg";
import { getRanks } from "../actions/Teams";

export class MostWins extends Component {
  state = {
    testClick: false,
    odiClick: false,
    t20Click: true,
    iplClick: false
  };

  componentDidMount() {
    console.log("ranking gender - ", this.props.gender);
    console.log(this.props);
    let ranking = {
      match_type: "T20",
      competition: "others"
    };
    this.props.getRanks(this.props.gender, ranking);
  }

  onClickTest = () => {
    this.setState({
      testClick: true,
      odiClick: false,
      t20Click: false,
      iplClick: false
    });
    let ranking = {
      match_type: "Test",
      competition: "others"
    };
    this.props.getRanks(this.props.gender, ranking);
  };

  onClickOdi = () => {
    this.setState({
      testClick: false,
      odiClick: true,
      t20Click: false,
      iplClick: false
    });
    let ranking = {
      match_type: "ODI",
      competition: "others"
    };
    this.props.getRanks(this.props.gender, ranking);
  };

  onClickT20 = () => {
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: true,
      iplClick: false
    });
    let ranking = {
      match_type: "T20",
      competition: "others"
    };
    this.props.getRanks(this.props.gender, ranking);
  };

  onClickIpl = () => {
    this.setState({
      testClick: false,
      odiClick: false,
      t20Click: false,
      iplClick: true
    });
    let ranking = {
      match_type: "T20",
      competition: "IPL"
    };
    this.props.getRanks(this.props.gender, ranking);
  };

  render() {
    return (
      <div>
        <div className="grid-class-topteam">
          <div className="info-topteam">
            <p className="p-topteam">Most Wins</p>
            <div className="centered">
              <div className="cards">
                <div
                  style={{ borderRadius: "8px 0px 0px 8px" }}
                  className={this.state.t20Click ? "cardtest" : "cardodi"}
                  onClick={this.onClickT20}
                >
                  <p className="p-card">IT20</p>
                </div>
                <div
                  className={this.state.odiClick ? "cardtest" : "cardodi"}
                  onClick={this.onClickOdi}
                >
                  <p className="p-card">ODI</p>
                </div>
                <div
                  className={this.state.testClick ? "cardtest" : "cardt20"}
                  onClick={this.onClickTest}
                >
                  <p className="p-card">Test</p>
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
            <div>
              {this.props.ranks.map(ranks => (
                <div className="list-wins">
                  <img src={logo} className="img-card" />
                  <p className="p-team-name">{ranks.team_name}</p>
                  <h2 className="h2-team-position">{ranks.count}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTostate = state => ({
  ranks: state.TeamsReducer.ranks
});

export default connect(
  mapStateTostate,
  { getRanks }
)(MostWins);
