import React from "react";
import { shallow } from "enzyme";
import { TeamInfo } from "../TeamInfo";

const getTeams = jest.fn();
var teams = [];
var location = [];
const wrapper = shallow(
  <TeamInfo
    getTeams={getTeams}
    teams={teams}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
);

describe("Test TeamInfo Component", () => {
  it("should have exactly 59 div tags", () => {
    expect(wrapper.find("div").length).toBe(59);
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
  it("should have className = 'hr-team-card' exacty 4", () => {
    expect(wrapper.find(".hr-team-card").length).toBe(4);
  });
  it("should have className = 'list' exacty 6", () => {
    expect(wrapper.find(".list").length).toBe(4);
  });
  it("should have className = 'img-card' exacty 6", () => {
    expect(wrapper.find(".img-card").length).toBe(4);
  });
  it("should have className = 'p-team-details-name' exacty 6", () => {
    expect(wrapper.find(".p-team-details-name").length).toBe(4);
  });
  it("should have className = 'p-player-style' exacty 4", () => {
    expect(wrapper.find(".p-player-style").length).toBe(4);
  });
  it("should have className = 'h2-team-details-position' exacty 4", () => {
    expect(wrapper.find(".h2-team-details-position").length).toBe(4);
  });
  it("should have className = 'p-matches' exacty 1", () => {
    expect(wrapper.find(".p-matches").length).toBe(1);
  });
  it("should have className = 'all-recent-matches-box' exacty 1", () => {
    expect(wrapper.find(".all-recent-matches-box").length).toBe(1);
  });
  it("should have className = 'inside-recent-matches-box' exacty 5", () => {
    expect(wrapper.find(".inside-recent-matches-box").length).toBe(5);
  });
  it("should have className = 'tournamnet-name' exacty 5", () => {
    expect(wrapper.find(".tournamnet-name").length).toBe(5);
  });
  it("should have className = 'Team-data' exacty 10", () => {
    expect(wrapper.find(".Team-data").length).toBe(10);
  });
  it("should have className = 'TeamOne-name' exacty 5", () => {
    expect(wrapper.find(".TeamOne-name").length).toBe(5);
  });
  it("should have className = 'TeamOne-score' exacty 5", () => {
    expect(wrapper.find(".TeamOne-score").length).toBe(5);
  });
  it("should have className = 'TeamTwo-name' exacty 5", () => {
    expect(wrapper.find(".TeamTwo-name").length).toBe(5);
  });
  it("should have className = 'TeamTwo-score' exacty 5", () => {
    expect(wrapper.find(".TeamTwo-score").length).toBe(5);
  });
  it("should have className = 'winner-name' exacty 5", () => {
    expect(wrapper.find(".winner-name").length).toBe(5);
  });
});
