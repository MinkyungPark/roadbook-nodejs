const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws, req) => { // Connection Generate
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('New Client : ', ip);
        ws.on('message', (message) => { // 클라이언트로부터 메세지
            console.log(message);
        });
        ws.on('error', (err) => { // 에러처리
            console.error(err);
        });
        ws.on('close', () => { // 종료
            console.log('클라이언트 접속 해제', ip);
            clearInterval(ws.interval);
        });

        ws.interval = setInterval(() => { // 서버에서 메세지
            if (ws.readyState === ws.OPEN) {
                ws.send('Message From Server.');
            }
        }, 3000);
    });
};