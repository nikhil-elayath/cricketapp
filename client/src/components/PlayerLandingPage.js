import React, { Component } from "react";

import virat from "../components/images/virat.jpg";
import bumrah from "../components/images/Bumrah.jpg";

import "./css/PlayerLandingPage.css";

export default class PlayerLandingPage extends Component {
  render() {
    return (
      <div style={{ padding: 12 + "px" }}>
        <h1
          style={{
            textAlign: "left",
            marginLeft: 35 + "px",
            marginTop: 2 + "em",
            fontSize: 42 + "px",
            fontWeight: 500,
            fontFamily: "'Montserrat'"
          }}
        >
          Players
        </h1>
        <div id="conatiner">
          <div className="matchFormatOptons">
            <div className="selectNav">
              <a href="#Test" className="active">
                Test
              </a>
              <a href="#Odi">ODI</a>
              <a href="#T20">T20</a>
            </div>
          </div>
          <div className="allPlayersDiv">
            <div className="topbatsmanDiv">
              <div className="insideBatsmanDiv">
                <h2 style={{ textAlign: "center" }}>Top Batsmen</h2>
                <div className="batsmenDetailDiv">
                  <img src={virat} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",
                      textAlign: "left"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <span>
                        <b>Virat Kohli</b>
                      </span>
                      <span>Right-Hand Batsman</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      672
                    </b>
                    <span style={{ textAlign: "right" }}>Innings: 12</span>
                    <span>Average: 52.12</span>
                  </div>
                </div>
                <hr></hr>
                <div className="batsmenDetailDiv">
                  <img src={virat} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",

                      textAlign: "left"
                    }}
                  >
                    <span>
                      <b>Virat Kohli</b>
                    </span>
                    <span>Right-Hand Batsman</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      672
                    </b>
                    <span style={{ textAlign: "right" }}>Innings: 12</span>
                    <span style={{ textAlign: "right" }}>Average: 52.12</span>
                  </div>
                </div>
                <hr></hr>
                <div className="batsmenDetailDiv">
                  <img src={virat} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",

                      textAlign: "left"
                    }}
                  >
                    <span>
                      <b>Virat Kohli</b>
                    </span>
                    <span>Right-Hand Batsman</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      672
                    </b>
                    <span style={{ textAlign: "right" }}>Innings:12</span>
                    <span style={{ textAlign: "right" }}>Average:52.12</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="topbowlerDiv">
              <div className="insideBowlerDiv">
                <h2 style={{ textAlign: "center" }}>Top Bowlers</h2>
                <div className="batsmenDetailDiv">
                  <img src={bumrah} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",
                      textAlign: "left"
                    }}
                  >
                    <span>
                      <b>Jasprit Bumrah</b>
                    </span>
                    <span>Right-handed fast Bowler</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      93
                    </b>
                    <span style={{ textAlign: "right" }}>Innings: 12</span>
                    <span style={{ textAlign: "right" }}>E/R: 6.2</span>
                  </div>
                </div>
                <hr></hr>
                <div className="batsmenDetailDiv">
                  <img src={bumrah} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",
                      textAlign: "left"
                    }}
                  >
                    <span>
                      <b>Jasprit Bumrah</b>
                    </span>
                    <span>Right-handed fast Bowler</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      93
                    </b>
                    <span style={{ textAlign: "right" }}>Innings: 12</span>
                    <span style={{ textAlign: "right" }}>E/R: 6.2</span>
                  </div>
                </div>
                <hr></hr>
                <div className="batsmenDetailDiv">
                  <img src={bumrah} alt="virat kohli" className="playerImage" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: 10 + "px",

                      textAlign: "left"
                    }}
                  >
                    <span>
                      <b>Jasprit Bumrah</b>
                    </span>
                    <span>Right-handed fast Bowler</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <b
                      style={{
                        justifySelf: "flex-end",
                        fontSize: 25 + "px",
                        textAlign: "right"
                      }}
                    >
                      93
                    </b>
                    <span style={{ textAlign: "right" }}>Innings: 12</span>
                    <span style={{ textAlign: "right" }}>E/R: 6.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
