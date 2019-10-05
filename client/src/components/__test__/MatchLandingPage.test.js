import React from "react";
import { shallow } from "enzyme";
import { MatchLandingPage } from "../MatchLandingPage";


const getRecentMatches = jest.fn();
const getMatchesDate = jest.fn();
let matches = [];
const wrapper = shallow(

    <MatchLandingPage matches={matches} getRecentMatches={getRecentMatches} getMatchesDate={getMatchesDate} />
);

describe("Testing of MatchLandingPage Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have one h1 header", () => {
        expect(wrapper.find("h1").length).toBe(1);
    });

    // it("should have one h1 content with 'Matches' content", () => {
    //     expect(wrapper.find(".h1-match").text()).toBe("Matches");
    // });

    it("should have 5 div tag", () => {
        expect(wrapper.find("div").length).toBe(5);
    });
    it("should have 1 div tag with classname as 'timeline", () => {
        expect(wrapper.find('.timeline').length).toBe(1);
    });
    // it("should have 1 div tag with classname as all-recent-matches-box'", () => {
    //     expect(wrapper.find('.all-recent-matches-box').length).toBe(1);
    // });
    it("should have one h2 header", () => {
        expect(wrapper.find("h2").length).toBe(1);
    });
    // it("should have one h2 content with 'Matches' content", () => {
    //     expect(wrapper.find(".h2-recent-matches").text()).toBe("Matches");
    // });

});
