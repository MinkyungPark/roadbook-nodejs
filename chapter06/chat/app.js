const http = require("http");
const express = require("express");
const app = express();

const server = http.Server(app);
const io = require("socket.io")(server);
let users = [];

server.listen(8080, () => {
    console.log("8080포트에서 서버 실행 중...");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    let name = "";
    socket.on("has connected", (username) => { // 이벤트 : has connected
        name = username;
        users.push(username);
        io.emit("has connected", { username: username, usersList: users });
    });

    socket.on("has disconnected", () => { // 이벤트 : has disconnected
        users.splice(users.indexOf(name), 1);
        io.emit("has disconnected", { username: name, usersList: users });
    })

    socket.on("new message", (data) => { // 이벤트 : new message
        io.emit("new message", data); // 모든 소켓에 메세지를 보냄
    });
});

