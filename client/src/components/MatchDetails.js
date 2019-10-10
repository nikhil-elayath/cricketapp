import React, { Component } from 'react'
import MatchSecondaryNavbar from './common/MatchSecondaryNavbar'
import MatchSummaryDetails from './MatchSummaryDetails'
import MatchScoreDetails from './MatchScoreDetails'
import MatchStatsDetails from './MatchStatsDetails'

export default class MatchDetails extends Component {
    state = {
        detailsType: "summary"
    }
    changeDetailsType = (detailsType) => {
        this.setState({ detailsType })
    }
    render() {
        return (
            <div>
                <MatchSecondaryNavbar changeDetailsType={this.changeDetailsType} match={this.props.history.location.state.match} />
                {
                    this.state.detailsType === "stats" ? <MatchStatsDetails match_id={this.props.history.location.state.match.match_id} /> : this.state.detailsType === "scorecard" ? <MatchScoreDetails match_id={this.props.history.location.state.match.match_id} /> : <MatchSummaryDetails match_id={this.props.history.location.state.match.match_id} />
                }
            </div>
        )
    }
}
