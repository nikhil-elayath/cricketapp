import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css"
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Navbar from '../components/common/Navbar'
import { getRecentMatches } from '../actions/matches'
import { list, Menu, selected, ArrowLeft, ArrowRight } from './Scroll'


export class MatchLandingPage extends Component {

    componentDidMount() {
        this.props.getRecentMatches();
    }

    constructor(props) {
        super(props);
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }
    render() {
        const { selected } = this.state;
        const menu = this.menuItems;
        return (
            <div>
                <Navbar />
                <div style={{ marginTop: "80px" }}>
                    <div>
                        <h1 className="h1-match" style={{ textAlign: "left", margin: "20px" }}>Matches</h1>
                    </div>
                    <div className="timeline">
                        <ScrollMenu
                            data={menu}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                            selected={selected}
                            onSelect={this.onSelect}
                        />
                    </div>
                    <br />
                    <div>
                        <h2 className="h2-recent-matches" style={{ textAlign: "left", margin: "20px" }}>Recent Matches</h2>
                    </div>
                    <div className="all-recent-matches-box">
                        {this.props.matches.map(matches => (
                            <div className="inside-recent-matches-box">
                                <span className="tournamnet-name">{matches.odi}</span>
                                <div className="Team-data">
                                    <div className="TeamOne-name">{matches.team}</div>
                                    <div className="TeamOne-score">{matches.runs}/{matches.wicket}  (20 overs)</div>
                                </div>
                                <div className="Team-data">
                                    <div className="TeamTwo-name">{matches.team2}</div>
                                    <div className="TeamTwo-score">{matches.runs}/{matches.wicket}  (20 overs)</div>
                                </div>
                                <span className="winner-name">{matches.teamwon} won</span>

                            </div>))}

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    matches: state.matchreducer.matches
});

export default connect(
    mapStateToProps,
    { getRecentMatches }
)(MatchLandingPage);