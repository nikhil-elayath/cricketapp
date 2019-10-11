import React from "react";
import { shallow } from "enzyme";
import { MostWins } from "../MostWins";
import { getRanks } from "../../actions/teams";

var ranks = [];
const wrapper = shallow(<MostWins getRanks={getRanks} ranks={ranks} />);

describe("Test MostWins Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have links for Test,ODI,T20 and IPL", () => {
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
    ).toBe("IT20");

    expect(
      wrapper
        .find("p")
        .at(4)
        .text()
    ).toBe("IPL");
  });
  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("div")
      .at(0)
      .simulate("click");
  });
  it("should change the state of testClicked to true when test tab is clicked", () => {
    const test = wrapper.find("div").at(5);
    test.simulate("click");
    expect(wrapper.state().testClick).toBe(true);
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(false);
  });

  it("should change the state of odiclicked to true when odi tab is clicked", () => {
    const odi = wrapper.find("div").at(6);
    odi.simulate("click");
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().odiClick).toBe(true);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(false);
  });

  it("should change the state of t20Click to true when IT20 tab is clicked", () => {
    const t20 = wrapper.find("div").at(7);
    t20.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(true);
    expect(wrapper.state().iplClick).toBe(false);
  });
  it("should change the state of iplClick to true when IPL tab is clicked", () => {
    const ipl = wrapper.find("div").at(8);
    ipl.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(true);
  });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should have className = 'grid-class-topteam' exacty 1", () => {
    expect(wrapper.find(".grid-class-topteam").length).toBe(1);
  });
  it("should have className = 'cards' exacty 1", () => {
    expect(wrapper.find(".cards").length).toBe(1);
  });
  it("should have className = 'cardtest' exacty 1", () => {
    expect(wrapper.find(".cardtest").length).toBe(1);
  });
  it("should have className = 'cardodi' exacty 2", () => {
    expect(wrapper.find(".cardodi").length).toBe(2);
  });
  it("should have className = 'cardt20' exacty 1", () => {
    expect(wrapper.find(".cardt20").length).toBe(1);
  });
  it("should have className = 'p-card' exacty 4", () => {
    expect(wrapper.find(".p-card").length).toBe(4);
  });
});
