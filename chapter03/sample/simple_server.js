const http = require('http');

http.createServer((req, res) => {
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결 중 ..')
    });

