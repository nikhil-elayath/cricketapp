import React from "react";
import { shallow } from "enzyme";
import { AdminEditTeam } from "../AdminEditTeam";
// import store from "../../store";
// import { Provider } from "react-redux";
const admineditteam = jest.fn();
const state = jest.fn();
import { getAllTeams } from "../../actions/Admin";
let playerInfo = [];
const dispatch = jest.fn();
const editTeam = jest.fn();

let statemock = {
  showError: false,
  errorMessage: "Please!"
};

const wrapper = shallow(
  <AdminEditTeam
    playerInfo={playerInfo}
    editTeam={editTeam}
    getAllTeams={getAllTeams}
    dispatch={dispatch}
    admineditteam={admineditteam}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
    history={{
      location: {
        state: {
          teams: {
            team_name: "test"
          }
        }
      },
      push: () => {}
    }}
    state={statemock}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(3);
  });

  it("there should be a heading text", () => {
    expect(wrapper.find("#heading").length).toBe(1);
    expect(wrapper.find("#heading").text()).toBe("Edit Team");
  });
  it("there should be a input", () => {
    expect(wrapper.find("#team_name").length).toBe(1);
  });
  it("there should be a buttons", () => {
    expect(wrapper.find("button").length).toBe(2);
  });
  it("there should be a link", () => {
    expect(wrapper.find("Link").length).toBe(1);
  });

  it("there should be a fieldset tag", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });

  it("there should be a button", () => {
    expect(
      wrapper
        .find("#cancel")

        .text()
    ).toBe("Cancel");
    expect(
      wrapper
        .find("#editbutton")

        .text()
    ).toBe("Edit Team");
  });

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });

  it("there should type inputs", () => {
    expect(wrapper.find("#team_name").prop("type")).toEqual("text");
  });

  it("test changing state ", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    wrapper.find("#editbutton").simulate("click", e);

    expect(statemock.showError).toBe(false);
  });

  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("#team_name")

        .prop("name")
    ).toEqual("team_name");
  });
  it("there should placeholder in  inputs", () => {
    expect(
      wrapper
        .find("#team_name")

        .prop("placeholder")
    ).toEqual("Enter Team Name");
  });
  it("there should type in  inputs", () => {
    expect(wrapper.find("#team_name").prop("type")).toBe("text");
  });

  it("checks for on edit button function to be called", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#editbutton").simulate("click", e);
    expect(e.preventDefault).toBeCalled();
    expect(editTeam).toBeCalled();
  });
  it("testing for add player name input field", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#team_name").length).toBe(1);
    // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "team_name",
        value: "india"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().team_name).toBe(event.target.value);
  });

  it("checks for componenetDidmMount  to be called", () => {
    // expects onRegister to be called on clicking add-team link
    const componentDidMount = jest.spyOn(
      AdminEditTeam.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });
  it("checks for cancel button click ", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#cancel").simulate("click");
    // expect(wrapper.state().show).toBe();
  });
});
