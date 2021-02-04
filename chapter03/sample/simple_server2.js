const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Node.js로 서버만들기</h1>');
    res.end('<p>3장 http모듈 공부중입니다.</p>')
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결 중 ..');
    });