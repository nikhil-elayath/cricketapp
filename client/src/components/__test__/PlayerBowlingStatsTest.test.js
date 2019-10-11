import React from "react";
import { shallow, mount } from "enzyme";
import { PlayerBowlingStats } from "../PlayerBowlingStats";

const getTestBowlerStats = jest.fn();
const getODIBowlerStats = jest.fn();
const getT20BowlerStats = jest.fn();
// const getTestBatsmanStats = jest.fn();
const testBowlerStats = [[]];
const t20BowlerStats = [[]];
const odiBowlerStats = [[]];

const wrapper = shallow(
  <PlayerBowlingStats
    getTestBowlerStats={getTestBowlerStats}
    getODIBowlerStats={getODIBowlerStats}
    getT20BowlerStats={getT20BowlerStats}
    // getTestBatsmanStats={getTestBatsmanStats}
    testBowlerStats={testBowlerStats}
    t20BowlerStats={t20BowlerStats}
    odiBowlerStats={odiBowlerStats}
  />
);

describe("Testing player Bowling stats ", () => {
  it("should render the componendt", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should Have 4 headings Test,ODI,T20,IPL", () => {
    expect(
      wrapper
        .find("h3")
        .at(0)
        .text()
    ).toBe("Test");
    expect(
      wrapper
        .find("h3")
        .at(1)
        .text()
    ).toBe("ODI");
    expect(
      wrapper
        .find("h3")
        .at(2)
        .text()
    ).toBe("T20");
  });
});
