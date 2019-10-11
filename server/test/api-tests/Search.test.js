const request = require("supertest");
const app = require("../../../index");

describe("Testing Search API", () => {
	it("checks for the post api call and returns status code of 200 and array of object", done => {
		let data = {
			user_search: "virat"
		};
		let payload = JSON.stringify(data);
		request(app)
			.post("/api/search/all")
			.send(payload)
			.set("Content-type", "application/json")
			.then(response => {
				expect(response.statusCode).toBe(200);
				expect(response.body).toEqual(expect.any(Object));
				expect(response.body.message).toBe(
					"Search result retrieved successfully"
				);
				done();
			});
	});
});
