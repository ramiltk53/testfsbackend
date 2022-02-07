const AuthError = require("../errors/AuthError");
const jwt = require('jsonwebtoken');
const { User }  = require("../models");

const login = async (req, res, next) => {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login } })

    if (!user || user.password !== password) {
        return next(new AuthError('Username or password is incorrect'));
    }

    const token = jwt.sign(
        { id: user.id },
        'some-secret-key',
        { expiresIn: '7d' },
    );

    res.send({ token, user: user.name })
};

module.exports = {
    login
};