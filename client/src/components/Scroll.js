import React, { Component } from 'react';
import '../components/css/Scroll.css'
import { connect } from "react-redux";
import { getMatchesDate } from '../actions/matches'



// list of items
export const list = [
    { date: 'SEP 19' },
    { date: 'SEP 20' },
    { date: 'SEP 21' },
    { date: 'SEP 22' },
    { date: 'SEP 23' },
    { date: 'SEP 24' },
    { date: 'SEP 25' },
    { date: 'SEP 26' },
    { date: 'SEP 27' },
    { date: '2006-06-20' },
    { date: 'SEP 29' },
    { date: 'SEP 30' }
];

export const MenuItem = ({ text, selected }) => {
    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};

export const Menu = (list, selected) =>
    list.map(el => {
        const { date } = el;

        return <MenuItem text={date} key={date} selected={selected} />;
    });


export const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export const selected = 'SEP 26';

export class Scroll extends Component {
    // componentDidMount() {
    //     this.props.getRecentMatches();
    //     console.log(date);
    // }

    componentDidMount() {
        this.props.getMatchesDate();

    }
    render() {

        const listOfdate = this.props.date.map(date => {
            return `date : '${date.date}'`
        });
        console.log("Date in scroller" + listOfdate)
        return (

            <div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    date: state.matchreducer.match_date
});

export default connect(
    mapStateToProps,
    { getMatchesDate }
)(Scroll);