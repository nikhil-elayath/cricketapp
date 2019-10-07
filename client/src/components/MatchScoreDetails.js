import React, { Component } from 'react'
import { } from '../actions/Matches'
import { connect } from "react-redux";
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'

export default class MatchScoreDetails extends Component {

    componentDidMount() {
        // this.props.getmatchdetailbyId(this.props.location.state.match.match_id);
    }
    render() {
        return (
            <div>
                <div>
                    {/* <MatchSecondaryNavbar /> */}
                </div>
                <div>
                    abc
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    match: state.matchreducer.match
});

export default connect(
    mapStateToProps,
    {}
)(MatchScoreDetails);
