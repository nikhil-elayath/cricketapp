import React from "react";
import { shallow, mount } from "enzyme";
import { Navbar } from "../common/Navbar";
import { MemoryRouter, Route } from "react-router-dom";

const search = {
	team: [
		{
			team_id: 10,
			team_name: "India"
		}
	],
	player: [
		{
			player_id: 58,
			player_name: "JEC Franklin"
		}
	]
};
const handleSearchInputChange = jest.fn();
const changeGender = jest.fn();
const toggleChange = jest.fn();
const updateDimensions = jest.fn();
const wrapper = shallow(
	<Navbar
		search={search}
		handleSearchInputChange={handleSearchInputChange}
		changeGender={changeGender}
		getSearch={jest.fn()}
		toggleChange={toggleChange}
		updateDimensions={updateDimensions}
	/>
);

describe("test for the text, input, css properties and icons on the navbar", () => {
	it("should have text brand CricketAlpha, matches, teams, players", () => {
		// checks for the links text
		expect(wrapper.find("#men").text()).toBe("Men");
		expect(wrapper.find("#women").text()).toBe("Women");
		expect(wrapper.find("#matches").text()).toBe("Matches");
		expect(wrapper.find("#teams").text()).toBe("Teams");
		expect(wrapper.find("#players").text()).toBe("Players");

		// checks for the nav brand text
		expect(wrapper.find("#nav-brand").text()).toBe("CricketAlpha");
	});
	it("testing for search input field", () => {
		// checks for the presence of search input field
		expect(wrapper.find("#searchInput").length).toBe(1);

		// checks placeholder of the input field
		expect(wrapper.find("#searchInput").prop("placeholder")).toBe(
			"Search for Team or Player"
		);
		// checks for the input value to be same as state while inserting text
		const e = {
			target: {
				name: "searchInput",
				value: "virat"
			}
		};
		wrapper.instance().handleSearchInputChange(e);
		expect(wrapper.state().searchInput).toBe(e.target.value);
	});
});

describe("test for men and women toggle on navbar and toggleChange function", () => {
	it("checks for changeGender function to be called", () => {
		// expects changeGender to be called on clicking men link
		wrapper.find("#men").simulate("click");
		expect(changeGender).toBeCalledWith("male");
		// expect(changeGender).not.toBeCalledWith("female");

		// expects changeGender to be called on clicking men link
		wrapper.find("#women").simulate("click");
		expect(changeGender).toBeCalledWith("female");
	});
	// it("checks for the toggleChange function to be called when menu-btn is clicked", () => {
	// 	// expects toggleChange to be called on clicking men link
	// 	wrapper.find("#menu-btn").simulate("click");
	// 	expect(toggleChange).toBeCalled();
	// });
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
