const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const f = await fs.readFile('./fs_test.html');
        res.writeHead(200, { 'Content-Type': 'text.html; charset=utf-8' }); // 200이면 요청 성공
        res.end(f); // 요청 종료
    } catch (err) { // 에러 처리
        console.error(err); // 요청에 실패했을 경우 에러 출력
        res.writeHead(500, { 'Content-Type': 'text.html; charset=utf-8' }); // 500이면 서버에 오류 발생
        res.end(err.message); // 에러 메세지와 함게 요청 종료
    }
})
    .listen(8080, () => {
        console.log('8080포트에서 서버 연결 중 ..')
    });