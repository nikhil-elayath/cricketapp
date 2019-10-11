import React from "react";
import { shallow } from "enzyme";
import MatchScoreDetails from "../MatchScoreDetails"
import { Provider } from "react-redux";
import store from "../../store";


// const matchLandingPage = jest.fn();
const wrapper = shallow(
    <Provider store={store}>
        <MatchScoreDetails />
    </Provider>
);

describe("Testing of MatchScoreDetails Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("[Main Conatiner] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(3)
                .props().className
        ).toBe("top-container-scorecard");
    });
    it("[Main Conatiner - > batsman-heading] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(5)
                .props().className
        ).toBe("batsman-heading");
    });
    it("[Main Conatiner - > extras-content] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(22)
                .props().className
        ).toBe("extras-content");
    });
    it("[Main Conatiner - > total-content] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(26)
                .props().className
        ).toBe("total-content");
    });
    it("[Main Conatiner - > bowler-heading] should have exactly defined classname ", () => {
        expect(
            wrapper
                .find("div")
                .at(30)
                .props().className
        ).toBe("bowler-heading");
    });

});
