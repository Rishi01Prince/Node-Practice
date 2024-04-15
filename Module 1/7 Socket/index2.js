var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/' + 'index6.html');
});

var clients = 0;
io.on('connection', function(socket) {
    clients++;
    io.sockets.emit('newconnection', {description: 'Hey, welcome! There are currently ' + clients + ' clients connected.'});

    socket.on('disconnect', function() {
        clients--;
        io.sockets.emit('broadcast', {description: clients + ' clients disconnected.'});
    });
});

http.listen(4000, function() {
    console.log('Listening on port 4000...');
});
