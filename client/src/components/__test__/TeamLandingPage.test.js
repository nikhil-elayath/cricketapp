import React from "react";
import { shallow } from "enzyme";
import { TeamLandingPage } from "../TeamLandingPage";

const getTeams = jest.fn();
var teams = [];
var ranks = [];
const wrapper = shallow(
  <TeamLandingPage getTeams={getTeams} teams={teams} ranks={ranks} />
);

describe("Test TeamLandingPage Component", () => {
  it("should have exactly 29 div tags", () => {
    expect(wrapper.find("div").length).toBe(21);
  });
  it("should have className = 'container-team' exacty 1", () => {
    expect(wrapper.find(".container-team").length).toBe(1);
  });
  it("should have className = 'h1-team' exacty 1", () => {
    expect(wrapper.find(".h1-team").length).toBe(1);
  });
  it("should have className = 'grid-container-team' exacty 1", () => {
    expect(wrapper.find(".grid-container-team").length).toBe(1);
  });
  it("should have className = 'country-team' exacty 1", () => {
    expect(wrapper.find(".country-team").length).toBe(1);
  });
  // it("should have className = 'grid-class-team' exacty 4", () => {
  //   expect(wrapper.find(".grid-class-team").length).toBe(4);
  // });
  // it("should have className = 'info-team' exacty 1", () => {
  //   expect(wrapper.find(".info-team").length).toBe(4);
  // });
  it("should have className = 'top-team' exacty 1", () => {
    expect(wrapper.find(".top-team").length).toBe(1);
  });
  it("should have className = 'top-team' exacty 1", () => {
    expect(wrapper.find(".top-team").length).toBe(1);
  });
  it("should have className = 'grid-class-topteam' exacty 1", () => {
    expect(wrapper.find(".grid-class-topteam").length).toBe(1);
  });
  it("should have className = 'cards' exacty 1", () => {
    expect(wrapper.find(".cards").length).toBe(1);
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
  it("should have className = 'list' exacty 4", () => {
    expect(wrapper.find(".list").length).toBe(4);
  });
  it("should have className = 'img-card' exacty 4", () => {
    expect(wrapper.find(".img-card").length).toBe(4);
  });
  it("should have className = 'p-team-name' exacty 4", () => {
    expect(wrapper.find(".p-team-name").length).toBe(4);
  });
  it("should have className = 'h2-team-position' exacty 4", () => {
    expect(wrapper.find(".h2-team-position").length).toBe(4);
  });
  it("should have className = 'hr-team-card' exacty 4", () => {
    expect(wrapper.find(".hr-team-card").length).toBe(4);
  });
  it("getTeams", () => {});
});
