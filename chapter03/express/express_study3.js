const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const myLogger = function (req, res) {
    console.log('LOGGED');
};

app.use(myLogger);

app.listen(8080);  
