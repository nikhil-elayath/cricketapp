import React from "react";
import { shallow } from "enzyme";
import { AdminPlayerPage } from "../AdminPlayerPage";
// import store from "../../store";
// import { Provider } from "react-redux";
import { getPlayers } from "../../actions/Admin";
const adminplayerpage = jest.fn();
let playerInfo = [];

const wrapper = shallow(
  <AdminPlayerPage
    adminplayerpage={adminplayerpage}
    playerInfo={playerInfo}
    getPlayers={getPlayers}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    // const wrapper = shallow(<Register register={register} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(13);
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
    ).toBe("All Players");
    expect(
      wrapper
        .find("h1")
        .at(1)
        .text()
    ).toBe("Add New Player!");
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(6);
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
  it("there should be a select tag", () => {
    expect(wrapper.find("select").length).toBe(4);
  });
  // it("there should be a p tag", () => {
  //   expect(wrapper.find("p").length).toBe(1);
  //   expect(wrapper.find("p").text()).toBe("Already have an account ?Login");
  // });
  it("there should be a button", () => {
    expect(wrapper.find("button").text()).toBe("Add Player");
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
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("type")
    ).toEqual("text");
    expect(
      wrapper
        .find("input")
        .at(3)
        .prop("type")
    ).toEqual("text");
    expect(
      wrapper
        .find("input")
        .at(4)
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
    ).toEqual("player_name");
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("name")
    ).toEqual("player_country");

    expect(
      wrapper
        .find("input")
        .at(3)
        .prop("name")
    ).toEqual("debut_odi_match");
    expect(
      wrapper
        .find("input")
        .at(4)
        .prop("name")
    ).toEqual("debut_test_match");
    expect(
      wrapper
        .find("input")
        .at(5)
        .prop("name")
    ).toEqual("debut_t20_match");
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
    ).toEqual("Enter Name");
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("placeholder")
    ).toEqual("Enter Player Country");

    expect(
      wrapper
        .find("input")
        .at(3)
        .prop("placeholder")
    ).toEqual("Enter Debut ODI Match");
    expect(
      wrapper
        .find("input")
        .at(4)
        .prop("placeholder")
    ).toEqual("Enter Debut Test Match");
    expect(
      wrapper
        .find("input")
        .at(5)
        .prop("placeholder")
    ).toEqual("Enter Debut T20 Match");
  });
});
