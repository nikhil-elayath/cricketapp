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

});
