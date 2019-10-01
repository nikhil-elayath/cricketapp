import React from "react";
import { shallow } from "enzyme";
import { MatchLandingPage } from "../MatchLandingPage";


// const matchLandingPage = jest.fn();
const wrapper = shallow(
    <MatchLandingPage />
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

    it("should have 86 div tag", () => {
        expect(wrapper.find("div").length).toBe(86);
    });
    it("should have one h2 header", () => {
        expect(wrapper.find("h2").length).toBe(1);
    });
    it("should have one h2 content with 'Matches' content", () => {
        expect(wrapper.find(".h2-recent-matches").text()).toBe("Matches");
    });

});
