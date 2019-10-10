import React, { Component } from 'react'
import { } from '../actions/Matches'
import { connect } from "react-redux";
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import "../components/css/MatchStatsDetails.css"

export class MatchStatsDetails extends Component {

    componentDidMount() {
        this.props.getMatchScorecardDetailbyId(1);
    }
    render() {
        return (
            <div>
                <div>
                    {/* <MatchSecondaryNavbar /> */}
                </div>

                <div style={{ marginTop: 210 + "px" }} >

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
    {}
)(MatchStatsDetails);
