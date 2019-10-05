import React from "react";
import { shallow } from "enzyme";
import Navbar from "../common/Navbar";

const wrapper = shallow(<Navbar />);

describe("test for the text,css properties and icons on the navbar", () => {
  it("should have text brand CricketAlpha, matches, teams, players, stats", () => {
    // checks for no. of link present on navbar
    expect(wrapper.find(".link").length).toBe(6);

    // checks for the links text
    expect(
      wrapper
        .find(".link")
        .at(0)
        .text()
    ).toBe("Matches");
    expect(
      wrapper
        .find(".link")
        .at(1)
        .text()
    ).toBe("Teams");
    expect(
      wrapper
        .find(".link")
        .at(2)
        .text()
    ).toBe("Players");
    expect(
      wrapper
        .find(".link")
        .at(3)
        .text()
    ).toBe("Stats");

    // checks for the nav brand text
    expect(wrapper.find(".navBrand").text()).toBe("CricketAlpha");
  });
});
