import React from "react";
import { shallow } from "enzyme";
import { MatchSummaryDetails } from "../MatchSummaryDetails";


const getmatchdetailbyId = jest.fn();

const match = [{
    date: [{ match_date: "Mar 07, 2009" }],
    match_details: [{
        competition: "others",
        innings_one_team: 2,
        innings_two_team: 4,
        team_name: "Australia",
        toss_decision: "bat",
        toss_winner_team: "Australia",
        venue_city: "Durban",
        venue_name: "Kingsmead"
    }],
    team1_batsman: [{ player_name: "PJ Hughes", total_runs: "115", total_ball: "151" }],
    team1_bowler: [{ bowler_id: 256, player_name: "DW Steyn", total_wicket: "3", overs: "25", given_runs: "88" }],
    team2_batsman: [{ player_name: "JP Duminy", total_runs: "73", total_ball: "152" }],
    team2_bowler: [{ bowler_id: 172, player_name: "MG Johnson", total_wicket: "4", overs: "15", given_runs: "51" }],
    team_one_XI: [{ teamone_players: "MJ Clarke" }],
    team_two_XI: [{ teamtwo_players: "M Ntini" }],
    teamone_name: [{ teamone_name: "Australia" }],
    teamtwo_name: [{ teamtwo_name: "South Africa" }],
    umpires: [{ umpire_name: "Asad Rauf" }]
}
]

const map = jest.fn();

const wrapper = shallow(
    <MatchSummaryDetails match={match}
        getmatchdetailbyId={getmatchdetailbyId} />
);

describe("Testing of MatchSummaryDetails Component", () => {

    it("should render the component", () => {

        expect(wrapper).toMatchSnapshot();
    });

    it("[Summary-container] should have a title as Summary Scorecard", () => {
        expect(wrapper.find("#summary-title").text()).toBe("Summary Scorecard");
    });

    it("[Summary-container] should have team one name", () => {
        expect(wrapper.find("#team-one-name-summary").text()).toBe("Australia");
    });
    it("[Summary-container] should have team one top batsman name", () => {
        expect(wrapper.find("#team-one-tbm").text()).toBe("PJ Hughes");
    });
    it("[Summary-container] should have team one top batsman runs", () => {
        expect(wrapper.find("#team-one-tbm-runs").text()).toBe("115 (151)");
    });
    it("[Summary-container] should have team one top bowler name", () => {
        expect(wrapper.find("#team-one-tbn").text()).toBe("DW Steyn");
    });
    it("[Summary-container] should have team one top bowler wickets", () => {
        expect(wrapper.find("#team-one-tbn-wickets").text()).toBe("3/88 (25)");
    });
    it("[Summary-container] should have team two name", () => {
        expect(wrapper.find("#team-two-name").text()).toBe("South Africa");
    });
    it("[Summary-container] should have team two top batsman name", () => {
        expect(wrapper.find("#team-two-tbn").text()).toBe("JP Duminy");
    });
    it("[Summary-container] should have team two top batsman score", () => {
        expect(wrapper.find("#team-two-btm-score").text()).toBe("73 (152)");
    });
    it("[Summary-container] should have team two top bowlername", () => {
        expect(wrapper.find("#team-two-top-bowler-name").text()).toBe("MG Johnson");
    });
    it("[Summary-container] should have team two top bowler wickets", () => {
        expect(wrapper.find("#team-two-top-bowler-wicket").text()).toBe("4/51 (15)");
    });
    it("[Match-container] should have a title as match details", () => {
        expect(wrapper.find("#match-conatiner-title").text()).toBe("Match Details");
    });
    it("[Match-container] should have a match competition name text as 'Series'", () => {
        expect(wrapper.find("#competition-name-text").text()).toBe("Series");
    });
    it("[Match-container] should have a match competition name alue", () => {
        expect(wrapper.find("#competition-name").text()).toBe("others");
    });
    it("[Match-container] should have a match text as 'Date'", () => {
        expect(wrapper.find("#match-date-text").text()).toBe("Date");
    });
    it("[Match-container] should have a match date", () => {
        expect(wrapper.find("#match-date-value").text()).toBe("Mar 07, 2009");
    });
    it("[Match-container] should have a match toss text", () => {
        expect(wrapper.find("#match-toss-text").text()).toBe("Toss");
    });
    it("[Match-container] should have a match toss and decision", () => {
        expect(wrapper.find("#toss-and-decision").text()).toBe("Australia elected to bat");
    });
    it("[Match-container] should have a match venue text", () => {
        expect(wrapper.find("#match-venue-text").text()).toBe("Venue");
    });
    it("[Match-container] should have a match venue name and city", () => {
        expect(wrapper.find("#match-venue-value").text()).toBe("Kingsmead, Durban");
    });
    it("[Match-container] should have a match umpire text ", () => {
        expect(wrapper.find("#match-umpire-text").text()).toBe("Umpire");
    });
    it("[Match-container] should have a match umpire name ", () => {
        expect(wrapper.find("#match-umpire-name").text()).toBe("Asad Rauf");
    });
    it("[PlayingXI-container] should have a match PlayingXI Title ", () => {
        expect(wrapper.find("#playing-XI-title").text()).toBe("Playing XI");
    });
    it("[PlayingXI-container] should have a team one name ", () => {
        expect(wrapper.find("#team-one-p-name").text()).toBe("Australia");
    });
    it("[PlayingXI-container] should have a team two name ", () => {
        expect(wrapper.find("#team-two-p-name").text()).toBe("South Africa");
    });
    it("[PlayingXI-container] should have a team two playingXI players name ", () => {
        expect(wrapper.find("#team-one-playingXI").text()).toBe("MJ Clarke");
    });
    it("[PlayingXI-container] should have a team two playingXI players name ", () => {
        expect(wrapper.find("#team-two-playingXI").text()).toBe("M Ntini");
    });

    it("[getmatchdetailbyId] should test function ComponentDidMount is called ", () => {
        const componentDidMount = jest.spyOn(
            MatchSummaryDetails.prototype,
            "componentDidMount"
        );
        wrapper.instance().componentDidMount();
        expect(componentDidMount).toHaveBeenCalled();

    });

});
