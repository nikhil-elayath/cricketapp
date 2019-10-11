import React, { Component } from "react";
import "../components/css/Scroll.css";
import { connect } from "react-redux";
import { getMatchesDate } from "../actions/matches";

// list of items
export const list = [
  { date: "2007-03-15" },
  { date: "2007-03-16" },
  { date: "2008-08-20" },
  { date: "2006-03-19" },
  { date: "2006-03-22" },
  { date: "2006-05-10" },
  { date: "2007-03-17" },
  { date: "2007-03-23" },
  { date: "2007-03-20" },
  { date: "2007-03-24" },
  { date: "2008-03-06" },
  { date: "2008-03-24" },
  { date: "2008-10-17" },
  { date: "2009-07-18" }
];

export const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { date } = el;

    return <MenuItem text={date} key={date} selected={selected} />;
  });

export const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

export const selected = "SEP 26";

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
      return `date : '${date.date}'`;
    });
    console.log("Date in scroller" + listOfdate);
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  date: state.matchreducer.match_date
});

export default connect(
  mapStateToProps,
  { getMatchesDate }
)(Scroll);
