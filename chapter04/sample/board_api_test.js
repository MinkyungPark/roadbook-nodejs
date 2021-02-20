const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();

app.set('port', 3000);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* axios 요청 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/board_api_test.html");
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});

