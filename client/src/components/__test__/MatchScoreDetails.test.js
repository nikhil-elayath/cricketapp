import React from "react";
import { shallow } from "enzyme";
import { MatchScoreDetails } from "../MatchScoreDetails";


const getMatchScorecardDetailbyId = jest.fn();

const match_score = [{
    all_bowler: [{
        bowler_name: "M Ntini",
        ecom: "3.05",
        given_runs: "58",
        total_extras: "0",
        total_over: "19",
        wicket_taken: "2"
    }],
    all_extra: [{
        extras_type: "byes", extra_count: "1"
    }],
    batsman: [{
        ball_faced: "151",
        batsman_run: "115",
        bowler_name: "JH Kallis",
        fielder_name: "ND McKenzie",
        fielder_two_name: null,
        fours: "19",
        sixes: "2",
        striker_name: "PJ Hughes",
        striker_rate: "76.16",
        wicket_type: "caught"
    }],
    extra_total: [{
        extra_count: "15"
    }],
    inning: [{ inning: 1 }],
    total_score: [{
        total_overs: "106",
        total_runs: "352",
        total_wicket: "10"
    }]
}
]

const map = jest.fn();

const wrapper = shallow(
    <MatchScoreDetails match_score={match_score}
        getMatchScorecardDetailbyId={getMatchScorecardDetailbyId} />
);

describe("Testing of MatchScoreDetails Component", () => {

    it("should render the component", () => {

        expect(wrapper).toMatchSnapshot();
    });

    it("[Scorecard-container] should have a title with inning number", () => {
        expect(wrapper.find("#scorecard-inning").text()).toBe("Inning ");
    });
    it("[Scorecard-container > Batmen text] should have a Batsmen text", () => {
        expect(wrapper.find("#batsmen-text").text()).toBe("Batsmen");
    });
    it("[Scorecard-container > Batmen text] should have a Runs text", () => {
        expect(wrapper.find("#runs-text").text()).toBe("R");
    });
    it("[Scorecard-container > Batmen text] should have a Balls text", () => {
        expect(wrapper.find("#ball-text").text()).toBe("B");
    });
    it("[Scorecard-container > Batmen text] should have a 4s text", () => {
        expect(wrapper.find("#fours-text").text()).toBe("4s");
    });
    it("[Scorecard-container > Batmen text] should have a 6s text", () => {
        expect(wrapper.find("#sixes-text").text()).toBe("6s");
    });
    it("[Scorecard-container > Batmen text] should have a SR text", () => {
        expect(wrapper.find("#SR-text").text()).toBe("SR");
    });

    it("[Scorecard-container > Batsmen Value] should have a Striker name", () => {
        expect(wrapper.find("#batsmen-name").text()).toBe("PJ Hughes");
    });
    it("[Scorecard-container > Batsmen Value] should have a details of Striker was out", () => {
        expect(wrapper.find("#how-out").text()).toBe("(c) ND McKenzie  (b)  JH Kallis");
    });
    it("[Scorecard-container > Batsmen Value] should have a strikers runs", () => {
        expect(wrapper.find("#batsmen-run").text()).toBe("115");
    });
    it("[Scorecard-container > Batsmen Value] should have count of strikers balls faced", () => {
        expect(wrapper.find("#batsmen-ball-faced").text()).toBe("151");
    });
    it("[Scorecard-container > Batsmen Value] should have count of strikers 4s", () => {
        expect(wrapper.find("#batsmen-fours").text()).toBe("19");
    });
    it("[Scorecard-container > Batsmen Value] should have count of strikers 6s", () => {
        expect(wrapper.find("#batsmen-sixes").text()).toBe("2");
    });
    it("[Scorecard-container > Batsmen Value] should have SR", () => {
        expect(wrapper.find("#batsmen-strike-rate").text()).toBe("76.16");
    });
    it("[Scorecard-container > Extras] should have extra text", () => {
        expect(wrapper.find("#match-extras-text").text()).toBe("Extras");
    });
    it("[Scorecard-container > Extras] should have tota extra of the match", () => {
        expect(wrapper.find("#match-extras-value").text()).toBe("15 extras");
    });
    it("[Scorecard-container > Total] should have tota text", () => {
        expect(wrapper.find("#total-text").text()).toBe("Total");
    });
    it("[Scorecard-container > Total] should have tota runs, wicket and overs of the match", () => {
        expect(wrapper.find("#total-value").text()).toBe("352 /10( 106 overs)");
    });
    it("[Scorecard-container > Bowlers Text] should have bowler text", () => {
        expect(wrapper.find("#bowler-text").text()).toBe("Bowler");
    });
    it("[Scorecard-container > Bowlers Text] should have bowlers over text", () => {
        expect(wrapper.find("#bowler-over-text").text()).toBe("O");
    });
    it("[Scorecard-container > Bowlers Text] should have bowlers given runs text", () => {
        expect(wrapper.find("#bowler-run-text").text()).toBe("R");
    });
    it("[Scorecard-container > Bowlers Text] should have bowlers taken wickets text", () => {
        expect(wrapper.find("#bowler-wicket-text").text()).toBe("W");
    });
    it("[Scorecard-container > Bowlers Text] should have bowlers given extras text", () => {
        expect(wrapper.find("#bowler-extras-text").text()).toBe("Extra");
    });
    it("[Scorecard-container > Bowlers Text] should have bowlers economy text", () => {
        expect(wrapper.find("#bowler-ecom-text").text()).toBe("Ecom");
    });


    it("[Scorecard-container > Bowlers Values] should have bowlers name", () => {
        expect(wrapper.find("#bowler-name-value").text()).toBe("M Ntini");
    });
    it("[Scorecard-container > Bowlers Values] should have bowlers over value", () => {
        expect(wrapper.find("#bowler-overs-value").text()).toBe("19");
    });
    it("[Scorecard-container > Bowlers Values] should have bowlers given runs value", () => {
        expect(wrapper.find("#bowler-runs-value").text()).toBe("58");
    });
    it("[Scorecard-container > Bowlers Values] should have bowlers taken wickets values", () => {
        expect(wrapper.find("#bowler-wicket-value").text()).toBe("2");
    });
    it("[Scorecard-container > Bowlers Values] should have bowlers given extras values", () => {
        expect(wrapper.find("#bowler-extras-value").text()).toBe("0");
    });
    it("[Scorecard-container > Bowlers Values] should have bowlers economy values", () => {
        expect(wrapper.find("#bowler-ecom-value").text()).toBe("3.05");
    });

    it("[getMatchScorecardDetailbyId] should test function ComponentDidMount is called ", () => {
        const componentDidMount = jest.spyOn(
            MatchScoreDetails.prototype,
            "componentDidMount"
        );
        wrapper.instance().componentDidMount();
        expect(componentDidMount).toHaveBeenCalled();

    });

});
