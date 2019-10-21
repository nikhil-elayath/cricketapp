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


    // it("[Scorecard-container > Bowlers Values] should have bowlers economy values", () => {
    //     expect(wrapper.find("#bowler-ecom-value").text()).toBe("3.05");
    // });

    // it("[getMatchScorecardDetailbyId] should test function ComponentDidMount is called ", () => {
    //     const componentDidMount = jest.spyOn(
    //         MatchScoreDetails.prototype,
    //         "componentDidMount"
    //     );
    //     wrapper.instance().componentDidMount();
    //     expect(componentDidMount).toHaveBeenCalled();

    // });

});
