var fs = require("fs");

//Create a redable Stram
var reader = fs.createReadStream('input.txt');

//Create a writable stream 
var writer = fs.createWriteStream('writingthepip.txt' , {flags:'a'} );

writer.on('unpipe' , ()=>{
    console.log('We are unpiping the pipe');
});

reader.pipe(writer);
reader.unpipe(writer)