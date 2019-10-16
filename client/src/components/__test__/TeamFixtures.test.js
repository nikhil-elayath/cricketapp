import React from "react";
import { shallow } from "enzyme";
import { TeamFixtures } from "../TeamFixtures";
import { getFixtures } from "../../actions/Teams";

const wrapper = shallow(<TeamFixtures getFixtures={getFixtures} />);
describe("Test TeamInfo Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  //   it("should have links for Test,ODI,T20 for Top Bowlers", () => {
  //     expect(
  //       wrapper
  //         .find("p")
  //         .at(5)
  //         .text()
  //     ).toBe("Top Bowlers");
  //     expect(
  //       wrapper
  //         .find("p")
  //         .at(6)
  //         .text()
  //     ).toBe("Test");

  //     expect(
  //       wrapper
  //         .find("p")
  //         .at(7)
  //         .text()
  //     ).toBe("ODI");

  //     expect(
  //       wrapper
  //         .find("p")
  //         .at(8)
  //         .text()
  //     ).toBe("T20");
  //   });
  //   it("should check if the tabs are getting clicked ", () => {
  //     wrapper
  //       .find("div")
  //       .at(0)
  //       .simulate("click");
  //   });
  //   it("should have className = 'container-team-details' exacty 1", () => {
  //     expect(wrapper.find(".container-team-details").length).toBe(1);
  //   });
  //   it("should have className = 'grid-container-team' exacty 1", () => {
  //     expect(wrapper.find(".grid-container-team").length).toBe(1);
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
});
