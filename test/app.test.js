const request = require("supertest");

let app = require("./app.js");

describe('APIs', () => {
    it('Returns { message: "Test Test Test" } and 200th response when requested to "/about"', async () => {
        const res = await request(app).get('/about').set({
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ0MTkzNDg4LCJleHAiOjE2NDQ3OTgyODh9.SFmXTUpx44y1VLMVWsuimbjKl1eNrOQ3Egf0KgZv6GE"
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({ message: "Test Test Test" })
    })

    it('Returns 401 when requested to "/about" without token', async () => {
        const res = await request(app).get('/about')
        expect(res.statusCode).toEqual(401)
    })

    it('Returns fiels token and user', async () => {
        const res = await request(app).post('/login').send({
            login: 'john',
            password: '123'
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('token')
        expect(res.body).toHaveProperty('user')

    })
})