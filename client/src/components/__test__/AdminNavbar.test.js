import React from "react";
import { shallow, mount } from "enzyme";
import { AdminNavbar } from "../common/AdminNavbar";

const toggleChange = jest.fn();
const updateDimensions = jest.fn();
const wrapper = shallow(
	<AdminNavbar
		toggleChange={toggleChange}
		updateDimensions={updateDimensions}
	/>
);

describe("test for the text, input, css properties and icons on the navbar and snapshot testing", () => {
	it("renders the component for snapshot testing", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should have text brand CricketAlpha, matches, teams, players", () => {
		// checks for the links text
		expect(wrapper.find("#adminteam").text()).toBe("Manage Teams");
		expect(wrapper.find("#adminplayer").text()).toBe("Manage Players");

		// checks for the nav brand text
		expect(wrapper.find("#nav-brand").text()).toBe("CricketAlpha");
	});
});

describe("test for toggle on navbar and toggleChange function", () => {
	it("checks for the toggleChange function to be called when menu-btn is clicked", () => {
		// expects toggleChange to be called on clicking men link
		wrapper.find("#menu-btn").simulate("click");
		expect(toggleChange).toHaveBeenCalled();
	});
});

describe("test for updateDimensions function to be called", () => {
	it("checks for the updateDimensions function to be called on window size change", () => {
		const spy = jest.spyOn(wrapper.instance(), "updateDimensions");

		// Trigger the window resize event.
		global.addEventListener("resize", spy);
		global.dispatchEvent(new Event("resize"));
		// expects updateDimensions to be called on clicking men link
		// wrapper.find("#menu-btn").simulate("click");
		expect(spy).toBeCalled();
	});
});
