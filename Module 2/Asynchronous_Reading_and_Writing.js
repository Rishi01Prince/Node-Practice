var fs = require('fs');

//Asynchronous Reading and Writing
//It is asynchronous Hence Call back Function is Required
 const x = fs.readFile( __dirname + "/Read_Me.txt" , 'utf-8' , (err,data)=>{
    if(err) throw err;
    fs.writeFile(__dirname + "/Asynchronous_Writing.txt" , data , 'utf-8' , err=>{
        console.log("Written Successfully");
    });
    console.log(data);

});
console.log(x);

/*The value of is shown undefined in the console because :- 
The value of x is not being printed because it is the result of an asynchronous operation, fs.readFile(). 
The console.log(x) statement is executed before the fs.readFile() operation is finished executing and 
before the callback function is called, so x is still undefined at the time console.log(x) is executed.
 To print the value of x, you need to move the console.log(x) statement inside the callback function, like this:

const fs = require('fs');

fs.readFile(__dirname + "/Read_Me.txt", 'utf-8', (err,data) => {
    if (err) {
        throw err;
    }
    console.log(data); // or do something with the data
}); */
