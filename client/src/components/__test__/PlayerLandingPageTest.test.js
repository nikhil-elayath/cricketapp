import React from "react";
import { shallow } from "enzyme";
import { PlayerLandingPage } from "../PlayerLandingPage";

let state = {
  gender: "male"
};

const getBowlers = jest.fn();
var bowlers = [
  {
    player_name: "SL Malinga",
    player_id: 35
  }
];

const getBatsmen = jest.fn();
var batsmen = [
  {
    player_name: "virat kohli",
    player_id: 44
  }
];

const changeGender = jest.fn();

const getTopSixes = jest.fn();
var topSixes = [
  {
    player_name: "virat kohli",
    player_id: 44
  }
];

const historyMock = { push: jest.fn() };

// const getTopPlayers = jest.fn();

// const getT20 = jest.fn();

const wrapper = shallow(
  <PlayerLandingPage
    getBowlers={getBowlers}
    bowlers={bowlers}
    getBatsmen={getBatsmen}
    batsmen={batsmen}
    getTopSixes={getTopSixes}
    topSixes={topSixes}
    history={historyMock}
    gender={state.gender}
    changeGender={changeGender}
  />
);

describe("Testing Player Landing Page", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should test for the functions are called ", () => {
    const componentDidMount = jest.spyOn(
      PlayerLandingPage.prototype,
      "componentDidMount"
    );
    const componentWillReceiveProps = jest.spyOn(
      PlayerLandingPage.prototype,
      "componentWillReceiveProps"
    );
    let nextProps = {
      gender: "female"
    };
    wrapper.instance().componentDidMount();
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(componentDidMount).toHaveBeenCalled();
    expect(componentWillReceiveProps).toHaveBeenCalled();
  });

  //////// ################ HISTORY.PUSH TEST CASE
  it("should mock the history push function", () => {
    wrapper.find("#jest-history-1").simulate("click");
    expect(historyMock.push).toBeCalledWith(
      "/playerInfo/" + batsmen[0].player_id
    );
    wrapper.find("#jest-history-2").simulate("click");
    expect(historyMock.push).toBeCalledWith(
      "/playerInfo/" + bowlers[0].player_id
    );
    wrapper.find("#jest-history-mostSixes").simulate("click");
    expect(historyMock.push).toBeCalledWith(
      "/playerInfo/" + topSixes[0].player_id
    );
  });

  it("should have the name of header as Players", () => {
    expect(wrapper.find("#playerHeading").text()).toBe("Players");
  });

  it("should have links for Test,Odi and T20", () => {
    expect(
      wrapper
        .find("#jest-test-tab")

        .text()
    ).toBe("Test");
    expect(
      wrapper
        .find("#jest-ODI-tab")

        .text()
    ).toBe("ODI");
    expect(
      wrapper
        .find("#jest-T20-tab")

        .text()
    ).toBe("T20");
  });

  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("#jest-test-tab")

      .simulate("click");
    expect(wrapper.state().matchType).toBe("Test");
    wrapper
      .find("#jest-ODI-tab")

      .simulate("click");
    expect(wrapper.state().matchType).toBe("ODI");
    wrapper
      .find("#jest-T20-tab")

      .simulate("click");
    expect(wrapper.state().matchType).toBe("T20");
  });

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
