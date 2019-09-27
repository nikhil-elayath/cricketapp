import React from "react";
import { shallow } from "enzyme";
import SecondaryNavbar from "../common/SecondaryNavbar";

const wrapper = shallow(<SecondaryNavbar />);

describe("test for the text,css properties and icons on the secondary navbar", () => {
	it("should have text brand CricketAlpha, matches, teams, players, stats", () => {
		// checks for no. of link present on navbar
		expect(wrapper.find(".secLink").length).toBe(4);

		// checks for the links text
		expect(
			wrapper
				.find(".secLink")
				.at(0)
				.text()
		).toBe("Info");
		expect(
			wrapper
				.find(".secLink")
				.at(1)
				.text()
		).toBe("Batting Stats");
		expect(
			wrapper
				.find(".secLink")
				.at(2)
				.text()
		).toBe("Bowling Stats");
		expect(
			wrapper
				.find(".secLink")
				.at(3)
				.text()
		).toBe("Performance");

		// checks for the nav head text
		expect(wrapper.find("h2").text()).toBe("MS Dhoni");
		expect(wrapper.find("h4").text()).toBe("India");
	});
});
