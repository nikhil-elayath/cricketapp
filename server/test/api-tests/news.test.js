const request = require("supertest");

const app = require("../../index");

describe("Testing news api for news brief", () => {
	it("should return a status code of 200, the body should have an object, the data should be an array, a message in the body", done => {
		request(app)
			.get("/api/news/allBrief")
			.then(response => {
				expect(response.body).toEqual(expect.any(Object));
				expect(response.statusCode).toBe(200);
				expect(response.body.newsBrief).toEqual(expect.any(Array));
				expect(response.body.message).toBe(
					"All news brief retrieved successfully"
				);
				done();
			});
	});
});
