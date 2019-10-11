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

    it("should have one h1 content with 'Matches' content", () => {
        expect(wrapper.find(".h1-match").text()).toBe("Matches");
    });

    it("should have one h2 header", () => {
        expect(wrapper.find("h2").length).toBe(1);
    });

    it("should have 1 div tag with classname as 'timeline", () => {
        expect(wrapper.find('.timeline').length).toBe(1);
    });

    it(" [Scroller -> timeline] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(4)
                .props().className
        ).toBe("timeline");
    });

    it(" [inside-recent-matches-box] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(6)
                .props().className
        ).toBe("inside-recent-matches-box");
    });

    it(" [inside-recent-matches-box] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("span")
                .at(7)
                .props().className
        ).toBe("tournamnet-name");
    });

    it(" [Team-data] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("span")
                .at(8)
                .props().className
        ).toBe("Team-data");
    });
    it(" [TeamOne-name] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(9)
                .props().className
        ).toBe("TeamOne-name");
    });
    it(" [TeamOne-score] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(10)
                .props().className
        ).toBe("TeamOne-score");
    });

});
