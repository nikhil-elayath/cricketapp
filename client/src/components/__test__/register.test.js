import React from "react";
import { shallow, mount } from "enzyme";
import { Register } from "../Register";
import store from "../../store";
import { Provider } from "react-redux";
const register = jest.fn();

const wrapper = shallow(<Register register={register} />);

describe("test  Component", () => {
  it("render the component", () => {
    // const wrapper = shallow(<Register register={register} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("there should be a div", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("div").length).toBe(2);
  });
  it("there should be a navbar", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("NavBar").length).toBe(0);
  });
  it("there should be a h1", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("h1").length).toBe(1);
    expect(wrapper.find("h1").text()).toBe("Register");
  });
  it("there should be a input", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("input").length).toBe(4);
  });
  it("there should be a buttons", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("button").length).toBe(1);
  });
  it("there should be a link", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("Link").length).toBe(1);
  });
  it("there should be a form", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("form").length).toBe(1);
  });
  it("there should be a fieldset tag", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("fieldset").length).toBe(1);
  });
  it("there should be a p tag", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("p").length).toBe(1);
    // expect(wrapper.find("p").text()).toBe("Already have an account ?");
  });
  it("there should be a button", () => {
    // const wrapper = mount(<Register register={register} />);
    expect(wrapper.find("button").text()).toBe("Sign Up");
  });
});
