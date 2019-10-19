import React from "react";
import { shallow } from "enzyme";
import { AdminEditPlayer } from "../AdminEditPlayer";
// import store from "../../store";
// import { Provider } from "react-redux";
const admineditplayer = jest.fn();
const state = jest.fn();
import { getPlayers } from "../../actions/Admin";
const toLocaleDateString = jest.fn();
const editPlayer = jest.fn();
let statemock = {
  showError: false,
  errorMessage: "Please!"
};
const wrapper = shallow(
  <AdminEditPlayer
    editPlayer={editPlayer}
    getPlayers={getPlayers}
    toLocaleDateString={toLocaleDateString}
    admineditplayer={admineditplayer}
    match={{ isExact: true, params: { path: "/", url: "/" } }}
    history={{
      location: {
        state: {
          players: {
            player_name: "test",
            player_country: "test",
            batting_style: "test",
            bowling_style: "test",
            player_gender: "male",
            player_role: "batsmen",
            debut_odi_match: "pakistan",
            debut_test_match: "pakistan",
            debut_t20_match: "paksitan"
          }
        }
      },
      push: () => {}
    }}
  />
);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(8);
  });
  // it("there should be a navbar", () => {
  //   expect(wrapper.find("NavBar").length).toBe(1);
  // });
  it("there should be a heading", () => {
    expect(wrapper.find("#heading").length).toBe(1);
    expect(wrapper.find("#heading").text()).toBe("Edit New Player");
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(5);
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
  it("there should be a select tag", () => {
    expect(wrapper.find("select").length).toBe(4);
  });

  it("there should be a fieldset tag", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });

  it("there should be a buttons", () => {
    expect(wrapper.find("#cancel").text()).toBe("Cancel");
    expect(wrapper.find("#editbutton").text()).toBe("Edit Player");
  });

  // it("should change the state of testClicked to true when test tab is clicked", () => {
  //   const test = wrapper.find("button").at(0);
  //   test.simulate("click");
  //   expect(wrapper.state().onRegister).toBe(true);
  // });

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });
  it("there should be type in input fields,search and in select options", () => {
    expect(wrapper.find("#player_name").prop("type")).toBe("text");
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
    expect(wrapper.find("#player_name").prop("name")).toBe("player_name");
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
    expect(wrapper.find("#player_name").prop("placeholder")).toBe(
      "Player name"
    );
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
    expect(wrapper.find("#player_name").length).toBe(1);
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
    expect(wrapper.find("#datepicker").length).toBe(1);
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

  it("checks for componenetDidmMount  to be called", () => {
    // expects onRegister to be called on clicking add-team link
    const componentDidMount = jest.spyOn(
      AdminEditPlayer.prototype,
      "componentDidMount"
    );
    wrapper.instance().componentDidMount();
    expect(componentDidMount).toHaveBeenCalled();
  });

  it("checks for on edit button function to be called", () => {
    const e = { preventDefault: () => {} };
    jest.spyOn(e, "preventDefault");
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#editbutton").simulate("click", e);
    expect(e.preventDefault).toBeCalled();
  });
  it("checks for cancel button click ", () => {
    // expects onRegister to be called on clicking add-team link
    wrapper.find("#cancel").simulate("click");
    expect(wrapper.state().show).toBe();
  });
});
