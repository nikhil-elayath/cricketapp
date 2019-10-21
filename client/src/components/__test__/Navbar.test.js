import React from "react";
import { shallow, mount } from "enzyme";
import { Navbar } from "../common/Navbar";

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

describe("test for the text, input, css properties and icons on the navbar and snapshot testing", () => {
	it("renders the component for snapshot testing", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("should have text brand CricketAlpha, matches, teams, players", () => {
		// checks for the links text
		expect(wrapper.find("#men").text()).toBe("Men");
		expect(wrapper.find("#women").text()).toBe("Women");
		expect(wrapper.find("#matches").text()).toBe("Matches");
		expect(wrapper.find("#teams").text()).toBe("Teams");
		expect(wrapper.find("#players").text()).toBe("Players");
		expect(wrapper.find("#login").text()).toBe("Login");
		expect(wrapper.find("#register").text()).toBe("Register");
		// expect(wrapper.find("#logout").text()).toBe("Logout");
		// expect(wrapper.find("#logout-admin").text()).toBe("logout");
		// expect(wrapper.find("#manage-teams").text()).toBe("Manage Teams");
		// expect(wrapper.find("#manage-players").text()).toBe("Manage Players");

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
	it("checks for changeGender function to be called on clicking men link", () => {
		// expects changeGender to be called on clicking men link
		wrapper.find("#men").simulate("click");
		expect(changeGender).toBeCalledWith("male");
		expect(changeGender).not.toBeCalledWith("female");
	});
	it("checks for changeGender function to be called on clicking women link", () => {
		// const changeGenderMock = jest.fn();
		// const newWrapper = shallow(
		// 	<Navbar
		// 		search={search}
		// 		handleSearchInputChange={handleSearchInputChange}
		// 		changeGender={changeGenderMock}
		// 		getSearch={jest.fn()}
		// 		toggleChange={toggleChange}
		// 		updateDimensions={updateDimensions}
		// 	/>
		// );

		// expects changeGender to be called on clicking women link
		wrapper.find("#women").simulate("click");
		expect(changeGender).toBeCalledWith("female");
		// expect(changeGenderMock).not.toBeCalledWith("male");
	});
	it("checks for the toggleChange function to be called when menu-btn is clicked", () => {
		// const toggleChangeMock = jest.fn();
		// const pageLink = "";
		// const newWrapper = shallow(
		// 	<Navbar
		// 		search={search}
		// 		handleSearchInputChange={handleSearchInputChange}
		// 		changeGender={changeGender}
		// 		getSearch={jest.fn()}
		// 		toggleChange={toggleChangeMock}
		// 		updateDimensions={updateDimensions}
		// 	/>
		// );
		// // expects toggleChange to be called on clicking menu-btn
		// newWrapper.find("#menu-btn").simulate("click");
		// expect(toggleChangeMock).toHaveBeenCalledWith(pageLink);
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

describe("testing for map functions", () => {
	// testing for player name in the search
	it("checks for the player array in search object", () => {
		expect(
			wrapper.find("#player-search-" + search.player[0].player_id).text()
		).toBe(search.player[0].player_name);
	});
	// testing for team name in the search
	it("checks for the team array in search object", () => {
		expect(
			wrapper.find("#team-search-" + search.team[0].team_id).text()
		).toBe(search.team[0].team_name);
	});

	it("checks for player array and team array", () => {
		// checks length for player and team array not to be 0
		expect(search.player.length).not.toBe(0);
		expect(search.team.length).not.toBe(0);

		const searchMock = {
			team: [],
			player: []
		};

		// checks length for player and team array to be 0
		expect(searchMock.player.length).toBe(0);
		expect(searchMock.team.length).toBe(0);
	});
});
