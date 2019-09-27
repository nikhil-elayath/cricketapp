import React from "react";
import { mount } from "enzyme";
import PlayerLandingPage from "../PlayerLandingPage";

const wrapper = mount(<PlayerLandingPage />);

describe("Testing Player Landing Page", () => {
  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 28 div", () => {
    expect(wrapper.find("div").length).toBe(28);
  });

  it("should have 2 header for players", () => {
    expect(wrapper.find("h2").length).toBe(2);
  });
  it("should have the name of header as Players", () => {
    expect(wrapper.find("h2").text()).toBe("Players");
  });
  it("should display 3 select menus", () => {
    expect(wrapper.find("a").length).toBe(3);
  });
});
