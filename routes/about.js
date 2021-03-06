const express = require('express');

const aboutRouter = express.Router();

const {
    getAbout
} = require('../controllers/about');

aboutRouter.get('/about', getAbout);

module.exports = aboutRouter;
