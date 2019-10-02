const request = require("supertest");
const app = require("../../../index");

describe("Testing Home API", () => {
	it("Should return a status code of 200", done => {
		request(app)
			.get("/apis/home")
			.then(response => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
