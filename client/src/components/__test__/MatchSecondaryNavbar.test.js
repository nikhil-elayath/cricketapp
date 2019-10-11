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

	it("should have one h2 header", () => {
		expect(wrapper.find("h2").length).toBe(1);
	});
	it("should have one div tag with 'Player of the match", () => {
		expect(wrapper.find(".short-summary-with-player-of-the-match span").text()).toBe("Player of the match");
	});
	it("should have one h2 content with 'Recent Matches' content", () => {
		expect(wrapper.find(".h2-recent-matches").text()).toBe("MS Dhoni");
	});
});
