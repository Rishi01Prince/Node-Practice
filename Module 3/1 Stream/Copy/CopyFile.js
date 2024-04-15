var fs = require('fs');
//Copying the content 

            //(which you want to copy , destination where u want to copy)
fs.copyFile('test.txt' , 'test1.txt' , function (err){
    console.log('data copied');
})

//Syschronous 

