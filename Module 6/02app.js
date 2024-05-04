const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

const tours = fs.readFileSync(`${__dirname}/tours.json`, 'utf-8');

app.get('/' , (req, res) =>{
    res.status(200).send("Welcome to Doulo Dalus!");
    // res.status(200).json({message: "Home Page"});
})

app.get('/api' , (req, res) =>{
    res.status(200).json({
        status : 'success',
        length : data.length ,
        data : data
        
    });
})


app.listen(8000 ,'127.0.0.1', (req, res) =>{
    console.log('listening on port '+ 8000);
})