import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/MatchLandingPage.css"
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Navbar from '../components/common/Navbar'
import { getRecentMatches, getMatchesDate } from '../actions/matches'
// import { selected, ArrowLeft, ArrowRight } from './Scroll'
import { Menu, list, selected, ArrowLeft, ArrowRight } from './Scroll'
import Scroll from './Scroll'


export class MatchLandingPage extends Component {

    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    // constructor(props) {
    //     super(props);
    //     // call it again if items count changes
    //     this.menuItems = Menu(list, selected);
    // }
    componentDidMount() {
        // var day = new Date().getDate();
        // var month = new Date().getMonth() + 1;
        // var year = new Date().getFullYear();
        // var date = (year + "-" + month + "-" + day);
        // console.log(year + "-" + month + "-" + day);
        // console.log(date);

        function yyyymmdd() {
            var now = new Date();
            var y = now.getFullYear();
            var m = now.getMonth() + 1;
            var d = now.getDate();
            var mm = m < 10 ? '0' + m : m;
            var dd = d < 10 ? '0' + d : d;
            return y + '-' + mm + '-' + dd;
        }
        var date = yyyymmdd();
        console.log(date)
        this.props.getRecentMatches(date);
        this.props.getMatchesDate();

    }
    state = {
        selected
    };

    onSelect = key => {
        // console.log("key is:" + key)
        // this.props.getMatchesByDate(key);
        this.setState({ selected: key });
        this.props.getRecentMatches(key);



    }
    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;





        // let listOfdate

        // this.props.date ?
        //     listOfdate = this.props.date.map(date => {
        //         return `date : '${date.date}'`
        //     }) : console.log("do nothing")



        // console.log("Date in scroller" + listOfdate)

        // // const MenuItem = ({ text, selected }) => {
        // //     return <div
        // //         className={`menu-item ${selected ? 'active' : ''}`}
        // //     >{text}</div>;
        // // };

        // const Menu = (listOfdate, selected) =>
        //     // console.log(listOfdate);
        //     listOfdate.map(el => {
        //         const { date } = el;
        //         return <div
        //             className={`menu-item ${selected ? 'active' : ''}`}
        //         >{date}</div>;
        //         // return <MenuItem text={date} key={date} selected={selected} />;
        //     });

        // let menu
        // listOfdate ? menu = Menu(listOfdate, this.state.selected) : console.log("do nothing for Menu")

        // // const { selected } = this.state;




        return (
            <div>
                <div>

                    <Navbar />
                </div>
                <div style={{ marginTop: "80px" }}>
                    <div>
                        <h1 className="h1-match" style={{ textAlign: "left", margin: "20px" }}>Matches</h1>
                    </div>
                    <div className="timeline" style={{ marginBottom: "50px" }}>
                        <ScrollMenu
                            data={menu}
                            arrowLeft={ArrowLeft}
                            arrowRight={ArrowRight}
                            selected={selected}
                            onSelect={this.onSelect}
                        />
                    </div>

                    <div>
                        <h2 className="h2-recent-matches" style={{ textAlign: "left", margin: "20px" }}>Recent Matches</h2>
                    </div>
                    <div className="all-recent-matches-box">
                        {this.props.matches.map(matches => (
                            <div className="inside-recent-matches-box" onClick={() => {
                                this.props.history.push("/matches/summary/" + matches.id, {
                                    matches
                                });
                            }}>
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
                    {/* <Scroll date={this.props.date} /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    matches: state.matchreducer.matches,
    date: state.matchreducer.match_date
});

export default connect(
    mapStateToProps,
    { getRecentMatches, getMatchesDate }
)(MatchLandingPage);