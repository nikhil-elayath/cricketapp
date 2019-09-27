import React from "react";
import PlayerInfo from "../PlayerInfo";
import { shallow, mount } from "enzyme";

const wrapper = mount(<PlayerInfo />);

describe("Testing PlayerInfo", () => {
  it("should have 1 div", () => {
    expect(wrapper.find("div").length).toBe(3);
  });
});
