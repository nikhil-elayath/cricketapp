const request = require("supertest");
const app = require("../../index");

describe("Testing cricket alpha api", () => {
  it("For teams,GET should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct.", done => {
    request(app)
      .get("/cricketalpha/teams")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe(
          "Retrieved all the teams successfully!"
        );
        done();
      });
  });

  it("For teams,GET should return the status of 404 the body should be an object body.", done => {
    request(app)
      .get("/cricketalpha/team")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        done();
      });
  });

  it("For teams rankings,POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "Test"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/rankings")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe(
          "Retrieved all the teams successfully!"
        );
        done();
      });
  });

  it("For teams rankings,POST should return the status of 404, the body should be an object.", done => {
    let data = {
      match_type: "Test"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/ranking")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        done();
      });
  });

  it("For teams matches,GET should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let team_id = 3;
    request(app)
      .get("/cricketalpha/teams/match/" + team_id)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe(
          "Retrived 8 recent matches list successfully!!"
        );
        done();
      });
  });

  it("For teams matches,GET should return the status of 400, the body should be an object.", done => {
    let team_id = 3;
    request(app)
      .get("/cricketalpha/teams/matches/" + team_id)
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        done();
      });
  });
});
