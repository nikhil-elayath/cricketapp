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
    Matches: [
      {
        player_stats_value: "34"
      }
    ],
    Innings: [
      {
        player_stats_value: "34"
      }
    ],
    TotalRuns: [
      {
        player_stats_value: "234"
      }
    ],
    Highestscore: [
      {
        player_stats_value: "69"
      }
    ],
    NotOut: [],
    Sixes: [],
    Hundreds: [],
    TwoHundreds: []
  }
];

// /////////////////
const t20BatsmanStats = [
  {
    Fours: [
      {
        player_stats_value: "69"
      }
    ],
    Sixes: [
      {
        player_stats_value: "34"
      }
    ],
    Hundreds: [
      {
        player_stats_value: "6"
      }
    ],
    TwoHundreds: [
      {
        player_stats_value: "1"
      }
    ],
    NotOut: [
      {
        player_stats_value: "3"
      }
    ],
    TotalRuns: [
      {
        player_stats_value: "234"
      }
    ],
    Matches: [],
    Innings: [],
    Fifties: []
  }
];
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

  // ######### testing component did mount function
  it("should check if the functions componentDidMount is called ", () => {
    const componentDidMount = jest.spyOn(
      PlayerBattingStats.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  //       ///////////  Testing for headers
  it("should Have 3 headings Test,ODI,T20", () => {
    expect(wrapper.find("#jest-Heading-1").text()).toBe("Test");
    expect(wrapper.find("#jest-Heading-2").text()).toBe("ODI");
    expect(wrapper.find("#jest-Heading-3").text()).toBe("T20");
  });
  it("should have 70 span tags", () => {
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toBe("Matches");
  });

  //  ///////////// positive test cases for mapped values for testbatsman array
  it("should test the  map  values and return a response with a value ", () => {
    expect(wrapper.find("#jest-Test-Format-Matches").text()).toBe("34");
    expect(wrapper.find("#jest-Test-Format-Innings").text()).toBe("34");
    expect(wrapper.find("#jest-Test-Format-TotalRuns").text()).toBe("234");
    expect(wrapper.find("#jest-Test-Format-Highestscore").text()).toBe("69");
  });

  //  ///////////// negative test cases for mapped values for testbatsman array
  it("should test the map  values and return a response with - and the length pf array should be 0", () => {
    expect(batsmanStats[0].NotOut.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-NotOut").text()).toBe("-");
    expect(batsmanStats[0].Sixes.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-Sixes").text()).toBe("-");
    expect(batsmanStats[0].Hundreds.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-Hundreds").text()).toBe("-");
    expect(batsmanStats[0].TwoHundreds.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-TwoHundreds").text()).toBe("-");
  });

  //  ######### positive test cases for mapped values for t20batsman array
  it("should test the  map  values and return a response with a value ", () => {
    expect(wrapper.find("#jest-T20-Format-NotOut").text()).toBe("3");
    expect(wrapper.find("#jest-T20-Format-Sixes").text()).toBe("34");
    expect(wrapper.find("#jest-T20-Format-TotalRuns").text()).toBe("234");
    expect(wrapper.find("#jest-T20-Format-Hundreds").text()).toBe("6");
    expect(wrapper.find("#jest-T20-Format-TwoHundreds").text()).toBe("1");
    expect(wrapper.find("#jest-T20-Format-Fours").text()).toBe("69");
  });

  //  ######### negative test cases for mapped values for t20batsman array
  it("should test the map  values and return a response with - and the length of array should be 0 ", () => {
    expect(t20BatsmanStats[0].Matches.length).toBe(0);
    expect(wrapper.find("#jest-T20-Format-Matches").text()).toBe("-");
    expect(t20BatsmanStats[0].Innings.length).toBe(0);
    expect(wrapper.find("#jest-T20-Format-Innings").text()).toBe("-");
    expect(t20BatsmanStats[0].Fifties.length).toBe(0);
    expect(wrapper.find("#jest-T20-Format-Fifties").text()).toBe("-");
  });
});
