import React from "react";
import { shallow, mount } from "enzyme";
import { PlayerBattingStats } from "../PlayerBattingStats";
// import { getBatsmanStats } from "../../actions/PlayerAction";

const getBatsmanStats = jest.fn();
const getODIBatsmanStats = jest.fn();
const getT20BatsmanStats = jest.fn();
const getTestBatsmanStats = jest.fn();

// ////////////////////

const batsmanStats = [
  {
    Innings: []
  }
];

// /////////////////
const t20BatsmanStats = [[]];
const odiBatsmanStats = [[]];

const wrapper = shallow(
  <PlayerBattingStats
    getBatsmanStats={getBatsmanStats}
    getODIBatsmanStats={getODIBatsmanStats}
    getT20BatsmanStats={getT20BatsmanStats}
    getTestBatsmanStats={getTestBatsmanStats}
    batsmanStats={batsmanStats}
    t20BatsmanStats={t20BatsmanStats}
    odiBatsmanStats={odiBatsmanStats}
  />
);

describe("Testing Player Batting stats component", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  //       ///////////  Testing for headers
  it("should Have 3 headings Test,ODI,T20", () => {
    expect(wrapper.find(".jest-Heading-1").text()).toBe("Test");
    expect(wrapper.find(".jest-Heading-2").text()).toBe("ODI");
    expect(wrapper.find(".jest-Heading-3").text()).toBe("T20");
  });
  it("should have 70 span tags", () => {
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toBe("Matches");
  });

  //  ///////////// testing for mapped functions by creating a dummy mapped value above and checking whether the exact text is being mapped or not.
  it("should test the map  span tags", () => {
    expect(wrapper.find(".jest-map-Innings").text()).toBe("-");
    // expect(wrapper.find(".jest-map-Innings").text()).toBe("4");
  });
});
