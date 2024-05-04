const express = require('express');
const app = express();
const mid = require('./10_2_MiddleWare');
app.use(express.json());

app.use('/rishi' , mid.rishi)
app.use('/prince' , mid.prince)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Ulimate Realm of Rishi " });
})


module.exports = app;
