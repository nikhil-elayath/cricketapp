import React from "react";
import { shallow } from "enzyme";
import MatchSecondaryNavbar from "../common/MatchSecondaryNavbar";

const wrapper = shallow(<MatchSecondaryNavbar />);

describe("[MatchSecondaryNavbar] test for the text,css properties", () => {
	it("should have summary, scoreboard, stats", () => {
		// checks for no. of link present on navbar
		expect(wrapper.find(".link").length).toBe(3);

		// checks for the links text
		expect(
			wrapper
				.find(".link")
				.at(0)
				.text()
		).toBe("Summary");
		expect(
			wrapper
				.find(".link")
				.at(1)
				.text()
		).toBe("ScoreBoard");
		expect(
			wrapper
				.find(".link")
				.at(2)
				.text()
		).toBe("Statistics");
	});
});
