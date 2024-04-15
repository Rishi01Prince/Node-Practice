// const express = require('express)();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/' , function(req , res){
    res.sendFile(__dirname + '/' + 'index7.html');
});

var nsp = io.of('/my-namespace');
nsp.on('connection' , function(socket){
    clients++;
    console.log('someone connected');
    nsp.emit('hi' , 'Hello Everyone!');
});
http.listen(3000 , function(){
    console.log("Port number 3000 is running now");
});


