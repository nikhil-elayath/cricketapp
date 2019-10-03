const request = require("supertest");
const app = require("../..");
const random = global.random;
const error = require("../../middleware/error");

let id;

describe("Testing ecommerce API", () => {
  //register
  it("should return status of 200 and a mesage", done => {
    let data = {
      user_name: "Test test",
      isadmin: false,
      user_email: "test@test.com",
      user_password: "555d2"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/api/cricketalpha/user/new")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        console.log(response.body.data);
        id = response.body.data[0].user_id;
        console.log(response.body.data);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Created 1 user successfully");
        done();
      });
  });
  it("if any credential is missing while register then it should return status of 400 and a mesage", done => {
    let data = {
      user_name: "Test test",
      isadmin: false,
      user_email: "test@test.com"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/api/cricketalpha/user/new")
      .send(payload)
      .set("Content-type", "application/JSON")
      .then(response => {
        console.log(response.body.data);
        // id = response.body.data[0].user_id;
        console.log(response.body.data);
        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.text).toBe("Please contact the admin");
        done();
      });
  });

  //Reset Password

  it("should return status of 200 and a message", done => {
    let data = {
      user_email: "test@gmail.com",
      user_password: "555d2",
      otp: random
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/api/cricketalpha/user/verify_otp")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe(
          "Password update and otp verified successfully"
        );
        done();
      });
  });

  //login

<<<<<<< HEAD
  it("should return status of 200 and a message", done => {
    let data = {
      user_email: "test@test.com",
      user_password: "555d2"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/api/cricketalpha/user/login")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Login Successfull!");
        done();
      });
  });
  it("should return status of 200 and a message", done => {
    let data = {
      user_email: "test@test.com",
      user_password: "52"
    };
    let payload = JSON.stringify(data);
    request(app)
      .post("/api/cricketalpha/user/login")
      .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Invalid Details");
        done();
      });
  });
  //delete
  it("should return status of 200 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/api/cricketalpha/user/delete/" + id)
      // .send(payload)
      .set("Content-type", "application/json")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.message).toBe("Deleted 1 user info successfully");
        done();
      });
  });
  it("should return status of 200 and a message", done => {
    // let payload = JSON.stringify(id);
    request(app)
      .delete("/api/cricketalpha/user/delete/")
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
=======
	it("should return status of 200 and a message", done => {
		let data = {
			user_email: "test@test.com",
			user_password: "555d2"
		};
		let payload = JSON.stringify(data);
		request(app)
			.post("/api/cricketalpha/user/login")
			.send(payload)
			.set("Content-type", "application/json")
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.body).toEqual(expect.any(Object));
				expect(response.body.message).toBe("Login Successfull!");
				done();
			});
	});
	it("should return status of 200 and a message", done => {
		let data = {
			user_email: "test@test.com",
			user_password: "52"
		};
		let payload = JSON.stringify(data);
		request(app)
			.post("/api/cricketalpha/user/login")
			.send(payload)
			.set("Content-type", "application/json")
			.then(response => {
				expect(response.statusCode).toBe(404);
				expect(response.body).toEqual(expect.any(Object));
				expect(response.body.message).toBe("Invalid Details");
				done();
			});
	});
	//delete
	it("should return status of 200 and a message", done => {
		// let payload = JSON.stringify(id);
		request(app)
			.delete("/api/cricketalpha/user/delete/" + id)
			// .send(payload)
			.set("Content-type", "application/json")
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.body).toEqual(expect.any(Object));
				expect(response.body.message).toBe(
					"Deleted 1 user info successfully"
				);
				done();
			});
	});
	it("should return status of 404 and a message", done => {
		// let payload = JSON.stringify(id);
		request(app)
			.delete("/api/cricketalpha/user/delete/")
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
>>>>>>> 92b8d189c675ddbbf8942f5d37bdf70da20fa10e
});
