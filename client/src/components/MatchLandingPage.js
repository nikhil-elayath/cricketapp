import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css"
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { list, Menu, selected, ArrowLeft, ArrowRight } from './Scroll'


export default class MatchLandingPage extends Component {

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
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>

                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <span className="winner-name">INDIA WON</span>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <div className="winner-name">INDIA WON</div>

                    </div>
                    <div className="inside-recent-matches-box">
                        <span className="tournamnet-name">3rd T20</span>
                        <div className="Team-data">
                            <div className="TeamOne-name">IND</div>
                            <div className="TeamOne-score">134/2  (20 overs)</div>
                        </div>
                        <div className="Team-data">
                            <div className="TeamTwo-name">SA</div>
                            <div className="TeamTwo-score">120/9  (20 overs)</div>
                        </div>
                        <div className="winner-name">INDIA WON</div>

                    </div>
                </div>
            </div>
        )
    }
}
