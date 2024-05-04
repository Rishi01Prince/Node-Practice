const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));


app.get('/' , (req, res) =>{
    res.status(200).send("Welcome to Doulo Dalus!");
    // res.status(200).json({message: "Home Page"});
})

// /:id? --> Optional parameter

app.get('/:id/:x' , (req, res) =>{
    console.log(req.params);
    res.status(200).send("Welcome to Parama!");
   
})
// /:id/:x --> It comes in param as json object {id :5 , x : 6}
// /:id --> Mandatory parameter
app.get('/:id' , (req, res) =>{
    console.log(req.params);
    // res.status(200).send("Welcome to sdfda!");

    const val = req.params.id;
    // const tour = tours.find(el => el.id === val);
    const ele = tours.filter(x => x["_id"] === val);
    res.status(200).send({
        "msg" : "Welcome to Parama!",
        "status" : "OK",
        "data" : {
            "tour" : ele
        }
    });

   
})




app.listen(8000 ,'127.0.0.1', (req, res) =>{
    console.log('listening on port '+ 8000);
})