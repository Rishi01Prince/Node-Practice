const obj = {
    name : "Rishi",
    Rollno : 14 ,
    Specialization : "Full Stack Web Development"
}

const jsonobj = JSON.stringify(obj);
// console.log(jsonobj);


// converting json to object
const obj2 = JSON.parse(jsonobj);
// console.log(obj2);
var fs = require("fs");

//Writing the data in a json file
var writerstream = fs.createWriteStream('bJsonFile.json');
writerstream.write(jsonobj,);
writerstream.end();


var data = '';

var readerstream = fs.createReadStream('bJsonFile.json');
readerstream.on('data',function(chunk){
    data+=chunk;
});

readerstream.on('end',function(chunk){
    console.log(data);
});








