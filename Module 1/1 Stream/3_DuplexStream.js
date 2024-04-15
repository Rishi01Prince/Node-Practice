var fs = require("fs");
var data = 'This is the duplex file data ';

//Creating a Duplex stream 
var duplexstream = fs.createDuplexStream('dupfile.txt');


duplexstream.write(data ,'UTF8');
duplexstream.end();

duplexstream.on('finish',function(){
    console.log("Succesfully completed the writing task");
});
var readed = '';
duplexstream.on('data'  , function(chunk){
    readed+=chunk;
});


duplexstream.on('end' , function(){
    console.log(readed);
});






