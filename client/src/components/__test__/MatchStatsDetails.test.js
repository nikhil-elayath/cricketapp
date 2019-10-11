import React from "react";
import { shallow } from "enzyme";
import MatchStatsDetails from "../MatchStatsDetails"
import { Provider } from "react-redux";
import store from "../../store";

const wrapper = shallow(
    <Provider store={store}>
        <MatchStatsDetails />
    </Provider>
);


describe("Testing of MatchStatsDetails Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("[Main container] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(3)
                .props().className
        ).toBe("top-container-stats");
    });
    it("[Main container -> stats-container] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(5)
                .props().className
        ).toBe("stats-container");
    });
    it("[Main container -> top-title] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(6)
                .props().className
        ).toBe("top-title");
    });




});
