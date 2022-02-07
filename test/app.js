const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { PORT = 3000 } = process.env;
const cors = require("cors")
const auth = require('../middlewares/auth');


const NotFoundError = require('../errors/NotFoundError');

const aboutRouter = require('../routes/about');
const authRouter = require('../routes/auth');

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use(authRouter)
app.use(auth)
app.use(aboutRouter)

app.use((req, res, next) => {
    next(new NotFoundError('Страница не существует'));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = err;
    res
        .status(statusCode)
        .send({
            message: statusCode === 500
                ? 'Ошибка на сервере'
                : message,
        });
    next();
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

module.exports = app