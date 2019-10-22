import React from "react";
import { shallow } from "enzyme";
import { Login } from "../Login";

const login = jest.fn();
const onLogin = jest.fn();
const wrapper = shallow(<Login login={login} onLogin={onLogin} />);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(2);
  });
  it("there should be a p tag", () => {
    expect(wrapper.find("p").length).toBe(2);
  });
  it("there should be a link tag", () => {
    expect(wrapper.find("Link").length).toBe(2);
  });
  it("there should be a h1 tag", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });

  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(2);
  });
  it("there should be a form", () => {
    expect(wrapper.find("form").length).toBe(1);
  });
  it("there should be a fieldset", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });
  it("there should be a button", () => {
    expect(wrapper.find("button").text()).toBe("Login");
  });
  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(3);
  });
  it("there should be a button", () => {
    expect(wrapper.find("button").simulate("onLogin")).toEqual({});
  });
  it("there should be a input", () => {
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
    ).toEqual("password");
  });

  it("there should be a input", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("name")
    ).toEqual("user_email");

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("name")
    ).toEqual("user_password");
  });

  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("placeholder")
    ).toEqual("Enter Email");

    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("placeholder")
    ).toEqual("Enter Password");
  });
});
