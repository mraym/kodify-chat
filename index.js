var express = require("express");
var sockio = require("socket.io");

var app = express();

// serve static files from the "public" directory
app.use(express.static('public'));

// start the app on port specified
var portNum = 3000;
var io = sockio.listen(app.listen(portNum), {log: true});
console.log("NodeJS SocketIO Server started on port " + portNum);

// listend for chat messages
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    if (msg.includes("/nick")) {
      console.log("Trying to set nickname");
    } else {
      io.emit('chat message', msg);
    }
  });
});
