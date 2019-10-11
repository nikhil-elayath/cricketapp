import React from "react";
import { shallow } from "enzyme";
import { TeamInfo } from "../TeamInfo";
import { getMatch, getTeamBatsmen, getTeamBowlers } from "../../actions/Teams";

var matches = [
    {
      matchType: "",
      teamOne: "",
      teamOneScore: "",
      teamOneWicket: "",
      teamTwo: "",
      teamTwoScore: "",
      teamTwoWicket: "",
      teamWinner: ""
    }
  ],
  batsmen = [],
  bowlers = [];

const wrapper = shallow(
  <TeamInfo
    getMatch={getMatch}
    matches={matches}
    getTeamBatsmen={getTeamBatsmen}
    batsmen={batsmen}
    getTeamBowlers={getTeamBowlers}
    bowlers={bowlers}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
);
// const resizeWindow = x => {
//   window.innerWidth = x;
//   // window.innerHeight = y;
//   window.dispatchEvent(new Event("resize"));
// };
describe("Test TeamInfo Component", () => {
  // it("checks for dimensions", () => {
  // const elem = wrapper.find(".inside-recent-matches-box-team");
  // expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('width')).toBe('100%');
  // expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('width')).toBe('%');

  // expect(wrapper.find(".inside-recent-matches-box-team").prop('style')).toHaveProperty(
  //   "width",
  //   "100%"
  // );
  //   resizeWindow(1200);
  //   expect(wrapper.find(".inside-recent-matches-box-team")).toHaveProperty(
  //     "width",
  //     "95%"
  //   );
  // });
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have links for Test,ODI,T20 for Top Batsmen", () => {
    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("Top Batsmen");
    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("p")
        .at(4)
        .text()
    ).toBe("T20");
  });
  it("should have links for Test,ODI,T20 for Top Bowlers", () => {
    expect(
      wrapper
        .find("p")
        .at(5)
        .text()
    ).toBe("Top Bowlers");
    expect(
      wrapper
        .find("p")
        .at(6)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("p")
        .at(7)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("p")
        .at(8)
        .text()
    ).toBe("T20");
  });
  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("div")
      .at(0)
      .simulate("click");
  });
  it("should have text brand CricketAlpha, matches, teams, players, stats", () => {
    expect(wrapper.find(".secLink").length).toBe(4);
    expect(
      wrapper
        .find(".secLink")
        .at(0)
        .text()
    ).toBe("Info");
    expect(
      wrapper
        .find(".secLink")
        .at(1)
        .text()
    ).toBe("Players");
    expect(
      wrapper
        .find(".secLink")
        .at(2)
        .text()
    ).toBe("Stats");
    expect(
      wrapper
        .find(".secLink")
        .at(3)
        .text()
    ).toBe("Fixtures");
  });
  it("should have className = 'container-team-details' exacty 1", () => {
    expect(wrapper.find(".container-team-details").length).toBe(1);
  });
  it("should have className = 'grid-container-team' exacty 1", () => {
    expect(wrapper.find(".grid-container-team").length).toBe(1);
  });
  it("should have className = 'grid-container-team-details' exacty 1", () => {
    expect(wrapper.find(".grid-container-team-details").length).toBe(1);
  });
  it("should have className = 'grid-class-team-details' exacty 2", () => {
    expect(wrapper.find(".grid-class-team-details").length).toBe(2);
  });
  it("should have className = 'grid-class-topteam-details' exacty 2", () => {
    expect(wrapper.find(".grid-class-topteam-details").length).toBe(2);
  });
  it("should have className = 'centered' exacty 1", () => {
    expect(wrapper.find(".centered").length).toBe(1);
  });
  it("should have className = 'cards-new' exacty 1", () => {
    expect(wrapper.find(".cards-new").length).toBe(1);
  });
  it("should have className = 'cardtest' exacty 1", () => {
    expect(wrapper.find(".cardtest").length).toBe(1);
  });
  it("should have className = 'cardodi' exacty 1", () => {
    expect(wrapper.find(".cardodi").length).toBe(1);
  });
  it("should have className = 'cardt20' exacty 1", () => {
    expect(wrapper.find(".cardt20").length).toBe(1);
  });
  it("should have className = 'p-card' exacty 3", () => {
    expect(wrapper.find(".p-card").length).toBe(3);
  });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
  // it("should have className = 'hr-team-card' exacty 4", () => {
  //   expect(wrapper.find(".hr-team-card").length).toBe(4);
  // });
  // it("should have className = 'list' exacty 6", () => {
  //   expect(wrapper.find(".list").length).toBe(4);
  // });
  // it("should have className = 'img-card' exacty 6", () => {
  //   expect(wrapper.find(".img-card").length).toBe(4);
  // });
  // it("should have className = 'p-team-details-name' exacty 6", () => {
  //   expect(wrapper.find(".p-team-details-name").length).toBe(4);
  // });
  // it("should have className = 'p-player-style' exacty 4", () => {
  //   expect(wrapper.find(".p-player-style").length).toBe(4);
  // });
  // it("should have className = 'h2-team-details-position' exacty 4", () => {
  //   expect(wrapper.find(".h2-team-details-position").length).toBe(4);
  // });
  it("should have className = 'p-matches' exacty 1", () => {
    expect(wrapper.find(".p-matches").length).toBe(1);
  });
  // it("should have className = 'all-recent-matches-box' exacty 1", () => {
  //   expect(wrapper.find(".all-recent-matches-box").length).toBe(1);
  // });
  // it("should have className = 'inside-recent-matches-box' exacty 5", () => {
  //   expect(wrapper.find(".inside-recent-matches-box").length).toBe(5);
  // });
  it("should have className = 'tournamnet-name' exacty 5", () => {
    expect(wrapper.find(".tournamnet-name").length).toBe(1);
  });
  it("should have className = 'Team-data' exacty 2", () => {
    expect(wrapper.find(".Team-data").length).toBe(2);
  });
  it("should have className = 'TeamOne-name' exacty 1", () => {
    expect(wrapper.find(".TeamOne-name").length).toBe(1);
  });
  it("should have className = 'TeamOne-score' exacty 1", () => {
    expect(wrapper.find(".TeamOne-score").length).toBe(1);
  });
  it("should have className = 'TeamTwo-name' exacty 1", () => {
    expect(wrapper.find(".TeamTwo-name").length).toBe(1);
  });
  it("should have className = 'TeamTwo-score' exacty 1", () => {
    expect(wrapper.find(".TeamTwo-score").length).toBe(1);
  });
  it("should have className = 'winner-name' exacty 1", () => {
    expect(wrapper.find(".winner-name").length).toBe(1);
  });
});
