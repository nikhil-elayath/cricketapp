import React from "react";
import { shallow, mount } from "enzyme";

import { Home } from "../Home";

const getNews = jest.fn();

const getRecentMatches = jest.fn();

const recent_matches = [
  {
    match_id: 1,
    match_type: "Recent news content",
    teamOne: "India",
    teamTwo: "Pakistan",
    teamOneScore: 120,
    teamTwoScore: 150,
    team_winner: "Pakistan",
    match_date: "12-12-12",
  },
];
const home = [
  {
    news_id: 1,
    news_content: "news content",
    news_title: "this is title",
    news_date: "12-12-12",
  },
];

const wrapper = shallow(
  <Home
    getNews={getNews}
    // getRanks={getRanks}
    home={home}
    // news={news}
    getRecentMatches={getRecentMatches}
    recent_matches={recent_matches}
  />
);
describe("Testing for home component", () => {
  it("should render the component", () => {
    // const wrapper = mount(<Home home={home} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should display the news list", () => {
    expect(wrapper.find("#p-news").text()).toBe("this is title");
  });
  it("should display the news list", () => {
    expect(wrapper.find("#home-news-date").text()).toBe("12-12-12 ");
  });
  it("should display the recent matches title on the right side section", () => {
    expect(wrapper.find("#home-recent-matches-title").text()).toBe(
      "Recent Matches"
    );
  });
  it("should display the name of team one", () => {
    expect(wrapper.find("#home-recent-matches-teamOne").text()).toBe("India");
  });
  it("should display the score of the teamone", () => {
    expect(wrapper.find("#home-recent-matches-team-one-score").text()).toBe(
      "120/"
    );
  });

  it("should display the name of team one", () => {
    expect(wrapper.find("#home-recent-matches-teamTwo").text()).toBe(
      "Pakistan "
    );
  });

  it("should display the score of the teamtwo", () => {
    expect(wrapper.find("#home-recent-matches-team-two-score").text()).toBe(
      "150/  "
    );
  });

  it("should display the result of the match", () => {
    expect(wrapper.find("#home-recent-matches-team-winner").text()).toBe(
      "Pakistan  "
    );
  });
  it("should display the date of the match", () => {
    expect(wrapper.find("#home-recent-match-date").text()).toBe("12-12-12");
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
