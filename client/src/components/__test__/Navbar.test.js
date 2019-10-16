import React from "react";
import { shallow, mount } from "enzyme";
import { Navbar } from "../common/Navbar";
import { MemoryRouter, Route } from "react-router-dom";

const search = {
	team: [
		{
			team_id: 10,
			team_name: "India"
		},
		{
			team_id: 67,
			team_name: "Bahrain"
		}
	],
	player: [
		{
			player_id: 58,
			player_name: "JEC Franklin"
		},
		{
			player_id: 65,
			player_name: "D Ramdin"
		}
	]
};
const handleSearchInputChange = jest.fn();
const changeGender = jest.fn();
const wrapper = shallow(
	<Navbar
		search={search}
		handleSearchInputChange={handleSearchInputChange}
		changeGender={changeGender}
		getSearch={jest.fn()}
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
		//checks for the input value to be same as state while inserting text
		const e = {
			target: {
				name: "searchInput",
				value: "virat"
			}
		};
		wrapper.instance().handleSearchInputChange(e);
		expect(wrapper.state().searchInput).toBe(e.target.value);

		// // expects handleSearchInputChange to be called on change in input field
		// wrapper.find("#searchInput").simulate("change", e);
		// expect(handleSearchInputChange).toBeCalled();
	});

	it("checks for changeGender function to be called", () => {
		// expects changeGender to be called on clicking men link
		wrapper.find("#men").simulate("click");
		expect(changeGender).toBeCalledWith("male");

		// expects changeGender to be called on clicking men link
		wrapper.find("#women").simulate("click");
		expect(changeGender).toBeCalledWith("female");
	});
});
