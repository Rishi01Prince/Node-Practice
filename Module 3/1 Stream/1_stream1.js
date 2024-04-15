var fs = require("fs");
var data = '';

//Creating a readable stream 
var readerstream = fs.createReadStream('..\\ris.txt.txt');
//Set the encoding to UTF8
readerstream.setEncoding('UTF8');
readerstream.on('data',function(chunk){
    data+=chunk;
});

readerstream.on('end',function(chunk){
    console.log(data);
});

