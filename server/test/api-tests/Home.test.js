const request = require('supertest')
const app = require('../../index')

describe('Testing Home API', () => {
  it('Should return a status code of 200', done => {
    request(app)
      //   .get('/apis/Home/news')
      .get('/apis/news')
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
  it('Should return a status code of 200', done => {
    request(app)
      .get('/apis/recentMatches')
      .then(response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})
