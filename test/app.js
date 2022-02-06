const express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).send({ message: "Test Test Test" });
});

app.listen(3000);

module.exports.app = app;