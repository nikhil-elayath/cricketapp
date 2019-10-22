import React from "react";
import { shallow } from "enzyme";
import { PlayerLandingPage } from "../PlayerLandingPage";

let state = {
  gender: "male"
};

const getTopPlayers = jest.fn();
var topPlayer = [
  {
    TopBatsman: [
      {
        player_name: "AB de Villiers",
        player_id: 44
      }
    ],
    MostSixes: [
      {
        player_name: "AB de Villiers",
        player_id: 44
      }
    ],
    TopBowler: [
      {
        player_name: "DW Steyn",
        player_id: 256
      }
    ]
  }
];

const changeGender = jest.fn();

const historyMock = { push: jest.fn() };

const wrapper = shallow(
  <PlayerLandingPage
    getTopPlayers={getTopPlayers}
    topPlayer={topPlayer}
    history={historyMock}
    gender={state.gender}
    changeGender={changeGender}
  />
);

describe("Testing Player Landing Page", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  /////  ############# COMPONENTDIDMOUNT AND WILLRECIEVE FUNCTION TESTS

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
      "/playerInfo/" + topPlayer[0].TopBatsman[0].player_id
    );
    wrapper.find("#jest-history-2").simulate("click");
    expect(historyMock.push).toBeCalledWith(
      "/playerInfo/" + topPlayer[0].TopBowler[0].player_id
    );
    wrapper.find("#jest-history-mostSixes").simulate("click");
    expect(historyMock.push).toBeCalledWith(
      "/playerInfo/" + topPlayer[0].MostSixes[0].player_id
    );
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
});
