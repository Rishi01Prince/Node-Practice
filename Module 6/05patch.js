const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));


app.get('/' , (req, res) =>{
    res.status(200).send("Welcome to Doulo Dalus!");
    // res.status(200).json({message: "Home Page"});
})
 

app.patch('/updatetour/:id' , (req, res) =>{
    console.log(req.params);
    // res.status(200).send("Welcome to sdfda!");

    const val = req.params.id;
    const name = req.body.Name;
    // console.log(tours);
    for(let i = 0 ; i < tours.length ; i++){
        if(tours[i]["_id"] === val){
            tours[i]["name"] = name;
            // console.log(tours[i]);
            console.log(tours[i]["name"]);
        }
    }
    fs.writeFile(`${__dirname}/tours.json`, JSON.stringify(tours) , err=>{
        if (err) throw err;
        console.log('Data written to file');
    });
    
    const ele = tours.filter(x => x["_id"] === val);
    res.status(200).send({
        "msg" : "Updated Value!",
        "status" : "OK",
        "data" : {
            "tour" : ele
        }
    });

   
})




app.listen(8000 ,'127.0.0.1', (req, res) =>{
    console.log('listening on port '+ 8000);
})