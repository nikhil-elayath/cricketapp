import React, { Component } from 'react'
import Navbar from './common/Navbar'
import './css/MatchSummaryDetails.css'
import MatchSecondaryNavbar from './MatchSecondaryNavbar'

export default class MatchSummaryDetails extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="top-div-of-match" style={{ marginTop: "60px" }}>
                    <div className="short-summary-with-result">

                        <span style={{ textAlign: "left", marginRight: "50px" }}>Result: India won by 7 wickets</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">South Africa</div>
                            <div className="TeamOne-score">149/5  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">India</div>
                            <div className="TeamTwo-score">151/3  (19/20 overs)</div>
                        </div>
                    </div>
                    <div className="short-summary-with-player-of-the-match">
                        <span style={{ textAlign: "left" }}>Player of the match</span>
                    </div>
                    <MatchSecondaryNavbar />
                </div>
            </div>
        )
    }
}
