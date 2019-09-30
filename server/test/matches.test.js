const request = require("supertest");

const app = require("../index");

describe("Testing Matches APIs", () => {


    it("should Retrieve 8 matches information", done => {
        request(app)
            .get("/api/matches/recent")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived 8 recent matches list successfully!!"
                );
                done();
            });
    });

});