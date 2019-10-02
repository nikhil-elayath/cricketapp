import React from "react";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { getNews } from "../../actions/Home";
import { getRanks } from "../../actions/Teams";

import { Home } from "../Home";

// const home = jest.fn();
// const getNews = jest.fn();
const home = [];
const ranks = [];

const wrapper = shallow(
	<Home
		getNews={getNews}
		getRanks={getRanks}
		home={home}
		ranks={ranks}

		// singlePlayer={singlePlayer}
		// match={{ isExact: true, params: { path: "/", url: "/" } }}
	/>
);
describe("Testing for home component", () => {
	it("should render the component", () => {
		// const wrapper = mount(<Home home={home} />);
		expect(wrapper).toMatchSnapshot();
	});

	it("should have 3 div tags with className as 'p-card'", () => {
		expect(wrapper.find(".p-card").length).toBe(3);
	});

	it("should hav 3 divs under p-card named as Test, T20 and ODI", () => {
		expect(
			wrapper
				.find(".p-card")
				.at(1)
				.text()
		).toBe("Test");
	});
});
