import React from "react";
import { PlayerInfo } from "../PlayerInfo";
import { shallow } from "enzyme";

const getSinglePlayer = jest.fn();
var singlePlayer = [[]];

const wrapper = shallow(
  <PlayerInfo
    getSinglePlayer={getSinglePlayer}
    singlePlayer={singlePlayer}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
);

describe("Testing PlayerInfo", () => {
  it("should have 18 div", () => {
    expect(wrapper.find("div").length).toBe(18);
  });

  it("should have 8 span elements", () => {
    expect(wrapper.find("span").length).toBe(8);
  });

  it("span elements must have Full Name,Date Of Birth,Test,ODI,T20 text", () => {
    expect(
      wrapper
        .find("span")
        .at(0)
        .text()
    ).toBe("Full Name");
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toBe("Date Of Birth");
    expect(
      wrapper
        .find("span")
        .at(2)
        .text()
    ).toBe("Role");
    expect(
      wrapper
        .find("span")
        .at(3)
        .text()
    ).toBe("Batting Style");
    expect(
      wrapper
        .find("span")
        .at(4)
        .text()
    ).toBe("Bowling Style");
    expect(
      wrapper
        .find("span")
        .at(5)
        .text()
    ).toBe("Test");
    expect(
      wrapper
        .find("span")
        .at(6)
        .text()
    ).toBe("ODI");
    expect(
      wrapper
        .find("span")
        .at(7)
        .text()
    ).toBe("T20");
  });

  it("should have 5 p tag elements", () => {
    expect(wrapper.find("p").length).toBe(5);
  });

  it("p tag elements should have Personal Details,Career Statistics,debut,debut,debut text", () => {
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toBe("Personal Details");

    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("Career Statistics");

    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("Debut");

    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toBe("Debut");
    expect(
      wrapper
        .find("p")
        .at(4)
        .text()
    ).toBe("Debut");
  });

  it("should have 8 b elements ", () => {
    expect(wrapper.find("b").length).toBe(8);
  });
});
