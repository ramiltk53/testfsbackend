const express = require('express');

const aboutRouter = express.Router();
const auth = require('../middlewares/auth');

const {
    getAbout
} = require('../controllers/about');

aboutRouter.get('/', auth, getAbout);

module.exports = aboutRouter;
