import React from "react";
import { shallow } from "enzyme";
import { TeamStats } from "../TeamStats";
import { getHighestTotals, getLowestTotals } from "../../actions/Teams";

var highesttotals = [],
  lowesttotals = [],
  teams = [];
const wrapper = shallow(
  <TeamStats
    getHighestTotals={getHighestTotals}
    highesttotals={highesttotals}
    lowesttotals={lowesttotals}
    teams={teams}
  />
);

describe("Test TeamStats Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have links for Test,ODI,T20", () => {
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toBe("T20");
  });
  it("should change the state of testClicked to true when test tab is clicked", () => {
    const test = wrapper.find("div").at(6);
    test.simulate("click");
    expect(wrapper.state().testClick).toBe(true);
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
  });

  it("should change the state of odiclicked to true when odi tab is clicked", () => {
    const odi = wrapper.find("div").at(7);
    odi.simulate("click");
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().odiClick).toBe(true);
    expect(wrapper.state().t20Click).toBe(false);
  });

  it("should change the state of t20Click to true when IT20 tab is clicked", () => {
    const t20 = wrapper.find("div").at(8);
    t20.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(true);
  });
  it("should have links for Highest Totals", () => {
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toBe("T20");
  });
  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("div")
      .at(0)
      .simulate("click");
  });
  it("should have className = 'container-team-details' exacty 1", () => {
    expect(wrapper.find(".container-team-details").length).toBe(1);
  });
  it("should have className = 'types-section' exacty 1", () => {
    expect(wrapper.find(".types-section").length).toBe(1);
  });
  it("should have className = 'p-match-type' exacty 1", () => {
    expect(wrapper.find(".p-match-type").length).toBe(1);
    expect(wrapper.find(".p-match-type").text()).toBe("Select Match Type");
  });
  it("should have className = 'match-type-section' exacty 1", () => {
    expect(wrapper.find(".match-type-section").length).toBe(1);
  });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
