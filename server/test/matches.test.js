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

    it("should Retrieve all matches date information", done => {
        request(app)
            .get("/api/matches/bydate/:date")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived all matches date ordered by date successfully!!"
                );
                done();
            });
    });

    it("should Retrieve specific match detail information", done => {
        request(app)
            .get("/api/matches/summary/:id")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived the specific match detail successfully!!"
                );
                done();
            });
    });

});