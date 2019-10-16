import { GET_NEWS_ID } from '../../actions/Types'
import NewsReducer from '../NewsReducer'

describe('Testing Player reducer', () => {
  it('should return  state object with news Details array equal to the payload in the action when the action type is GET_NEWS_ID(when the state is initial state)', () => {
    const action = {
      type: GET_NEWS_ID,
      payload: []
    }
    const returnedState = NewsReducer(undefined, action)
    expect(returnedState).toEqual({
      news: action.payload
    })
  })

  it('should return state object with player details array equal to the payload in the action when the action type is GET_PLAYERS(when state is not initial empty)', () => {
    const initialState = {
      // REDUCER
      news_details: [
        { news_id: '1' },
        { news_content: 'Right Handed Bat' },
        { news_title: 'news title' },
        { news_date: '12-12-12' }
      ]
    }

    const action = {
      type: GET_NEWS_ID,
      payload: [{}, {}, {}, {}]
    }

    const returnedState = NewsReducer(initialState, action)
    expect(returnedState).toEqual({
      news_details: action.payload
    })
  })
})
