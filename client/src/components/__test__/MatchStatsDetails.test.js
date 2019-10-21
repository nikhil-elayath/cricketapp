import React from "react";
import { shallow } from "enzyme";
import { MatchStatsDetails } from "../MatchStatsDetails";


const getManhattanGraphbyId = jest.fn();
const getPieChartOnebyId = jest.fn();
const getPieChartTwobyId = jest.fn();

const match_stats_manhattan = [{
    head: "https://plot.ly/~ankitecd/6",
    message: "Graph link recieved successfully",
    status_code: 200
}]
const match_stats_pie1 = [{
    head: "https://plot.ly/~ankitecd/22",
    head2: "https://plot.ly/~ankitecd/27",
    message: "Graph link receieved succesfully",
    status_code: 200,
    team_one: "India",
    team_two: "England"

}]
const match_stats_pie2 = [{
    head: "https://plot.ly/~ankitecd/22",
    head2: "https://plot.ly/~ankitecd/27",
    message: "Graph link receieved succesfully",
    status_code: 200,
    teamone: ["India"],
    teamtwo: ["England"]
}]

const map = jest.fn();

const wrapper = shallow(
    <MatchStatsDetails
        getManhattanGraphbyId={getManhattanGraphbyId}
        getPieChartOnebyId={getPieChartOnebyId}
        getPieChartTwobyId={getPieChartTwobyId}
        match_stats_manhattan={match_stats_manhattan}
        match_stats_pie1={match_stats_pie1}
        match_stats_pie2={match_stats_pie2} />
);

describe("Testing of MatchStatsDetails Component", () => {

    it("should render the component", () => {

        expect(wrapper).toMatchSnapshot();
    });


    it("[Stats-container > Manhattan] should a title", () => {
        expect(wrapper.find("#manhattan-title").text()).toBe("Manhattan");
    });
    it("[Stats-container > Manhattan] should a graph url", () => {
        expect(wrapper.find("#manhattan-frame").prop('src')).toBe("India");
    });
    it("[Stats-container > Pie-chart-1] should a title", () => {
        expect(wrapper.find("#pie1-title").text()).toBe("  Batsmen");
    });

    // it("[getMatchScorecardDetailbyId] should test function ComponentDidMount is called ", () => {
    //     const componentDidMount = jest.spyOn(
    //         MatchScoreDetails.prototype,
    //         "componentDidMount"
    //     );
    //     wrapper.instance().componentDidMount();
    //     expect(componentDidMount).toHaveBeenCalled();

    // });

});
