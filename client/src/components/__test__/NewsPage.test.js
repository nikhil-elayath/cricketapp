import React from 'react'
import { shallow, mount } from 'enzyme'
import { NewsPage } from '../NewsPage'

const newspage = jest.fn()
// creating mock fuctions of actions
const getNews = jest.fn()
const getNewsById = jest.fn()

// creating a dummy data that will be used to check the mapping functionality
// news is the reducer which will recieve the actual data but for testing purpose we are passing dummy data and testing wheter that will be mapped properly or not.
const news = [
  {
    news_id: 1,
    news_content: 'news content',
    news_title: 'this is title',
    news_date: '12-12-12'
  }
]
let home = [
  {
    news_id: 1,
    news_content: 'Recent news content',
    news_title: 'Recent news title',
    news_date: '12-12-12'
  }
]

const wrapper = shallow(
  <NewsPage
    // news reducer which contains dummy data
    news={news}
    history={[]}
    // home reducer which contains dummy data
    home={home}
    // for props function
    getNews={getNews}
    getNewsById={getNewsById}
    // passing id in parameters
    match={{ params: { id: 1 } }}
  />
)

describe('Testing of NewsPage Component', () => {
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  // testing for mapped functions by creating a dummy mapped value above and checking whether the exact text is being mapped or not.
  it('News title should be shown', () => {
    expect(wrapper.find('#newspage-news-title').text()).toBe('this is title')
  })
  it('News content should be present', () => {
    expect(wrapper.find('#news-content').text()).toBe('news content ')
  })
  it('News date should be present', () => {
    expect(wrapper.find('#news-date').text()).toBe('12-12-12 ')
  })
})

describe('Testing of Recent News section', () => {
  // testing for mapped functions by creating a dummy mapped value above and checking whether the exact text is being mapped or not.
  it('Recent news title should be shown', () => {
    expect(wrapper.find('#recent-news-title').text()).toBe('Recent news title')
  })
  it('Date of the recent news should be shown', () => {
    expect(wrapper.find('#recent-news-date').text()).toBe('12-12-12 ')
  })
})
