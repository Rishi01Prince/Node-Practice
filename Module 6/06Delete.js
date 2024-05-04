const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
const ris = JSON.parse(fs.readFileSync(`${__dirname}/rishi.json`));


app.get('/' , (req, res) =>{
    res.status(200).send("Welcome to Doulo Dalus!");
})

app.delete('/:id' , (req, res) =>{
    console.log(req.body);
    for(let i = 0; i < ris.length; i++){
        if(ris[i].age == req.params.id){
            ris.splice(i, 1);
        }
    }

    fs.writeFile(`${__dirname}/rishi.json`, JSON.stringify(ris), err =>{
        if(err) throw err;
        console.log(req.params.id + " deleted successfully");
    })  ;
    
    res.status(200).send(ris);
   
});

app.post('/' , (req, res) =>{
    const obj = req.body;
    const x = Object.assign(obj);
    ris.push(obj);
    fs.writeFile(`${__dirname}/rishi.json`, JSON.stringify(ris), err =>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Data added');
        }
    });
    res.status(200).send(ris);
});




app.listen(8000 ,'127.0.0.1', (req, res) =>{
    console.log('listening on port '+ 8000);
})