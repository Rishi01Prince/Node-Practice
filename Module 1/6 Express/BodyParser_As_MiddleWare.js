//Installation :- npm install --save body-parser


const express = require('express')
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))


app.get('/' , (req,res)=>{
    res.send("<form action = '/saveform' method = 'post'><input type = 'text' name= 'Name' /> <br><input type = 'email' name ='Email'  /> <br><button type = 'submit'>Submit</button></form>");
});

app.post('/saveform' , (req , res , next)=>{
    // res.send();
    res.send("Form Data :- " + req.body);
})

app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
});