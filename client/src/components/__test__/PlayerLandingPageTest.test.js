import React from "react";
import { shallow } from "enzyme";
import { PlayerLandingPage, getT20 } from "../PlayerLandingPage";

const getBowlers = jest.fn();
var bowlers = [];

const getBatsmen = jest.fn();
var batsmen = [];

// const getT20 = jest.fn();

// var spy = jest.spy();

const wrapper = shallow(
  <PlayerLandingPage
    getBowlers={getBowlers}
    bowlers={bowlers}
    getBatsmen={getBatsmen}
    batsmen={batsmen}
    history={[]}
  />
);

describe("Testing Player Landing Page", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 9 div", () => {
    expect(wrapper.find("div").length).toBe(9);
  });

  it("should have the name of header as Players", () => {
    expect(wrapper.find("h1").text()).toBe("Players");
  });

  it("should have links for Test,Odi and T20", () => {
    expect(
      wrapper
        .find("a")
        .at(0)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("a")
        .at(1)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toBe("T20");
  });

  it("should have a header for top bowlers", () => {
    expect(
      wrapper
        .find("h2")
        .at(1)
        .text()
    ).toBe("Top Wicket Takers");
  });

  it("should have a header for top batsman", () => {
    expect(
      wrapper
        .find("h2")
        .at(0)
        .text()
    ).toBe("Top Run Scorers");
  });

  it("should display 3 select menus", () => {
    expect(wrapper.find("a").length).toBe(3);
  });
  it("should display 3 select menus", () => {
    expect(wrapper.find("a").length).toBe(3);
  });

  it("should check if getT20 has been called ", () => {
    expect(
      wrapper
        .find("a")
        .at(2)
        .simulate("getT20")
    ).toEqual({});
  });
});
