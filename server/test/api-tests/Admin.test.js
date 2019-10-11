const request = require("supertest");
const app = require("../..");

const error = require("../../middleware/error");
let id;
let player_name;
let team_name;
describe("Testing ecommerce API", () => {
  //test  for all team
  it("should return a status code of 200, the body should be an object, a message in the body,  the data should be an array", done => {
    request(app)
      .get("/apis/admin/allteam")
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.data).toEqual(expect.any(Array));
        expect(res.body.message).toBe("Retrieved all players");
        done();
      });
  });
  //create player api test
  it("should return status of 200 and a mesage", done => {
    let data = {
      player_id: "1",
      player_name: "testtest",
      player_country: "testtest",
      batting_style: "testtest",
      bowling_style: "testtest",
      player_dob: "1997-05-18",
      player_role: "testtest",
      debut_odi_match: "testtest",
      debut_test_match: "testtest",
      debut_t20_match: "testtest",
      player_gender: "male"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/admin/player/new")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        id = response.body.data[0].player_id;
        // player_name = response.body.data[1].player_name;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Created 1 Player successfully");
        done();
      });
  });

  it("if url is wrong while creating player then it should return status of 404", done => {
    let data = {
      player_id: "1",
      player_name: "testtest",
      player_country: "testtest",
      batting_style: "testtest",
      bowling_style: "testtest",
      player_dob: "1997-05-18",
      player_role: "testtest",
      debut_odi_match: "testtest",
      debut_test_match: "testtest",
      debut_t20_match: "testtest",
      player_gender: "male"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/admin/player/")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].user_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.text).toBe("Please contact the admin");
        // expect(response.body.message).toBe(
        //   "Password update and otp verified successfully"
        // // );
        done();
      });
  });

  //create team test
  it("should return status of 200 and a mesage", done => {
    let data = {
      team_id: "1",
      team_name: "testtest"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/admin/team/new")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        id = response.body.data[0].team_id;
        // team_name = response.body.data[1].team_name;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Created 1 team successfully");
        done();
      });
  });
  it("if url is wrong while creating team then it should return status of 404", done => {
    let data = {
      team_id: "1",
      team_name: "testtest"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/apis/admin/team/")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].team_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.body.message).toBe("Created 1 team successfully");
        done();
      });
  });

  //test api for edit player
  it("should return status of 200 and a mesage", done => {
    let data = {
      // player_id: "1",
      player_name: "testtest",
      player_country: "testtest",
      batting_style: "testtest",
      bowling_style: "testtest",
      player_dob: "1997-05-18",
      player_role: "testtest",
      debut_odi_match: "testtest",
      debut_test_match: "testtest",
      debut_t20_match: "testtest",
      player_gender: "male"
    };
    let payload = JSON.stringify(data);
    request(app)
      .put("/apis/admin/editplayer/" + id)
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].player_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.successMessage).toBe(
          "Updated one player successfully"
        );
        done();
      });
  });

  it("if url is wrong while creating player then it should return status of 500", done => {
    let data = {
      player_id: "1",
      player_name: "testtest",
      player_country: "testtest",
      batting_style: "testtest",
      bowling_style: "testtest",
      player_dob: "1997-05-18",
      //   player_role: "testtest",
      debut_odi_match: "testtest",
      debut_test_match: "testtest",
      debut_t20_match: "testtest",
      player_gender: "male"
    };
    let payload = JSON.stringify(data);
    request(app)
      .put("/apis/admin/editplayer/" + id)
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].user_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.text).toBe("Please contact the admin");
        // expect(response.body.errorMessage).toBe(
        //   "Password update and otp verified successfully"
        // );
        done();
      });
  });

  //serach team apis test

  //   it("should return status of 200 and a mesage", done => {
  //     let data = {
  //       team_id: "1",
  //       team_name: "testtest"
  //     };
  //     let payload = JSON.stringify(data);
  //     request(app)
  //       .put("/apis/admin/search/" + team_name)
  //       .send(payload)
  //       .set("Content-type", "application/JSON")
  //       .then(response => {
  //         // console.log(response.body.data);
  //         // id = response.body.data[0].player_id;
  //         // console.log(response.body.data);
  //         expect(response.statusCode).toBe(200);
  //         expect(response.body).toEqual(expect.any(Object));
  //         expect(response.body.message).toBe(
  //           "Retrieved search info successfully"
  //         );
  //         done();
  //       });
  //   });

  it("if url is wrong while edit team then it should return status of 500", done => {
    let data = {
      team_name: "zz"
    };
    let payload = JSON.stringify(data);
    request(app)
      .put("/apis/admin/search/" + team_name)
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].user_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.text).toBe("Please contact the admin");
        // expect(response.body.errorMessage).toBe(
        //   "Password update and otp verified successfully"
        // );
        done();
      });
  });

  //edit team api test
  it("should return status of 200 and a mesage", done => {
    let data = {
      team_id: "1",
      team_name: "testtest"
    };
    let payload = JSON.stringify(data);
    request(app)
      .put("/apis/admin/editteam/" + id)
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].player_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.successMessage).toBe(
          "Updated one team successfully"
        );
        done();
      });
  });

  it("if url is wrong while edit team then it should return status of 500", done => {
    let data = {
      // team_name: "testtest"
    };
    let payload = JSON.stringify(data);
    request(app)
      .put("/apis/admin/editteam/" + id)
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        // console.log(response.body.data);
        // id = response.body.data[0].user_id;
        // console.log(response.body.data);
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.text).toBe("Please contact the admin");
        // expect(response.body.errorMessage).toBe(
        //   "Password update and otp verified successfully"
        // );
        done();
      });
  });

  //delete player api test
  it("should return status of 200 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/apis/admin/deleteteam/" + id)
      // .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.successMessage).toBe(
          "Deleted one team successfully"
        );
        done();
      });
  });
  it("should return status of 404 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/apis/admin/deleteteam/")
      // .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.body.message).toBe(
        //   "Cannot find user with the given id"
        // );
        done();
      });
  });

  //delete player api test
  it("should return status of 200 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/apis/admin/deleteplayer/" + id)
      // .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.successMessage).toBe(
          "Deleted one player successfully"
        );
        done();
      });
  });
  it("should return status of 404 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/apis/admin/deleteplayer/")
      // .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        // expect(response.body.message).toBe(
        //   "Cannot find user with the given id"
        // );
        done();
      });
  });
});
