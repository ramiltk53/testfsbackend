const request = require("supertest");

let app = require("./app").app;

it('Returns { message: "Test Test Test" } and 200th response when requested to "/"', function (done) {
    request(app).get("/").expect({ message: "Test Test Test" }).end(done);
});