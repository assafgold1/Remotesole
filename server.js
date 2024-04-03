const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { instrument } = require("@socket.io/admin-ui");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["https://admin.socket.io", "*"],
    credentials: true
  }
});

instrument(io, {
  auth: {
    type: "basic",
    username: "admin",
    password: "$2b$15$XVzWykOt0K/1tXC7aBsljOkp0OpBjP9Qzko5Td56O4pVe8Z6VFKJC" // "changeit" encrypted with bcrypt
  },
});

app.get('/', (req, res) => {
  res.send("uwu");
});

app.get("/remotecontrol", (req, res) => {
  res.sendFile(__dirname + "/remotecontrol.html");
})

io.on('connect', (socket) => {
  console.log('A client connected.');
  
  socket.on("command", (data) => {
    console.log(data.recipient)
    console.log("Received command from client:", data);
    // send command to recipient
    socket.to(data.recipient).emit("command", data);
  })

  socket.on('message', (message) => {
    console.log('Received message from client:', message);
  });

    socket.on('disconnect', () => {
    console.log('A client disconnect .');
  });
});

// socket.on('reconnect', () => { 
//   console.log('A client reconnect.');
// });

const PORT = process.env.PORT || 9999;
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});
