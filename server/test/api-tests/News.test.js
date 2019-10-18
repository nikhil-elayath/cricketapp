const request = require('supertest')
const app = require('../../index')

describe('Test suite cases for News Api', () => {
  it('should return a status code of 200, the body should be an object, a message in the body, the data should be an array', done => {
    request(app)
      .get('/apis/News/newsbyid')
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.body).toEqual(expect.any(Object))
        expect(res.body.data).toEqual(expect.any(Array))
        expect(res.body.message).toBe('Retrieved all players')
        done()
      })
  })
})
