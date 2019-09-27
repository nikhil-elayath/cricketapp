import React from "react";
import { shallow } from "enzyme";
import Scroll from "../Scroll";
import { Provider } from "react-redux";
import store from "../../store";


const scroller = jest.fn();
const wrapper = shallow(
    <Provider store={store}>
        <Scroll scroller={scroller} />
    </Provider>
);


describe("Testing of Scroll Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("should have one h1 header", () => {
        expect(wrapper.find("h1").length).toBe(2);
    });

    it("should have one h1 content with 'Matches' content", () => {
        expect(wrapper.find(".h1-match").text()).toBe("Matches");
    });

    it("should have 2 div tag", () => {
        expect(wrapper.find("div").length).toBe(7);
    });
    it("should have one h1 content with 'Matches' content", () => {
        expect(wrapper.find(".h1-recent-matches").text()).toBe("Recent Matches");
    });

});
