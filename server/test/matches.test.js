const request = require("supertest");
const app = require("../index");

describe("Testing Matches APIs", () => {

    it("should Retrieve matches information by date", done => {
        const date = '2008-08-20';
        request(app)
            .get("/api/matches/recent/" + date)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived matches list by date successfully!!"
                );
                done();
            });
    });

    it("should Retrieve all matches date information", done => {
        request(app)
            .get("/api/matches/bydate")
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
        const id = 2;
        request(app)
            .get("/api/matches/summary/" + id)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived the specific match detail successfully!!"
                );
                done();
            });
    });

    it("should Retrieve specific match scorecard information", done => {
        const id = 2;
        request(app)
            .get("/api/matches/scorecard/" + id)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual(expect.any(Object));
                expect(response.body.message).toBe(
                    "Retrived scorecard of the match successfully!!"
                );
                done();
            });
    });

});