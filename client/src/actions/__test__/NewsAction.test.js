import * as action from '../NewsAction'
import { GET_NEWS_ID } from '../Types'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('Testing Players action', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is Test with status code 200', () => {
    const responseOfApi = []
    // const id = 1
    let id = { id: '1' }
    moxios.stubRequest(
      'http://localhost:5000/apis/News/newsbyid/' + id,

      {
        status: 200,
        response: { data: responseOfApi }
      }
    )
    // console.log('response: ', response.data)
    const store = mockStore({}, {}, {})
    const expectedActions = [
      {
        type: GET_NEWS_ID,
        payload: responseOfApi
      }
    ]
    console.log('expected actions:', expectedActions)
    return store.dispatch(action.getNewsById(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create an action of type GET_ALL_BATSMAN and the payload should be same as the API response from the server when Match Type is Test with status code 200', () => {
    const responseOfApi = []
    // const id = 1
    let id = { id: '1' }
    moxios.stubRequest(
      'http://localhost:5000/apis/News/newsbyid/' + id,

      {
        status: 400,
        response: { data: responseOfApi }
      }
    )
    // console.log('response: ', response.data)
    const store = mockStore({}, {}, {})
    const expectedActions = []
    console.log('expected actions:', expectedActions)
    return store.dispatch(action.getNewsById(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
