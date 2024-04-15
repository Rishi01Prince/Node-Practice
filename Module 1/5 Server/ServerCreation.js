var http = require('http');
const path = require('path');
const url = require('url');

function reqListener(req , res){
    console.log("server running !!");
    res.write("hello");
    process.exit();
    res.end("hello");
}


// const reqUrl = 'https://practice.geeksforgeeks.org/problems/51afa710a708c0681748445b509696dd588d5c40/1?page=1&company[]=JUSPAY&sortBy=submissions';



// // converting json to object
// const urlobject = url.parse(reqUrl , true);

const server = http.createServer(reqListener);
server.listen(8080);