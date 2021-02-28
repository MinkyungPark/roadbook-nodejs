const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        "People" : [
            { "name" : "Cho-rong" },
            { "name" : "Seul-gi" },
            { "name" : "Jin-kyung" },
            { "name" : "Hyun-jeong" },
            { "name" : "Ah-reum" }
        ]
    });
});

app.listen(app.get('port'), () => {  
    console.log(app.get('port'),'번 포트에서 서버 실행 중..')
});