import React from "react";
import { shallow } from "enzyme";
import MatchSecondaryNavbar from "../common/MatchSecondaryNavbar";

const match = [{
	team_winner: "India",
	won_by: "7 runs"
}]
const wrapper = shallow(<MatchSecondaryNavbar match={match} />);

describe("[MatchSecondaryNavbar] test", () => {

	it("renders the component for snapshot testing", () => {
		expect(wrapper).toMatchSnapshot();
	});
	// checks for no. of link present on navbar
	it("should have 3 options of summary, scoreboard, stats", () => {
		// checks for the links text
		expect(wrapper.find("#match-summary").text()).toBe("Summary");
		expect(wrapper.find("#match-scorecard").text()).toBe("ScoreBoard");
		expect(wrapper.find("#match-stats").text()).toBe("Statistics");
	})

	it("should have result text at the top of the box", () => {
		expect(wrapper.find("#match-result").text()).toBe("Result:  ");
		expect(wrapper.find("#match-winner-name-runs").text()).toBe("India ");
	});

	// it("should checks when summary is clicked", () => {

	// 	// expects page reload to be called on clicking summary button
	// 	newWrapper.find("#summary-click").simulate("click");
	// 	expect(toggleChangeMock).toHaveBeenCalled();
	// });
});
