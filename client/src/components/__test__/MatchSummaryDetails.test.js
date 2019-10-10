import React from "react";
import { shallow } from "enzyme";
import MatchSummaryDetails from "../MatchSummaryDetails"
import { Provider } from "react-redux";
import store from "../../store";


// const matchLandingPage = jest.fn();
const wrapper = shallow(
    <Provider store={store}>
        <MatchSummaryDetails />
    </Provider>
);


describe("Testing of MatchSummaryDetails Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    // it("should have one h2 header", () => {
    //     expect(wrapper.find("h2").length).toBe(1);
    // });
    // it("should have one h2 content with 'Recent Matches' content", () => {
    //     expect(wrapper.find(".h2-recent-matches").text()).toBe("MS Dhoni");
    // });
    // it("should have one div tag with 'Player of the match", () => {
    //     expect(wrapper.find(".short-summary-with-player-of-the-match span").text()).toBe("Player of the match");
    // });



});
