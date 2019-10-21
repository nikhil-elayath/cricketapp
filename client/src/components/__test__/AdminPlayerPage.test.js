import React from "react";
import { shallow } from "enzyme";
import { AdminPlayerPage } from "../AdminPlayerPage";
// import store from "../../store";
// import { Provider } from "react-redux";
import { getPlayers, getPlayerSearch } from "../../actions/Admin";
const adminplayerpage = jest.fn();
const SweetAlert = jest.fn();
const show = jest.fn();
let playerInfo = [{ player_name: "SC Cook", player_id: "1" }];
let statemock = {
  showError: false,
  errorMessage: "Please!"
};
const createPlayer = jest.fn();
const wrapper = shallow(
  <AdminPlayerPage
    createPlayer={createPlayer}
    adminplayerpage={adminplayerpage}
    playerInfo={playerInfo}
    getPlayers={getPlayers}
    history={[]}
    getPlayerSearch={getPlayerSearch}
    SweetAlert={SweetAlert}
    show={show}
    state={statemock}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(18);
  });
  it("test changing state ", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    wrapper.find("#addbutton").simulate("click", e);

    expect(statemock.showError).toBe(false);
  });

  it("there should be a heading text ", () => {
    //check for the heading text
    expect(wrapper.find("#heading-1").text()).toBe("All Players");
    expect(wrapper.find("#heading-2").text()).toBe("Add New Player");
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(6);
  });
  it("there should be a buttons", () => {
    expect(wrapper.find("button").length).toBe(3);
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

  it("there should be a button name", () => {
    expect(wrapper.find("#deletebutton").text()).toBe("Delete");
    expect(wrapper.find("#editbutton").text()).toBe("Edit");
    expect(wrapper.find("#addbutton").text()).toBe("Add Player");
  });

  it("testing for search input field", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#searchInput").length).toBe(1);

    // checks placeholder of the input field
    expect(wrapper.find("#searchInput").prop("placeholder")).toBe("Search"); // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "Search",
        value: "SC Cook"
      }
    };
    wrapper.instance().onSearchInputChange(event);
    expect(wrapper.state().searchString).toBe(event.target.value);
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

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });
  it("checks for on add button function to be called", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#addbutton").simulate("click", e);
    expect(e.preventDefault).toBeCalled();
  });
  it("test changing state ", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    wrapper.find("#editbutton").simulate("click", e);

    expect(statemock.showError).toBe(false);
  });

  it("should be ok when render component with store", () => {
    expect(wrapper.find("#SweetAlert").length).toBe(1);
    expect(wrapper.find("#SweetAlert").prop("show")).toBe(false);
    expect(wrapper.find("#SweetAlert").prop("title")).toBe("DELETE PLAYER!");
    expect(wrapper.find("#SweetAlert").prop("text")).toBe("Are you sure?");
  });
  it("checks for onEscapeKey to be called", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#SweetAlert").props("onEscapeKey");

    expect(wrapper.state().show).toBe();
    wrapper.find("#SweetAlert").props("onOutsideClick");
    expect(wrapper.state().show).toBe();
    wrapper.find("#SweetAlert").props("onConfirm");
    expect(wrapper.state().show).toBe();
  });

  it("checks for componenetDidmMount  to be called", () => {
    // expects onRegister to be called on clicking add-team link
    const componentDidMount = jest.spyOn(
      AdminPlayerPage.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  it("there should be type in input fields,search and in select options", () => {
    expect(wrapper.find("#searchInput").prop("type")).toBe("text");
    expect(wrapper.find("#enter-name").prop("type")).toBe("text");
    expect(wrapper.find("#player_country").prop("type")).toBe("text");
    expect(wrapper.find("#batting_style").prop("type")).toBe("text");
    expect(wrapper.find("#bowling_style").prop("type")).toBe("text");
    expect(wrapper.find("#player_gender").prop("type")).toBe("text");
    expect(wrapper.find("#player_role").prop("type")).toBe("text");
    expect(wrapper.find("#debut_odi_match").prop("type")).toBe("text");
    expect(wrapper.find("#debut_test_match").prop("type")).toBe("text");
    expect(wrapper.find("#debut_t20_match").prop("type")).toBe("text");
  });

  it("there should be name in input fields,search and in select options", () => {
    expect(wrapper.find("#searchInput").prop("name")).toBe("Search");
    expect(wrapper.find("#enter-name").prop("name")).toBe("player_name");
    expect(wrapper.find("#player_country").prop("name")).toBe("player_country");
    expect(wrapper.find("#batting_style").prop("name")).toBe("batting_style");
    expect(wrapper.find("#bowling_style").prop("name")).toBe("bowling_style");
    expect(wrapper.find("#player_gender").prop("name")).toBe("player_gender");
    expect(wrapper.find("#player_role").prop("name")).toBe("player_role");
    expect(wrapper.find("#debut_odi_match").prop("name")).toBe(
      "debut_odi_match"
    );
    expect(wrapper.find("#debut_test_match").prop("name")).toBe(
      "debut_test_match"
    );
    expect(wrapper.find("#debut_t20_match").prop("name")).toBe(
      "debut_t20_match"
    );
  });

  it("there should be placeholder in input fields,search and in select options", () => {
    expect(wrapper.find("#searchInput").prop("placeholder")).toBe("Search");
    expect(wrapper.find("#enter-name").prop("placeholder")).toBe("Enter Name");
    expect(wrapper.find("#player_country").prop("placeholder")).toBe(
      "Enter Player Country"
    );
    // expect(wrapper.find("#batting_style").prop("placeholder")).toBe("text");
    // expect(wrapper.find("#bowling_style").prop("placeholder")).toBe("text");
    // expect(wrapper.find("#player_gender").prop("placeholder")).toBe("text");
    expect(wrapper.find("#player_role").prop("placeholder")).toBe(
      "Enter Player Role"
    );
    expect(wrapper.find("#debut_odi_match").prop("placeholder")).toBe(
      "Enter Debut ODI Match"
    );
    expect(wrapper.find("#debut_test_match").prop("placeholder")).toBe(
      "Enter Debut Test Match"
    );
    expect(wrapper.find("#debut_t20_match").prop("placeholder")).toBe(
      "Enter Debut T20 Match"
    );
  });

  it("testing for add player name input field", () => {
    // checks for the presence of search input field
    expect(wrapper.find("#enter-name").length).toBe(1);
    // checks for the input value to be same as state while inserting text
    const event = {
      target: {
        name: "player_name",
        value: "SC cooK"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().player_name).toBe(event.target.value);
  });

  it("testing for add player_country input field", () => {
    expect(wrapper.find("#player_country").length).toBe(1);
    const event = {
      target: {
        name: "player_country",
        value: "india"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().player_country).toBe(event.target.value);
  });
  it("testing for add batting_style input field", () => {
    expect(wrapper.find("#batting_style").length).toBe(1);
    const e = {
      target: {
        name: "batting_style",
        value: "Right Hand"
      }
    };
    wrapper.instance().OnSelectBattingStyle(e);
    expect(wrapper.state().batting_style).toBe(e.target.value);
  });

  it("testing for add bowling_style input field", () => {
    expect(wrapper.find("#bowling_style").length).toBe(1);
    const e = {
      target: {
        name: "bowling_style",
        value: "Right-arm fast"
      }
    };
    wrapper.instance().OnSelectBowlerStyle(e);
    expect(wrapper.state().bowling_style).toBe(e.target.value);
  });

  it("testing for add datepicker input field", () => {
    expect(wrapper.find("#DatePicker").length).toBe(1);
    const date = {
      target: {
        name: "datepicker",
        value: "1997-05-18"
      }
    };
    wrapper.instance().handleChange(date);
    expect(wrapper.state().player_dob).toBe(date);
  });

  it("testing for add player_gender input field", () => {
    expect(wrapper.find("#player_gender").length).toBe(1);
    const e = {
      target: {
        name: "player_gender",
        value: "male"
      }
    };
    wrapper.instance().OnSelectGender(e);
    expect(wrapper.state().player_gender).toBe(e.target.value);
  });

  it("testing for add player_role input field", () => {
    expect(wrapper.find("#player_role").length).toBe(1);
    const e = {
      target: {
        name: "player_role",
        value: "batsmen"
      }
    };
    wrapper.instance().OnSelectRole(e);
    expect(wrapper.state().player_role).toBe(e.target.value);
  });

  it("testing for add debut_odi_match input field", () => {
    expect(wrapper.find("#debut_odi_match").length).toBe(1);
    const event = {
      target: {
        name: "debut_odi_match",
        value: "india"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().debut_odi_match).toBe(event.target.value);
  });

  it("testing for add debut_odi_match input field", () => {
    expect(wrapper.find("#debut_test_match").length).toBe(1);
    const event = {
      target: {
        name: "debut_test_match",
        value: "india"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().debut_test_match).toBe(event.target.value);
  });

  it("testing for add debut_odi_match input field", () => {
    expect(wrapper.find("#debut_t20_match").length).toBe(1);
    const event = {
      target: {
        name: "debut_t20_match",
        value: "india"
      }
    };
    wrapper.instance().OnChange(event);
    expect(wrapper.state().debut_t20_match).toBe(event.target.value);
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
});
