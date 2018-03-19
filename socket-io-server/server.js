var express = require("express");
var sockio = require("socket.io");

var app = express();

// serve static files from the "public" directory
app.use(express.static('public'));

// start the app on port specified
var portNum = 8890;
var io = sockio.listen(app.listen(portNum), {log: true});
console.log("NodeJS SocketIO Server started on port " + portNum);

// listen for chat messages
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    if (msg.includes("/nick")) {
      console.log("Trying to set nickname");
    } else if (msg.includes("/think")) {
      console.log("Trying to think...");
    } else if (msg.includes("/oops")) {
      console.log("Trying to delete your last msg");
    } else {
      //io.emit('chat message', msg);
      // send chat message to everyone EXCEPT the sender
      // FIX: this is not working. It sends to everyone
      socket.broadcast.emit('chat message', msg);
    }
  });
});
