import React from "react";
import { shallow, mount } from "enzyme";
import { Login } from "../Login";

const login = jest.fn();
const onLogin = jest.fn();
const wrapper = shallow(<Login login={login} onLogin={onLogin} />);

describe("test  Component", () => {
	it("render the component", () => {
		expect(wrapper).toMatchSnapshot();
	});
	it("there should be a div", () => {
		expect(wrapper.find("div").length).toBe(1);
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
	it("there should be a navber", () => {
		expect(wrapper.find("NavBar").length).toBe(0);
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
	// it("Test click event", () => {
	//   const tree = shallow(
	//     <Button name='button test' handleClick={mockFn} />
	//   );
	//   expect(onLogin).toHaveBeenCalled(0);
	// });
	// it("should call mock function when button is clicked", () => {
	//   const tree = shallow(<onLogin name="button test" handleClick={onLogin} />);
	//   tree.simulate("click");
	//   expect(onLogin).toHaveBeenCalled();
	// });
});
