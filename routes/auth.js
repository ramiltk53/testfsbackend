const express = require('express');

const aboutRouter = express.Router();

const {
    login
} = require('../controllers/auth');

aboutRouter.post('/login', login);

module.exports = aboutRouter;
