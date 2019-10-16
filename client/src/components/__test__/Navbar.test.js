import React from 'react'
import { shallow, mount } from 'enzyme'
import { Navbar } from '../common/Navbar'
import { MemoryRouter, Route } from 'react-router-dom'

let handleSearchInputChange = jest.fn()
const navbar = jest.fn()

const wrapper = shallow(<Navbar navbar={navbar} />)

describe('test for the text, input, css properties and icons on the navbar', () => {
  it('should have text brand CricketAlpha, matches, teams, players, stats', () => {
    // checks for no. of link present on navbar
    expect(wrapper.find('.link').length).toBe(6)

    // checks for the links text
    expect(
      wrapper
        .find('.link')
        .at(1)
        .text()
    ).toBe('Matches')
    expect(
      wrapper
        .find('.link')
        .at(2)
        .text()
    ).toBe('Teams')
    expect(
      wrapper
        .find('.link')
        .at(3)
        .text()
    ).toBe('Players')
    expect(
      wrapper
        .find('.link')
        .at(4)
        .text()
    ).toBe('Stats')

    // checks for the nav brand text
    expect(wrapper.find('.nav-brand').text()).toBe('CricketAlpha')

    // checks for the search input field
    expect(wrapper.find('input').length).toBe(1)

    // checks placeholder for the input field
    expect(wrapper.find('input').prop('placeholder')).toBe(
      'Search for Team or Player'
    )

    // checks for the input vale to be same as state while inserting text
    const e = {
      target: {
        name: 'searchInput',
        value: 'virat'
      }
    }
    wrapper.instance().handleSearchInputChange(e)
    expect(wrapper.state().searchInput).toBe(e.target.value)
  })

  // testing for images
  expect(logo.find('img').prop('src')).toEqual(logoImage)
})

// describe("test for checking the link component", () => {
// 	test("for the link to redirect on click", () => {
// 		const linkWrapper = shallow(
// 			<MemoryRouter>
// 				<Navbar />
// 				<Route
// 					path="*"
// 					render={({ history, location }) => {
// 						history = history;
// 						location = location;
// 						return null;
// 					}}
// 				/>
// 			</MemoryRouter>
// 		);
// 		// expect(linkWrapper.contains(<Link></Link>)).to.equal(true);
// 		linkWrapper
// 			.find("li")
// 			.at(2)
// 			.simulate("click");
// 		expect(location.pathname).toBe("/matches");
// 	});
// });
