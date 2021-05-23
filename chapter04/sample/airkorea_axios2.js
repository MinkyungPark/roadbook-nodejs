const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 라우팅 설정 */
app.get('/airkorea/detail', async (req, res) => {
    const serviceKey = "";
    const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

    let parmas = encodeURI('serviceKey') + '=' + serviceKey;
    parmas += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
    parmas += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
    parmas += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
    parmas += '&' + encodeURI('returnType') + '=' + encodeURI('json')

    const url = airUrl + parmas;

    try {
        const result = await axios.get(url);
        const airItem = {
            "location": result.data.ArpltnInforInqireSvcVo["stationName"], // 지역
            "time": result.data.list[0]['dataTime'], // 시간대
            "pm10": result.data.list[0]['pm10Value'], // pm10 수치
            "pm25": result.data.list[0]['pm25Value'] // pm25 수치
        }
        const badAir = [];
        // pm10은 미세먼지 수치
        if (airItem.pm10 <= 30) {
            badAir.push("좋음😀");
        } else if (pm10 > 30 && pm10 <= 80) {
            badAir.push("보통😐");
        } else {
            badAir.push("나쁨😡");
        }

        //pm25는 초미세먼지 수치
        if (airItem.pm25 <= 15) {
            badAir.push("좋음😀");
        } else if (pm25 > 15 && pm10 <= 35) {
            badAir.push("보통😐");
        } else {
            badAir.push("나쁨😡");
        }

        res.send(`관측 지역: ${airItem.location} / 관측 시간: ${airItem.time} <br>
        미세먼지 ${badAir[0]} 초미세먼지 ${badAir[1]} 입니다.`);
    } catch (error) {
        console.log(error);
    }
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});
