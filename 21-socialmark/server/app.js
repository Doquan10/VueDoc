const socketio = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

const PORT = process.env.PORT || 1999;

const server = http.createServer(app);

const io = socketio(server, {
    cors : {
        origin:"*",
        methods:["GET","POST","OPTIONS"],
    },
});

server.listen(PORT, () => {
    io.on("connection", socket => {
        console.log(`sunucu ${PORT} üzerinde çalışmaktadır`);
        socket.emit("HelloWorld", "hi");

        //io.in(roomID).emit()  sadece belirli bir odaya veri göndermek
        socket.on("NEW_BOOKMARK_EVENT", data => {
            console.log("Mesaj Geldi", data);
            io.emit("NEW_BOOKMARK_ADDED");

        });
    });

});