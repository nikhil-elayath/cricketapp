import React, { Component } from 'react'
import { getMatchScorecardDetailbyId } from '../actions/Matches'
import { connect } from "react-redux";
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import "../components/css/MatchScoreDetails.css"

export class MatchScoreDetails extends Component {

    componentDidMount() {
        this.props.getMatchScorecardDetailbyId(1);
    }
    render() {
        return (
            <div>
                <div>
                    <MatchSecondaryNavbar />
                </div>
                <div style={{ marginTop: 210 + "px" }} >
                    <div className="top-container-scorecard">
                        <div></div>
                        <div className="main-container-scorecard">
                            <div style={{
                                borderTopLeftRadius: "5px", borderTopRightRadius: "5px",
                                backgroundColor: "#2980B9", fontSize: "500",
                                color: "white", padding: "10px"
                            }}> Inning 1 India</div>
                            <div className="batsman-heading">
                                <div>Batsmen</div>
                                <div></div>
                                <div>R</div>
                                <div>B</div>
                                <div>4s</div>
                                <div>6s</div>
                                <div>SR</div>
                            </div>
                            <div className="batsman-heading">
                                <div>Batsmen</div>
                                <div></div>
                                <div>R</div>
                                <div>B</div>
                                <div>4s</div>
                                <div>6s</div>
                                <div>SR</div>
                            </div>
                            <div className="extras-content">
                                <div>Extras</div>
                                <div></div>
                                <div>(1 extra)</div>
                            </div>
                            <div className="total-content">
                                <div>Total</div>
                                <div></div>
                                <div>asdasdsa</div>
                            </div>
                            <div></div>
                            <div className="bowler-heading">
                                <div>Bowler</div>
                                <div></div>
                                <div>O</div>
                                <div>M</div>
                                <div>R</div>
                                <div>W</div>
                                <div>NB</div>
                                <div>WD</div>
                                <div>Ecom</div>
                            </div>
                            <div className="bowler-heading">
                                <div>Bowler</div>
                                <div></div>
                                <div>O</div>
                                <div>M</div>
                                <div>R</div>
                                <div>W</div>
                                <div>NB</div>
                                <div>WD</div>
                                <div>Ecom</div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    match_score: state.matchreducer.match_score
});

export default connect(
    mapStateToProps,
    { getMatchScorecardDetailbyId }
)(MatchScoreDetails);
