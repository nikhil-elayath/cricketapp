import React from "react";
import { shallow } from "enzyme";
import { TeamStats } from "../TeamStats";
import { getTeamStats } from "../../actions/Teams";

var teams = [],
  teamstats = [];

const wrapper = shallow(
  <TeamStats getTeamStats={getTeamStats} teamstats={teamstats} teams={teams} />
);

describe("Test TeamStats Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have text for match type", () => {
    expect(wrapper.find("#p-stats-match-type").text()).toBe(
      "Select Match Type"
    );
  });
  it("tab should have text for T20", () => {
    expect(wrapper.find("#p-stats-match-type-t20").text()).toBe("T20");
  });
  it("tab should have text for ODI", () => {
    expect(wrapper.find("#p-stats-match-type-odi").text()).toBe("ODI");
  });
  it("tab should have text for Test", () => {
    expect(wrapper.find("#p-stats-match-type-test").text()).toBe("Test");
  });
  it("should have text for match type", () => {
    expect(wrapper.find("#p-stats-category").text()).toBe("Select Category");
  });
  it("tab should have text for Highest Totals", () => {
    expect(wrapper.find("#p-stats-category-ht").text()).toBe("Highest Totals");
  });
  it("tab should have text for Lowest Totals", () => {
    expect(wrapper.find("#p-stats-category-lt").text()).toBe("Lowest Totals");
  });
  it("tab should have text for Largest Margin", () => {
    expect(wrapper.find("#p-stats-category-lv").text()).toBe(
      "Largest Victories"
    );
  });
  it("tab should have text for Smallest Margin", () => {
    expect(wrapper.find("#p-stats-category-sv").text()).toBe(
      "Smallest Victories"
    );
  });

  // it("should change the state of testClicked to true when test tab is clicked", () => {
  //   const test = wrapper.find("#click-test");
  //   test.simulate("click");
  //   expect(wrapper.state().testClick).toBe(true);
  //   expect(wrapper.state().odiClick).toBe(false);
  //   expect(wrapper.state().t20Click).toBe(false);
  // });

  // it("should change the state of odiclicked to true when odi tab is clicked", () => {
  //   const odi = wrapper.find("#click-odi");
  //   odi.simulate("click");
  //   expect(wrapper.state().testClick).toBe(false);
  //   expect(wrapper.state().odiClick).toBe(true);
  //   expect(wrapper.state().t20Click).toBe(false);
  // });

  // it("should change the state of t20Click to true when IT20 tab is clicked", () => {
  //   const t20 = wrapper.find("#click-t20");
  //   t20.simulate("click");
  //   expect(wrapper.state().odiClick).toBe(false);
  //   expect(wrapper.state().testClick).toBe(false);
  //   expect(wrapper.state().t20Click).toBe(true);
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-match-type").text()).toBe("ODI");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-team-one").text()).toBe("South Africa");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-team-two").text()).toBe("Australia");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-winner").text()).toBe("South Africa WON");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-batsman-name").text()).toBe("Ms Dhoni");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-batsman-score").text()).toBe("10004");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-bowler-name").text()).toBe("Mohammad Sami");
  // });
  // it("Match type should be shown", () => {
  //   expect(wrapper.find("#id-bowler-score").text()).toBe("15");
  // });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
});
