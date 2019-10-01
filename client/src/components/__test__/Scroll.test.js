import React from "react";
import { shallow } from "enzyme";
import { Scroll } from "../Scroll";

const scroller = jest.fn();
const wrapper = shallow(
    <Scroll scroller={scroller} />
);


describe("Testing of Scroll Component", () => {

    it("should render the component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should have 2 div tag", () => {
        expect(wrapper.find("div").length).toBe(7);
    });

});
