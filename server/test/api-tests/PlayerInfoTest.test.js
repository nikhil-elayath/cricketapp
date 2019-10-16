const request = require("supertest");
const app = require("../../index");

describe("testing player api's", () => {
  it("should return a status code of 200, the body should be an object, a message in the body,  the data should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/allPlayer")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("Retrieved news by id");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return a single player data with its id and should be an array", done => {
    let player_id = 3;
    request(app)
      .get("/apis/PlayerInfo/singlePlayer/" + player_id)
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("player retrieved succefully");
        done();
      });
  });

  // it("should return a status code of 400, the body should be an object, a message in the body", done => {
  //   let player_id = 3000;
  //   request(app)
  //     .get("/apis/PlayerInfo/singlePlayer/" + player_id)
  //     .then(res => {
  //       expect(res.statusCode).toBe(400);
  //       expect(res.body).toEqual(expect.any(Object));
  //       expect(res.body.statusMessage).toBe(
  //         "ERROR!Bad Request cannot retrieve all players"
  //       );
  //       done();
  //     });
  // });

  // it("should return a status code of 200, the body should be an object, a message, return all batsman when match type is ODI data and should be an array", done => {
  //   let data = { match_type: "ODI" };
  //   let payload = JSON.stringify(data);
  //   request(app)
  //     .post("/apis/PlayerInfo/TopBatsman")
  //     .send(payload)
  //     .set("Content-type", "application/json")
  //     .then(res => {
  //       expect(res.status).toBe(200);
  //       expect(res.body).toEqual(expect.any(Object));
  //       expect(res.body.data).toEqual(expect.any(Array));
  //       expect(res.body.message).toBe("All top Batsman retrieved");
  //       done();
  //     });
  // });

  it("should return a status code of 200, the body should be an object, a message, return all batsman when match type is Test data and should be an array", done => {
    let data = { match_type: "Test" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBatsman")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("All top Batsman retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all batsman when match type is T20 data and should be an array", done => {
    let data = { match_type: "T20" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBatsman")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("All top Batsman retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all batsman when match type is neither ODI,Test nor T20 data and should be an array", done => {
    let data = { match_type: "ODIsad" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBatsman")
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

  it("should return a status code of 200, the body should be an object, a message, return all bowlers when match type is ODI data and should be an array", done => {
    let data = { match_type: "ODI" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all bowlers when match type is Test data and should be an array", done => {
    let data = { match_type: "Test" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all bowlers when match type is T20 data and should be an array", done => {
    let data = { match_type: "T20" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("All top bowlers retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, a message, return all bowlers when match type is neither ODI,Test nor T20 data and should be an array", done => {
    let data = { match_type: "ODIsad" };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/PlayerInfo/TopBowlers")
      .send(payload)
      .set("Content-type", "application/json")
      .then(res => {
        expect(res.body.statusCode).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.statusMessage).toBe(
          "ERROR!Bad Request cannot retrieve bowlers"
        );
        done();
      });
  });

  //  ///////// BATSMAN STATS //////

  it("should return a status code of 200, the body should be an object, return batsman stats for his odi career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/ODI-Batsman-Stats/" + 265)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });

  // it("should return a status code of 400, the body should be an object, return an error message for odi matches", done => {
  //   request(app)
  //     .get("/apis/PlayerInfo/ODI-Batsman-Stats/" + 4800)
  //     .then(res => {
  //       expect(res.body.statusCode).toBe(400);
  //       // expect(res.body).toEqual(expect.any(Object));
  //       expect(res.body.statusMessage).toBe(
  //         "ERROR!Bad Request cannot retrieve the data"
  //       );
  //       done();
  //     });
  // });

  it("should return a status code of 200, the body should be an object, return batsman stats for his test career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/Test-Batsman-Stats/" + 265)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, return batsman stats for his t20 career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/T20-Batsman-Stats/" + 265)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });

  //////  //BOWLER STATS// /////////////

  it("should return a status code of 200, the body should be an object, return bowler stats for his t20 career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/T20-Bowler-Stats/" + 268)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });
  it("should return a status code of 200, the body should be an object, return bowler stats for his odi career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/ODIBowlerStats/" + 268)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });

  it("should return a status code of 200, the body should be an object, return bowler stats for his test career data and should be an array", done => {
    request(app)
      .get("/apis/PlayerInfo/Test-Bowler-Stats/" + 268)
      .then(res => {
        expect(res.body.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.message).toBe("Batsman stats retrieved");
        done();
      });
  });
});
