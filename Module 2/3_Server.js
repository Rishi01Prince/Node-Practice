const fs = require('fs');
const http = require('http');


const server = http.createServer(function(req, res) { 
    res.end("Server Created");
});

server.listen(8000 ,'127.0.0.1' , () =>{
    console.log("Server listening on port 8000");
})  
