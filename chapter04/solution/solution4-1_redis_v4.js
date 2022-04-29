/* redis 모듈 버전 v4 일 때 */
const morgan = require('morgan');
const request = require('request');
const express = require('express');
const app = express();

/******* 레디스 모듈 추가 *******/
const redis = require('redis');

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* 라우팅 설정 */
app.get('/naver/news', async (req, res) => {
    await (async () => {
        /******* 레디스 연결 *******/
        const client = redis.createClient(6379, '127.0.0.1');
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        
        const cachedItems = await client.lRange('naverNewsItems', 0, -1);
       
        /******* 데이터가 캐시되어 있을 경우 레디스에서 바로 로드 *******/
        if (cachedItems.length) {
            res.send(` 데이터가 캐시에 있습니다. <br> ${cachedItems}`);
        
        /******* 데이터가 캐시되어 있지 않을 경우 api call *******/
        } else {
            const client_id = '발급받은 client id';
            const client_secret = '발급받은 client secret';
            const api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI('코스피'); //encodeURI(req.query.query);
            const option = {
            };
            const options = {
                url: api_url,
                qs: option,
                headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret },
            };
    
            request.get(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let newsItem = JSON.parse(body).items; // items - title, link, description, pubDate
                    const newsJson = {
                        title: [],
                        link: [],
                        description: [],
                        pubDate: []
                    }
    
                    for (let i = 0; i < newsItem.length; i++) {
                        newsJson.title.push(newsItem[i].title.replace(/(<([^>]+)>)|&quot;/ig, ""));
                        newsJson.link.push(newsItem[i].link);
                        newsJson.description.push(newsItem[i].description.replace(/(<([^>]+)>)|&quot;/ig, ""));
                        newsJson.pubDate.push(newsItem[i].pubDate);
                    }
                    
                    /******* api call 결과 redis에 저장 *******/
                    const newsItems = [newsJson.title, newsJson.link, newsJson.description, newsJson.pubDate]
                    newsItems.forEach((val) => {
                        client.rPush('naverNewsItems', val); // redis에 저장
                    });
                    client.expire('naverNewsItems', 60 * 60);
                    res.send(`캐시된 데이터가 없습니다. 새로고침을 해주세요.`);
                } else {
                    res.status(response.statusCode).end();
                    console.log('error = ' + response.statusCode);
                }
            });
        }
    })();
});

/* 서버와 포트 연결.. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});
