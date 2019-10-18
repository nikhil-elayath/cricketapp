import React from "react";
import { shallow } from "enzyme";
import { MatchLandingPage } from "../MatchLandingPage";


const getRecentMatches = jest.fn();

const matches = [
    {
        match_id: 1,
        match_type: "ODI",
        teamOne: "India",
        teamTwo: "Pakistan",
        teamOneScore: 120,
        teamTwoScore: 150,
        team_winner: "India",
        match_date: "12-12-12",
        teamone_wicket: 5,
        teamtwo_wicket: 10,
        match_values: "50 overs"
    },
];

const match = {
    match_id: 1,
    match_type: "ODI",
    teamOne: "India",
    teamTwo: "Pakistan",
    teamOneScore: 120,
    teamTwoScore: 150,
    team_winner: "India",
    match_date: "12-12-12",
    teamone_wicket: 5,
    teamtwo_wicket: 10,
    match_values: "50 overs"
}

const historyMock = { push: jest.fn() };


const wrapper = shallow(
    <MatchLandingPage matches={matches} match={match} history={historyMock} getRecentMatches={getRecentMatches} />
);

describe("Testing of MatchLandingPage Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have one h1 header", () => {
        expect(wrapper.find("#title-of-match").length).toBe(1);
    });

    it("should have one h1 content with 'Matches' content", () => {
        expect(wrapper.find("#title-of-match").text()).toBe("Matches");
    });
    // it("should have one h2 header", () => {
    //     expect(wrapper.find("#no-matches-title").length).toBe(1);
    // });

    // it("should have one h1 content with 'Matches' content", () => {
    //     expect(wrapper.find("#no-matches-title").text()).toBe("No Matches");
    // });

    it("should have match type at the top of every matches", () => {
        expect(wrapper.find("#match-type").text()).toBe("ODI");
    });

    it("should have team one name in the container of every matches", () => {
        expect(wrapper.find("#team-one-name").text()).toBe("India");
    });
    it("should have team two name in the container of every matches", () => {
        expect(wrapper.find("#team-two-name").text()).toBe("Pakistan");
    });
    it("should have team one score in the container of every matches", () => {
        expect(wrapper.find("#team-one-score").text()).toBe("120/5 (50 overs)");
    });
    it("should have team two score in the container of every matches", () => {
        expect(wrapper.find("#team-two-score").text()).toBe("150/10 (50 overs)");
    });
    it("should have team winner name in the container of every matches", () => {
        expect(wrapper.find("#match-winner").text()).toBe("India won");
    });

    it("should mock the history push function", () => {
        wrapper.find("#pushing-match").simulate("click");
        expect(historyMock.push).toBeCalledWith(
            "/match/details/" + matches[0].match_id, {
            match
        })
    })

});
