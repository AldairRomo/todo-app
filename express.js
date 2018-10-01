
var express = require('express');
var app = express();

app.get('/Hello', function (req, res) {
    res.send('<b>WORLD</b>');
});

app.listen(3000, function () {
    console.log('HECHO');
});
