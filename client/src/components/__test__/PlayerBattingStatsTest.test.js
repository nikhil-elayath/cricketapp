import React from "react";
import { shallow, mount } from "enzyme";
import { PlayerBattingStats } from "../PlayerBattingStats";
// import { getBatsmanStats } from "../../actions/PlayerAction";

const getBatsmanStats = jest.fn();
const getODIBatsmanStats = jest.fn();
const getT20BatsmanStats = jest.fn();
const getTestBatsmanStats = jest.fn();
const batsmanStats = [[]];
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
  it("should have 70 span tags", () => {
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toBe("Matches");
  });
});
