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

    it("[Summary Scorecard] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(3)
                .props().className
        ).toBe("top-container");
    });

    it("[Summary Scorecard] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(4)
                .props().className
        ).toBe("top-left-container");
    });
    it("[Summary Scorecard -> top-title] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(5)
                .props().className
        ).toBe("top-title");
    });
    it("[Summary Scorecard -> teamone-top-players] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(8)
                .props().className
        ).toBe("teamone-top-players");
    });

    it("[Summary Scorecard-> teamtwo-top-players] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(14)
                .props().className
        ).toBe("teamtwo-top-players");
    });


    it("[ Match Details] [top-right-container] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(19)
                .props().className
        ).toBe("match_details");
    });
    it("[Match Details -> top-title] [top-left-container] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(20)
                .props().className
        ).toBe("top-title");
    });

    it("[ Playing XI] [bottom-left-container] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(31)
                .props().className
        ).toBe("bottom-left-container");
    });

    it("[Playing XI -> top-title] [bottom-left-container] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(32)
                .props().className
        ).toBe("top-title");
    });


    it("[Playing XI -> playingXI] [bottom-left-container] should have exactly defined classname", () => {
        expect(
            wrapper
                .find("div")
                .at(33)
                .props().className
        ).toBe("playingXI");
    });



});
