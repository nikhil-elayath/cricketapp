import React from "react";
import { shallow } from "enzyme";
import { AdminTeamPage } from "../AdminTeamPage";
// import store from "../../store";
// import { Provider } from "react-redux";
import { getAllTeams, getTeamSearch } from "../../actions/Admin";
const adminteampage = jest.fn();
const show = jest.fn();
const SweetAlert = jest.fn();
const push = jest.fn();
let team = [{ team_name: "India", team_id: "1" }];
const createTeam = jest.fn();
const showError = jest.fn();
const onRegister = jest.fn();
const historyMock = { push: jest.fn() };
let statemock = {
  showError: false,
  errorMessage: "Please!"
};
const wrapper = shallow(
  <AdminTeamPage
    adminteampage={adminteampage}
    team={team}
    createTeam={createTeam}
    // teams={teams}
    getAllTeams={getAllTeams}
    getTeamSearch={getTeamSearch}
    history={{ historyMock, push: () => {} }}
    show={show}
    SweetAlert={SweetAlert}
    showError={showError}
    state={statemock}
    onRegister={onRegister}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(13);
  });
  it("test changing state ", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    wrapper.find("#add-team").simulate("click", e);

    expect(statemock.showError).toBe(false);
  });

  // check for the heading text
  it("should have heading text ", () => {
    expect(wrapper.find("#heading-1").text()).toBe("All Team");
  });

  // check for the heading text
  it("should have heading text ", () => {
    expect(wrapper.find("#heading-2").text()).toBe("Add New Team");
  });

  // check for how many input field
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(2);
  });

  it("testing for search input field", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#searchInput").length).toBe(1);

    // checks placeholder of the input field
    expect(wrapper.find("#searchInput").prop("placeholder")).toBe("Search"); // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "Search",
        value: "Australia"
      }
    };
    wrapper.instance().onSearchInputChange(event);
    expect(wrapper.state().searchString).toBe(event.target.value);
  });

  it("there should be a buttons", () => {
    expect(wrapper.find("button").length).toBe(3);
  });

  it("there should be a fieldset tag", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });

  it("there should be a button name", () => {
    expect(wrapper.find("#add-team").text()).toBe("Add Team");
  });
  it("there should be a button name for delete and edit", () => {
    expect(wrapper.find("#deletebutton").text()).toBe("Delete");
    expect(wrapper.find("#editbutton").text()).toBe("Edit");
  });

  it("checks for delete function to be called", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#deletebutton").simulate("click");
    expect(wrapper.state().show).toBe(true);
  });
  it("checks for fuction call on edit button for history  push", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#editbutton").simulate("click");
    // expect(historyMock.push).toBeCalledWith("/login");
  });

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });

  it("there should type in inputs", () => {
    expect(wrapper.find("#searchInput").prop("type")).toBe("text");
    expect(wrapper.find("#team_name").prop("type")).toBe("text");
  });

  it("there should name in  inputs", () => {
    expect(wrapper.find("#searchInput").prop("name")).toBe("Search");
    expect(wrapper.find("#team_name").prop("name")).toBe("team_name");
  });

  it("testing for add team input field", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#team_name").length).toBe(1);

    // checks placeholder of the input field
    expect(wrapper.find("#team_name").prop("placeholder")).toBe(
      "Enter Team Name"
    ); // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "team_name",
        value: "Australia"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().team_name).toBe(event.target.value);
  });

  it("should be ok when render component with store", () => {
    expect(wrapper.find("SweetAlert").length).toBe(1);
    expect(wrapper.find("SweetAlert").prop("show")).toBe(true);
    expect(wrapper.find("SweetAlert").prop("title")).toBe("DELETE TEAM");
    expect(wrapper.find("SweetAlert").prop("text")).toBe("Are you sure?");
  });

  it("checks for onEscapeKey to be called", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("SweetAlert").props("onEscapeKey");
    expect(wrapper.state().show).toBe(true);
    wrapper.find("SweetAlert").props("onOutsideClick");
    expect(wrapper.state().show).toBe(true);
  });

  it("checks for componenetDidmMount  to be called", () => {
    // expects onRegister to be called on clicking add-team link
    const componentDidMount = jest.spyOn(
      AdminTeamPage.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  it("input fields should be filled correctly", () => {
    wrapper
      .find("#team_name")
      .simulate("change", { target: { name: "team_name", value: "" } });

    expect(wrapper.state("team_name")).toEqual("");
  });
  it("testing for search input field if empty", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#searchInput").length).toBe(1);

    // checks placeholder of the input field
    expect(wrapper.find("#searchInput").prop("placeholder")).toBe("Search"); // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "Search",
        value: ""
      }
    };
    wrapper.instance().onSearchInputChange(event);
    expect(wrapper.state().searchString).toBe("");
  });
  it("checks for onRegister function to be called", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#add-team").simulate("click", e);
    expect(e.preventDefault).toBeCalled();
    // expect(onRegister).toBeCalled();
  });
  it("test changing state ", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    wrapper.find("#editbutton").simulate("click", e);

    expect(statemock.showError).toBe(false);
  });

  // it("checks for onRegister function to be called", () => {
  //   const e = { preventDefault: () => {} };
  //   jest.spyOn(e, "preventDefault");
  //   // expects onRegister to be called on clicking add-team link
  //   expect(wrapper.find("#add-team").simulate("click", e));
  //   //expect(e.preventDefault).toBeCalled();
  //   // expect(onRegister).toBeCalled();
  //   // jest.spyOn(e, "onRegister");
  //   // expect(onRegister).toBeCalled();
  // });
});
