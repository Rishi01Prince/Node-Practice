const fs = require('fs');

//Synchrounous Or Blocking Reading 
const data = fs.readFileSync(__dirname + "/Read_Me.txt" , 'utf-8');
// console.log(data);
const val = "This is the Extra Data" ;

fs.writeFileSync(__dirname +"/Synchronous_Writing.txt" , `${data} \n ${val}` );