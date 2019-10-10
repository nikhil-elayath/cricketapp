import React, { Component } from 'react'
import "../components/css/MatchStatsDetails.css"
import { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId } from '../actions/Matches'
import { connect } from "react-redux";

export class MatchStatsDetails extends Component {

    componentDidMount() {
        this.props.getManhattanGraphbyId(this.props.match_id);
    }
    render() {
        console.log(this.props.match_stats)
        return (
            <div>
                <div style={{ marginTop: 270 + "px" }} >
                    <div className="top-container-stats" style={{ marginTop: 80 + "px" }} >
                        <div></div>
                        <div className="stats-container">
                            <div></div>

                            <div>

                                <div>
                                    <iframe src={this.props.match_stats} style={{ width: 70 + "em", height: 30 + "em", border: "none" }} />
                                </div>

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
    match_stats: state.matchreducer.match_stats
});

export default connect(
    mapStateToProps,
    { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId }
)(MatchStatsDetails);