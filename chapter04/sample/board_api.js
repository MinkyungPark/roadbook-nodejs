const morgan = require('morgan');
const url = require('url');
const uuidAPIkey = require('uuid-apikey');
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

/* 공통 미들웨어 */
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 테스트를 위한 게시글 데이터 */
let boardList = [
    {
        user_id: "minkyung",
        date: "2020-11-30",
        title: "오늘 회원가입 했습니다.",
        content: "안녕하세요. 우연하게 이 사이트를 발견하게 되어, 회원가입을 ......"
    },
    {
        user_id: "hyungjeong",
        date: "2020-12-31",
        title: "벌써 연말이네요.",
        content: "이번년도는 특히 코로나 때문인지 시간이 순식간에 지나갔습니다. 앞으로......"
    },
]

/* 테스트를 위한 API키 */
const key = {
    apiKey: '3CCHAAM-C0ZMC86-QB498ZA-QRDE88V',
    uuid: '1b19152a-603f-4620-bac8-947dbe1ae423'
};


/* 라우팅 설정 */
app.get('/', (req, res) => {
    res.send('This is api.js');
});

app.get('/board/:apikey/:type', (req, res) => {
    let { type, apikey } = req.params;
    const queryData = url.parse(req.url, true).query;

    if (uuidAPIkey.isAPIKey(apikey) && uuidAPIkey.check(apikey, key.uuid)) {
        if (type === 'search') { // 키워드로 게시글 검색  
            const keyword = queryData.keyword;
            const result = boardList.filter(function (e) {
                return e.title.includes(keyword)
            })
            res.send(result);
        }
        else if (type === 'user') { // 닉네임으로 게시글 검색  
            const user_id = queryData.user_id;
            const result = boardList.filter(function (e) {
                return e.user_id === user_id;
            });
            res.send(result);
        }
        else if (type === 'date') { // 날짜로 게시글 검색  
            const year = queryData.year;
            const month = queryData.month;
            const result = boardList.filter(function (e) {
                if (!month) {
                    return e.date.split('-')[0] === year
                } else {
                    return e.date.split('-')[0] === year && e.date.split('-')[1] === month;
                }
            });
            res.send(result);
        }
        else {
            res.send('Wrong URL')
        }
    } else {
        res.send('Wrong API Key');
    }
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});
