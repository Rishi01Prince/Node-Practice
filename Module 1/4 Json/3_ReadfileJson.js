var fs = require("fs");
const { stringify } = require("querystring");

fs.readFile('aJsonFile.json' , (err,data) =>{
    if(err) throw err;

    let student = JSON.parse(data);

    console.log(JSON.stringify(student, null , 0));
    console.log(JSON.stringify(student, ['Rollno'] , 10));
    /*
        // stringify( object , particularobject part which you want to stringify 
        //  else do "null" for all parts of object to stringify , spacing that you want to see in
        //  your json string);
    */

})

