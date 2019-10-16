import React from 'react'
import { shallow, mount } from 'enzyme'
import { NewsPage } from '../NewsPage'

const newspage = jest.fn()

const wrapper = shallow(<NewsPage newspage={newspage} />)

// describe("test for the text, input, css properties and icons on the navbar", () => {
