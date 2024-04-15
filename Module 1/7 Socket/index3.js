// const express = require('express)();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/' , function(req , res){
    res.sendFile(__dirname + '/' + 'index6.html');
});

var clients = 0;
io.on('connection' , function(socket){
    clients++;
    socket.emit
    //Broadcast for everyone :-
    //io.sockets.emit('broadcast' , {description : clients + ' Clients Connected'});
    io.sockets.emit('newconnection' , {description : ' Hey Welocome !!'});

    // io.socket.emit('newconnection' , )
    
    socket.on('disconnect' , function(){
        clients--;
        io.sockets.emit('broadcast' , {description : clients + '  Clients Disconnected'});

    });
})
http.listen(3000 , function(){
    console.log("Port number 3000 is running now");
});


