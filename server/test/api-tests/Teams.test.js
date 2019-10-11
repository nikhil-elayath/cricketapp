const request = require("supertest");
const app = require("../../index");

describe("Testing cricket alpha api", () => {
  it("For teams,POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct.", done => {
    let data = {
      match_type: "Test"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams")
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

  it("For teams,POST should return the status of 404 the body should be an object body.", done => {
    request(app)
      .post("/cricketalpha/team")
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

  it("For teams top batsmen for match_type Test, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "Test",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbatsmen")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top Batsman retrieved");
        done();
      });
  });

  it("For teams top batsmen for match_type ODI, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "ODI",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbatsmen")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top Batsman retrieved");
        done();
      });
  });

  it("For teams top batsmen for match_type T20, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "T20",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbatsmen")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top Batsman retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all batsman when match type is neither ODI,Test nor T20 data and should be an array", done => {
    let data = {
      match_type: "Testmatch",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbatsmen")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.statusMessage).toBe(
          "ERROR!Bad Request cannot retrieve batsman"
        );
        done();
      });
  });

  it("For teams top batsmen,POST should return the status of 404, the body should be an object.", done => {
    let data = {
      match_type: "Test",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbatsman")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        done();
      });
  });

  it("For teams top bowlers for match_type Test, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "Test",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("For teams top bowlers for match_type ODI, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "ODI",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("For teams top bowlers for match_type T20, POST should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct", done => {
    let data = {
      match_type: "T20",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.data).toEqual(expect.any(Array));
        expect(response.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all bowlers when match type is neither ODI,Test nor T20 data and should be an array", done => {
    let data = {
      match_type: "Testmatch",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.statusMessage).toBe(
          "ERROR!Bad Request cannot retrieve bowlers"
        );
        done();
      });
  });

  it("For teams top bowlers,POST should return the status of 404, the body should be an object.", done => {
    let data = {
      match_type: "Test",
      player_country: "India"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/cricketalpha/teams/topbowler")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        done();
      });
  });
});
