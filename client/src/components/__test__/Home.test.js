import React from 'react'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { getNews } from "../../actions/Home";
// import { getRanks } from "../../actions/Teams";

import { Home } from '../Home'

// const home = jest.fn();
// const onClickOdi = jest.fn();
const getNews = jest.fn()
const getRanks = jest.fn()
const home = []
const ranks = []

const wrapper = shallow(
  <Home
    getNews={getNews}
    getRanks={getRanks}
    home={home}
    ranks={ranks}
    // onClickOdi={onClickOdi}

    // singlePlayer={singlePlayer}
    // match={{ isExact: true, params: { path: "/", url: "/" } }}
  />
)
describe('Testing for home component', () => {
  it('should render the component', () => {
    // const wrapper = mount(<Home home={home} />);
    expect(wrapper).toMatchSnapshot()
  })

  it('should display the two teams' , () => {
    
  })
  // it("should have 3 div tags with className as 'p-card'", () => {
  //   expect(wrapper.find(".p-card").length).toBe(3);
  // });

  // Made the component reuseable

  // it("should have 3 divs under p-card named as Test, T20 and ODI", () => {
  //   expect(
  //     wrapper
  //       .find(".p-card")
  //       .at(1)
  //       .text()
  //   ).toBe("ODI");
  // });
  // it("should hav 3 divs under p-card named as Test, T20 and ODI", () => {
  //   expect(
  //     wrapper
  //       .find(".p-card")
  //       .at(2)
  //       .text()
  //   ).toBe("T20");
  // });
  // it("should hav 3 divs under p-card named as Test, T20 and ODI", () => {
  //   expect(
  //     wrapper
  //       .find(".p-card")
  //       .at(0)
  //       .text()
  //   ).toBe("Test");
  // });

  // it("should have 3 divs under p-card named as Test, T20 and ODI", () => {
  //   expect(
  //     wrapper
  //       .find(".p-topteam")
  //       .at(0)
  //       .text()
  //   ).toBe("Most Wins");
  // });
  // it("should consists in total 12 div tags", () => {
  //   expect(wrapper.find("div").length).toBe(12);
  // });
})
