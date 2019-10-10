import React from "react";
import { shallow } from "enzyme";
import { Scroll } from "../Scroll";

const scroller = jest.fn();
var getMatchesDate = jest.fn();
var date = [];
const wrapper = shallow(
  <Scroll scroller={scroller} date={date} getMatchesDate={getMatchesDate} />
);

describe("Testing of Scroll Component", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  //   it("should have 2 div tag", () => {
  //     expect(wrapper.find("div").length).toBe(7);
  //   });
});
