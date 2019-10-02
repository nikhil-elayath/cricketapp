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
  // it("should call mock function when button is clicked", () => {
  //   const user_email = "";
  //   wrapper.find("button").simulate("click");
  //   expect(onVerify).toBeCalledWith(user_email);
  // });
});
