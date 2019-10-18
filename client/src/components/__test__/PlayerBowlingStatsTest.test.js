import React from "react";
import { shallow, mount } from "enzyme";
import { PlayerBowlingStats } from "../PlayerBowlingStats";

const getTestBowlerStats = jest.fn();
const getODIBowlerStats = jest.fn();
const getT20BowlerStats = jest.fn();
let player_id = 44;

// const getTestBatsmanStats = jest.fn();
const testBowlerStats = [
  {
    Innings: [
      {
        player_stats_value: "34"
      }
    ],
    Matches: [
      {
        player_stats_value: "42"
      }
    ],
    RunsConceded: [
      {
        player_stats_value: "2000"
      }
    ],
    BallsBowled: [
      {
        player_stats_value: "1500"
      }
    ],
    TotalWIckets: [],
    EconomyRate: [],
    FourWickets: [],
    FiveWickets: []
  }
];
//
const t20BowlerStats = [[]];
const odiBowlerStats = [
  {
    Innings: [],
    Matches: [],
    RunsConceded: [],
    BallsBowled: [],
    TotalWIckets: [
      {
        player_stats_value: "90"
      }
    ],
    EconomyRate: [
      {
        player_stats_value: "6.4"
      }
    ],
    FourWickets: [
      {
        player_stats_value: "2"
      }
    ],
    FiveWickets: [
      {
        player_stats_value: "0"
      }
    ]
  }
];

let props;
//let x = { ...props };

const wrapper = shallow(
  <PlayerBowlingStats
    getTestBowlerStats={getTestBowlerStats}
    getODIBowlerStats={getODIBowlerStats}
    getT20BowlerStats={getT20BowlerStats}
    testBowlerStats={testBowlerStats}
    t20BowlerStats={t20BowlerStats}
    odiBowlerStats={odiBowlerStats}
    {...props}
  />
);

describe("Testing player Bowling stats ", () => {
  it("should render the componendt", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // ######### testing component did mount function
  it("should check if the functions componentDidMount is called ", () => {
    const componentDidMount = jest.spyOn(
      PlayerBowlingStats.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  it("should Have 3 headings Test,ODI,T20", () => {
    expect(
      wrapper
        .find("#jest-Test-heading")

        .text()
    ).toBe("Test");
    expect(
      wrapper
        .find("#jest-ODI-heading")

        .text()
    ).toBe("ODI");
    expect(
      wrapper
        .find("#jest-T20-heading")

        .text()
    ).toBe("T20");
  });

  // ######### positive test cases for mapped values for testbowler array
  it("should check the length of innings,matches,runsconceded,ballsbowled array of testBowlerStats and return a value", () => {
    expect(wrapper.find("#jest-Test-Format-Innings").text()).toBe("34");
    expect(wrapper.find("#jest-Test-Format-Matches").text()).toBe("42");
    expect(wrapper.find("#jest-Test-Format-RunsConceded").text()).toBe("2000");
    expect(wrapper.find("#jest-Test-Format-BallsBowled").text()).toBe("1500");
  });

  // ######### negative test cases for mapped values for testbowler array

  it("should check the length of TotalWickets,economyrate,four wickets,five wickets array of testBowlerStats to be 0 and return - ", () => {
    expect(testBowlerStats[0].TotalWIckets.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-TotalWickets").text()).toBe("-");
    expect(testBowlerStats[0].EconomyRate.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-EconomyRate").text()).toBe("-");
    expect(testBowlerStats[0].FourWickets.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-FourWickets").text()).toBe("-");
    expect(testBowlerStats[0].FiveWickets.length).toBe(0);
    expect(wrapper.find("#jest-Test-Format-FiveWickets").text()).toBe("-");
  });

  // ######### positive test cases for mapped values for odibowler array
  it("should check the length of innings,matches,runsconceded,ballsbowled array of testBowlerStats and return a value", () => {
    expect(wrapper.find("#jest-odi-Format-TotalWickets").text()).toBe("90");
    expect(wrapper.find("#jest-odi-Format-EconomyRate").text()).toBe("6.4");
    expect(wrapper.find("#jest-odi-Format-FourWickets").text()).toBe("2");
    expect(wrapper.find("#jest-odi-Format-FiveWickets").text()).toBe("0");
  });

  // ######### negative test cases for mapped values for odibowler array
  it("should check the length of innings,matches,runsconceded,ballsbowled array of testBowlerStats to be 0 and return  - ", () => {
    expect(odiBowlerStats[0].Innings.length).toBe(0);
    expect(wrapper.find("#jest-odi-Format-Innings").text()).toBe("-");
    expect(odiBowlerStats[0].Matches.length).toBe(0);
    expect(wrapper.find("#jest-odi-Format-Matches").text()).toBe(" -");
    expect(odiBowlerStats[0].RunsConceded.length).toBe(0);
    expect(wrapper.find("#jest-odi-Format-RunsConceded").text()).toBe("-");
    expect(odiBowlerStats[0].BallsBowled.length).toBe(0);
    expect(wrapper.find("#jest-odi-Format-BallsBowled").text()).toBe("-");
  });
});
