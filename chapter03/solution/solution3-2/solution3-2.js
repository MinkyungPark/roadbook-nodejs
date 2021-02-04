const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('메인 페이지 입니다.');
});

app.get('/user/:id', (req, res) => {
    res.send(req.params.id + "님의 개인 페이지 입니다.");
});

app.listen(app.get('port'));