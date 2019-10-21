import React from "react";
import { PlayerInfo } from "../PlayerInfo";
import { shallow } from "enzyme";

const getSinglePlayer = jest.fn();
var singlePlayer = [[]];

const wrapper = shallow(
  <PlayerInfo
    getSinglePlayer={getSinglePlayer}
    singlePlayer={singlePlayer}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
);

describe("Testing PlayerInfo", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test for the functions to be called", () => {
    const componentDidMount = jest.spyOn(
      PlayerInfo.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  it("span elements must have Full Name,Date Of Birth,Test,ODI,T20 text", () => {
    expect(
      wrapper
        .find("#jest-full-name")

        .text()
    ).toBe("Full Name");

    expect(
      wrapper
        .find("#jest-role")

        .text()
    ).toBe("Role");
    expect(
      wrapper
        .find("#jest-batting-style")

        .text()
    ).toBe("Batting Style");
    expect(
      wrapper
        .find("#jest-bowling-style")

        .text()
    ).toBe("Bowling Style");

    expect(wrapper.find("#odi-heading").text()).toBe("ODI");
    expect(wrapper.find("#t20-heading").text()).toBe("T20");
  });
});
