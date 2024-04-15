const express = require('express')
const app = express();

function logOrigionalUrl( req , res , next){
    console.log('Request Url  :' , req.origionalUrl);
    next();
}

function logmethod( req , res , next){
    console.log('Request Type  :' , req.method);
    next();
}

const logarr = [ logOrigionalUrl , logmethod];
app.use('/user/:id' , logarr , (req, res , next)=>{
    
    res.send('User Info'+ req.params.id);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});