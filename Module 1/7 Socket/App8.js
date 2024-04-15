var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);//create an new instance of socket.io and attach to http server
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index8.html');
})
var roomno = 1;
var user = 0;
io.on('connection', function (socket) {
    if (user > 3) {
        roomno++;
        user = 0;
    }
    socket.join("room " + roomno);
    io.sockets.in("room " + roomno).emit('connectToRoom', "you are connected to a room no. " + roomno);
    user++;
})
http.listen(8000, function () {
    console.log("listening on localhost : 8000");
})