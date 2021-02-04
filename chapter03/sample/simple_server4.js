const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.end()
    }
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결')
    });