import React from "react";
import { shallow } from "enzyme";
import { PlayerLandingPage } from "../PlayerLandingPage";

const getBowlers = jest.fn();
var bowlers = [];

const getBatsmen = jest.fn();
var batsmen = [];

const getTopSixes = jest.fn();
var topSixes = [];

// const getT20 = jest.fn();

const wrapper = shallow(
  <PlayerLandingPage
    getBowlers={getBowlers}
    bowlers={bowlers}
    getBatsmen={getBatsmen}
    batsmen={batsmen}
    getTopSixes={getTopSixes}
    topSixes={topSixes}
    history={[]}
  />
);

describe("Testing Player Landing Page", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it("should have the name of header as Players", () => {
  //   expect(wrapper.find("h1").text()).toBe("Players");
  // });

  it("should have links for Test,Odi and T20", () => {
    // expect(wrapper.find("#jest-test-tab").text()).toBe("Test");

    expect(wrapper.find("#jest-ODI-tab").text()).toBe("ODI");

    expect(wrapper.find("#jest-T20-tab").text()).toBe("T20");
  });

  // it("should check if the tabs are getting clicked ", () => {
  //   wrapper
  //     .find("a")
  //     .at(0)
  //     .simulate("click");
  // });

  // it("should change the state of testClicked to true when test tab is clicked", () => {
  //   const test1 = wrapper.find("#jest-test-tab");
  //   console.log("getting functions from props ", test1.props());
  //   test1.simulate("click");
  //   console.log("after simulation props are: ", wrapper.state());
  //   expect(wrapper.state().testClicked).toBe(true);
  //   expect(wrapper.state().odiClicked).toBe(false);
  //   expect(wrapper.state().t20Clicked).toBe(false);
  // });

  // it("should change the state of odiclicked to true when odi tab is clicked", () => {
  //   const odi = wrapper.find("#jest-ODI-tab");
  //   console.log("getting functions from props ", odi.props());
  //   odi.simulate("click");
  //   console.log("after simulation props are: ", wrapper.state());
  //   expect(wrapper.state().odiClicked).toBe(true);
  //   expect(wrapper.state().testClicked).toBe(false);
  //   expect(wrapper.state().t20Clicked).toBe(false);
  // });

  // it("should change the state of t20Clicked to true when T20 tab is clicked", () => {
  //   const odi = wrapper.find("#jest-T20-tab");
  //   console.log("getting functions from props ", odi.props());
  //   odi.simulate("click");
  //   console.log("after simulation props are: ", wrapper.state());
  //   expect(wrapper.state().odiClicked).toBe(false);
  //   expect(wrapper.state().testClicked).toBe(false);
  //   expect(wrapper.state().t20Clicked).toBe(true);
  // });
});
