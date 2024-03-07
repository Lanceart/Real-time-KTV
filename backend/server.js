// 服务端代码
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000", // 允许来自此源的连接
        methods: ["GET", "POST"] // 允许的HTTP方法
      }
});

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('audioMessage', (audioData) => {
    // 广播音频数据给其他所有客户端
    socket.broadcast.emit('audioMessage', audioData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(8080, () => {
  console.log('Listening on *:8080');
});
