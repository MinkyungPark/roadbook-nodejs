const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () =>
    console.log('8080포트에서 서버 실행중'));  