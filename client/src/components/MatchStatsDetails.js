import React, { Component } from 'react'
import "../components/css/MatchStatsDetails.css"
import { getManhattanGraphbyId, getPieChartOnebyId, getPieChartTwobyId } from '../actions/Matches'
import { connect } from "react-redux";

export class MatchStatsDetails extends Component {

    componentDidMount() {
        this.props.getManhattanGraphbyId(this.props.match_id);
        this.props.getPieChartOnebyId(this.props.match_id);
        this.props.getPieChartTwobyId(this.props.match_id);
    }
    render() {
        console.log(this.props.match_stats)
        return (
            <div>
                <div style={{ marginTop: 270 + "px" }} >
                    <div className="top-container-stats" style={{ marginTop: 80 + "px" }} >
                        <div></div>
                        <div className="stats-container">
                            <div className="top-title"> Manhattan</div>
                            <div>
                                <iframe src={this.props.match_stats.manhattan} style={{ width: 1200 + "px", height: 600 + "px", border: "none" }} />
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="stats-container">
                            <div className="top-title"> Pie Chard 1</div>
                            <div>
                                <iframe src={this.props.match_stats.piechartOne} style={{ width: 1200 + "px", height: 600 + "px", border: "none" }} />
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="stats-container">
                            <div className="top-title"> Pie Chart 2</div>
                            <div>
                                <iframe src={this.props.match_stats.piechartTwo} style={{ width: 1000 + "px", height: 600 + "px", border: "none" }} />
                            </div>
                        </div>
                        <div></div>
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