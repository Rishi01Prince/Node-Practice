var fs = require("fs");

//Create a redable Stram
var reader = fs.createReadStream('input.txt');

//Create a writable stream 
var writer = fs.createWriteStream('writingthepip.txt');

writer.on('pipe' , ()=>{
    console.log('Something is piping into the writer.');
});

reader.pipe(writer);