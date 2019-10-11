import React from "react";
import { shallow } from "enzyme";
// import { Scroll } from "../Scroll";

// const match_date = jest.fn();
// const map = jest.fn();
// const wrapper = shallow(
//     <Scroll match_date={match_date} map={map} />
// );

describe("Testing of Scroll Component", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it("should render the component", () => {
  //     expect(wrapper).toMatchSnapshot();
  // });

  // it("should have 2 div tag", () => {
  //     expect(wrapper.find("div").length).toBe(7);
  // });
});
