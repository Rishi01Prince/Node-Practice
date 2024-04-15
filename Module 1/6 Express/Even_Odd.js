const express = require('express')
const app = express();
var fs = require("fs");
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))




app.get('/' , (req,res)=>{
    res.send("<form action = '/check' method = 'post'><h1>Plese give a number</h1><input type = 'text' name= 'Number' /><button type = 'submit'>Submit</button></form>");
});

app.post('/check' , (req , res , next)=>{
    // res.send();
    var num =Number( req.body.Number) ;
    fs.writeFile("abc.txt" , req.body.Number , (error)=>{
        console.log("Done");
    });

    
   
    if(num%2 == 0){
        
        res.send("The Given Number is Even");
    }
    else{
       
        res.send("The Given Number is Odd");

    }
    
    
})













app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
});