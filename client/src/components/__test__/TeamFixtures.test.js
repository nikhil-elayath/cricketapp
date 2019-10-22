import React from "react";
import { shallow } from "enzyme";
import { TeamFixtures } from "../TeamFixtures";
// import { getFixtures } from "../../actions/Teams";
const getFixtures = jest.fn();
// const fixtures = jest.fn();
const getPrediction = jest.fn();
const teams = [
  {
    team_name: "Australia",
  },
];

const fixtures = [
  {
    result: [{ date: "12-12-12", team_one: "India", team_two: "Australia" }],
    images: [{ team_image: "" }],
  },
];

const wrapper = shallow(
  <TeamFixtures
    getFixtures={getFixtures}
    getPrediction={getPrediction}
    fixtures={fixtures}
    history={[]}
    teams={teams}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
);
describe("Test TeamInfo Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("User should be able to see the date of the upcoming match", () => {
    expect(wrapper.find("#fix-date").text()).toBe("12-12-12");
  });

  it("User should be able to see the name of both the team", () => {
    expect(wrapper.find("#fix-teams").text()).toBe("IndiavsAustralia");
  });
});
