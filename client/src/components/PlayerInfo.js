import React, { Component } from "react";
import "./css/PlayerInfo.css";
import NavBar from "../components/common/Navbar";

export default class PlayerInfo extends Component {
  render() {
    return (
      <div style={{ padding: 16 + "px" }}>
        <NavBar></NavBar>
        <div className="mainDiv">
          <div
            className="personalDetails"
            style={{ fontFamily: "Montserrat", color: "#707070" }}
          >
            <p
              style={{
                borderBottom: "1.2px solid",
                borderBottomColor: "#ccc",
                fontSize: 20 + "px",
                textAlign: "left"
              }}
            >
              Personal Details
            </p>
            <div className="playerBasicinfo">
              <span style={{ fontSize: 14 + "px" }}>Full Name</span>
              <b style={{ marginTop: 4 + "px", fontSize: 18 + "px" }}>
                Virat Kohli
              </b>
              <span style={{ fontSize: 14 + "px", marginTop: 16 + "px" }}>
                Date Of Birth
              </span>
              <b style={{ marginTop: 4 + "px", fontSize: 18 + "px" }}>
                07 July,1981
              </b>
              <span
                style={{
                  fontSize: 14 + "px",
                  marginTop: 16 + "px",
                  float: "right"
                }}
              >
                Date Of Birth
              </span>
            </div>
          </div>
          <div className="careerStats" style={{ fontFamily: "Montserrat" }}>
            Career statistics
          </div>
        </div>
      </div>
    );
  }
}
