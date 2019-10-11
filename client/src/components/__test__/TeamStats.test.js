import React from "react";
import { shallow } from "enzyme";
import { TeamStats } from "../TeamStats";
import { getTeams } from "../../actions/Teams";

var teams = [];
const wrapper = shallow(<TeamStats getTeams={getTeams} teams={teams} />);

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
    const test = wrapper.find("div").at(4);
    test.simulate("click");
    expect(wrapper.state().testClick).toBe(true);
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
  });

  it("should change the state of odiclicked to true when odi tab is clicked", () => {
    const odi = wrapper.find("div").at(5);
    odi.simulate("click");
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().odiClick).toBe(true);
    expect(wrapper.state().t20Click).toBe(false);
  });

  it("should change the state of t20Click to true when IT20 tab is clicked", () => {
    const t20 = wrapper.find("div").at(6);
    t20.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(true);
  });
  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("div")
      .at(0)
      .simulate("click");
  });
  it("should have className = 'container-team' exacty 1", () => {
    expect(wrapper.find(".container-team").length).toBe(1);
  });
  it("should have className = 'h1-team' exacty 1", () => {
    expect(wrapper.find(".h1-team").length).toBe(1);
    expect(wrapper.find(".h1-team").text()).toBe("Teams");
  });
  it("should have className = 'grid-container-team' exacty 1", () => {
    expect(wrapper.find(".grid-container-team").length).toBe(1);
  });
  it("should have className = 'country-team' exacty 1", () => {
    expect(wrapper.find(".country-team").length).toBe(1);
  });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
