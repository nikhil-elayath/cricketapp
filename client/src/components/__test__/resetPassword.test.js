import React from "react";
import { shallow } from "enzyme";
import { ResetPassword } from "../ResetPassword";
// import store from "../../store";
// import { Provider } from "react-redux";
// import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

const resetpassword = jest.fn();
const onVerify = jest.fn();

const wrapper = shallow(
  <ResetPassword resetpassword={resetpassword} onVerify={onVerify} />
);

describe("test  Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
  it("there should be a input", () => {
    expect(wrapper.find("input").length).toBe(3);
  });
  it("there should be a form", () => {
    expect(wrapper.find("form").length).toBe(1);
  });
  it("there should be a fieldset", () => {
    expect(wrapper.find("fieldset").length).toBe(1);
  });
  it("there should be a h1 tag", () => {
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Reset Password");
  });
  it("there should be a button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });
  it("there should be a text on button", () => {
    expect(wrapper.find("button").text()).toBe("Send OTP");
  });
  it("there should be a button", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("button").simulate("onVerify")).toEqual({});
  });
  it("there should be a span", () => {
    expect(wrapper.find("span").length).toBe(1);
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
    expect(
      wrapper
        .find("input")
        .at(2)
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
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("name")
    ).toEqual("confirmPassword");
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
    expect(
      wrapper
        .find("input")
        .at(2)
        .prop("placeholder")
    ).toEqual("Confirm Password");
  });
});
