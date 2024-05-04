const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));


app.get('/' , (req, res) =>{
    res.status(200).send("Welcome to Doulo Dalus!");
    // res.status(200).json({message: "Home Page"});
})

app.post('/addtours' , (req, res) =>{
    console.log(req.body);
    // console.log(tours)
    const newId = tours[tours.length - 1]["_id"] + 1;
    console.log(tours.length);
    console.log(newId);

    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/tours.json`, JSON.stringify(tours), err =>{
        res.status(201).json({
            status : 'success',
            data : {
                tour : tours
            }
        });
    });
})

app.listen(8000 ,'127.0.0.1', (req, res) =>{
    console.log('listening on port '+ 8000);
})