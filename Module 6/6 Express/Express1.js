const express = require('express')
const app = express();
const filtre = require('./Middleware');
const route = express.Router();
// app.use(filtre);
// Instead of using app.use 
route.use(filtre)

app.get('/' , (req,res)=>{
    res.send("Welcome to home Page");
});

//To send Json file:-
//res.json({"harry" : 30});
app.get('/users' , (req,res)=>{
    res.send("Welcome to User Page");
});

//URL me give name ko print krna ho :-
route.get('/about' , (req,res)=>{
    res.send("Welcome to About Page");
});



app.use('/' , route);

app.listen(5000, () => {
    console.log('Example app listening on port 5000!')
});