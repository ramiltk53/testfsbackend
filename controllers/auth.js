const AuthError = require("../errors/AuthError");
const jwt = require('jsonwebtoken');
const { User } = require("../models/users");

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

const init = async () => {
    const arr = [
        { login: "john", password: "123", name: "John Snow" },
        { login: "pink", password: "qwerty", name: "Pink Floyd" },
        { login: "tom", password: "admin", name: "Tom Cruise" },
    ]

    await User.bulkCreate(arr, {
        updateOnDuplicate: ["name"]
    })
};

module.exports = {
    login,
    init
};