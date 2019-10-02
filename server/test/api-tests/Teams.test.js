const request = require("supertest");
const app = require("../../index");

var id = " ";

describe("Testing cricket alpha api", () => {
	it("For product,GET should return the status of 200, the body should be an object body.data should be an array and the body.msg should be correct.", done => {
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
});
