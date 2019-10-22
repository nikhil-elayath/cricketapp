import React from "react";
import { shallow } from "enzyme";
import { Register } from "../Register";
// import store from "../../store";
// import { Provider } from "react-redux";
const register = jest.fn();
const onRegister = jest.fn();

const wrapper = shallow(
  <Register register={register} onRegister={onRegister} />
);

describe("test  Component", () => {
  it("render the component", () => {
    // const wrapper = shallow(<Register register={register} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(2);
  });
  it("there should be a navbar", () => {
    expect(wrapper.find("Navbar").length).toBe(1);
  });
  it("there should be a h1", () => {
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Register");
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(4);
  });
  it("there should be a buttons", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
  it("there should be a link", () => {
    expect(wrapper.find("Link").length).toBe(1);
  });
  it("there should be a form", () => {
    expect(wrapper.find("form").length).toBe(1);
  });
  it("there should be a fieldset tag", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });
  it("there should be a p tag", () => {
    expect(wrapper.find("p").length).toBe(1);
    expect(wrapper.find("p").text()).toBe("Already have an account ?Login");
  });
  it("there should be a button", () => {
    expect(wrapper.find("button").text()).toBe("Sign Up");
  });

  it("there should be a button", () => {
    expect(wrapper.find("button").simulate("onRegister")).toEqual({});
  });

  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(2);
    expect(
      wrapper
        .find("span")
        .at(1)
        .text()
    ).toBe("Login");
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
    ).toEqual("password");
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("type")
    ).toEqual("password");
  });

  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("name")
    ).toEqual("user_name");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("name")
    ).toEqual("user_email");

    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("name")
    ).toEqual("user_password");
    expect(
      wrapper
        .find("input")
        .at(3)
        .prop("name")
    ).toEqual("confirmPassword");
  });
  it("there should name in  inputs", () => {
    expect(
      wrapper
        .find("input")
        .at(0)
        .prop("placeholder")
    ).toEqual("Enter Name");
    expect(
      wrapper
        .find("input")
        .at(1)
        .prop("placeholder")
    ).toEqual("Enter Email");

    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("placeholder")
    ).toEqual("Enter Password");
    expect(
      wrapper
        .find("input")
        .at(3)
        .prop("placeholder")
    ).toEqual("Confirm Password");
  });
});
