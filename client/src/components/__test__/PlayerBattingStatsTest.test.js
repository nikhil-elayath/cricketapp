import React from "react";
import { shallow, mount } from "enzyme";
import { PlayerBattingStats } from "../PlayerBattingStats";
// import { getBatsmanStats } from "../../actions/PlayerAction";

const getBatsmanStats = jest.fn();
const batsmanStats = [[]];

const wrapper = shallow(
  <PlayerBattingStats
    getBatsmanStats={getBatsmanStats}
    batsmanStats={batsmanStats}
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
    expect(
      wrapper
        .find("h3")
        .at(3)
        .text()
    ).toBe("IPL");
  });
  it("should have 104 span tags", () => {
    expect(wrapper.find("span").length).toBe(104);
  });
});
