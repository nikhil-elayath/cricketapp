import React from "react";
import { shallow } from "enzyme";
import { AdminTeamPage } from "../AdminTeamPage";
// import store from "../../store";
// import { Provider } from "react-redux";
import { getTeams } from "../../actions/Admin";
const adminteampage = jest.fn();
let teams = [];

const wrapper = shallow(
  <AdminTeamPage
    adminteampage={adminteampage}
    teams={teams}
    getTeams={getTeams}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    // const wrapper = shallow(<Register register={register} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(8);
  });
  // it("there should be a navbar", () => {
  //   expect(wrapper.find("NavBar").length).toBe(1);
  // });
  it("there should be a h1", () => {
    expect(wrapper.find("h1").length).toBe(2);
    expect(
      wrapper
        .find("h1")
        .at(0)
        .text()
    ).toBe("All Team");
    expect(
      wrapper
        .find("h1")
        .at(1)
        .text()
    ).toBe("Add New Team");
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(2);
  });
  it("there should be a buttons", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
  // it("there should be a link", () => {
  //   expect(wrapper.find("Link").length).toBe(2);
  // });

  it("there should be a fieldset tag", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });

  // it("there should be a p tag", () => {
  //   expect(wrapper.find("p").length).toBe(1);
  //   expect(wrapper.find("p").text()).toBe("Already have an account ?Login");
  // });
  it("there should be a button", () => {
    expect(wrapper.find("button").text()).toBe("Add Team");
  });

  // it("should change the state of testClicked to true when test tab is clicked", () => {
  //   const test = wrapper.find("button").at(0);
  //   test.simulate("click");
  //   expect(wrapper.state().onRegister).toBe(true);
  // });

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });

  it("there should type inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("type")
    ).toEqual("text");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("type")
    ).toEqual("text");
  });

  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("name")
    ).toEqual("Search");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("name")
    ).toEqual("team_name");
  });
  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("placeholder")
    ).toEqual("Search");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("placeholder")
    ).toEqual("Enter Team Name");
  });
});
