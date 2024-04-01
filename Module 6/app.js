const express = require('express');
const app = express();
// define config port

app.get('/' , (req, res) =>{
    res.json({message: 'Hello World'}).status(200);
})

app.listen(4000 ,'127.0.0.1', ()=>{
    console.log('listening on port '+4000);
});