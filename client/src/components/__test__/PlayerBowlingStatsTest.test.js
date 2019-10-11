import React from "react";
import { shallow, mount } from "enzyme";
import PlayerBowlingStats from "../PlayerBowlingStats";

const wrapper = shallow(<PlayerBowlingStats />);

describe("Testing player Bowling stats ", () => {
  it("should render the componendt", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
