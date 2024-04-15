//Asynchronous
var prompt = require('prompt');
//Function Call
prompt.start();

//Reading two properties from user i.e name & class
prompt.get(['Name' , 'class'], function(err , result){
    console.log('Command-line input recieved :');
    console.log('Name : ' +  result.Name);
    console.log('Class : ' +  result.class);
});