var fs = require("fs");
var data = 'Hello I am again writing in file abc.txt';

//Creating a wtiable stream 
var writerstream = fs.createWriteStream('abc.txt');
//Set the encoding to UTF8 and write the data 

writerstream.write(data ,'UTF8');
//Mark the end of the file
writerstream.end();

//Handle stream event --> finish , and error

writerstream.on('finish',function(){
    console.log("Succesfully completed the writing task");
});

//For appending the data
var data2 = '  Hello I am appending the data';

var appendstream = fs.createWriteStream('abc.txt' , {flags: 'a'});
appendstream.write(data2 ,'UTF8');
appendstream.end();

appendstream.on('finish',function(){
    console.log("Succesfully completed the appending task");
});


