const express = require('express');
const app = express();
// define config port

app.get('/' , (req, res) =>{
    res.status(200).json({message: "Home Page"});
})

app.get('/about' , (req, res) =>{
    res.status(200).json({message: "About"});
})


app.post('/' , (req, res) =>{
    res.status(200)
    .send("Hello Post Request💑")
})

app.listen(4000 ,'127.0.0.1', ()=>{
    console.log('listening on port '+ 4000);
});