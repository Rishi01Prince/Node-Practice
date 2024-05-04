const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log(req.body);
    console.log('Hello from the middleware ');
    next();
})

const rishi = express.Router();
const prince = express.Router();
const rishimethods = require('./10_3_Rishi_Router');
const princemethods = require('./10_3_Prince_Router');



// app.use('/rishi' , rishi);
// app.use('/prince' , prince);
rishi.param('id', (req, res, next, val) => {
    console.log(`Rishi id is : ${val}`);

    next();
})

prince.param('id', (req, res, next, val) => {
    console.log(`Prince id is : ${val}`);

    next();
})

rishi
    .route('/')
    .get(rishimethods.getalldata)
    .post(rishimethods.postdata);

rishi
    .route('/:id')
    .get(rishimethods.getapaticulardata)
    .patch(rishimethods.update)
    .delete(rishimethods.deletedata);


prince
    .route('/')
    .get(princemethods.getalldata)
    .post(princemethods.postdata);

prince
    .route('/:id')
    .get(princemethods.getapaticulardata)
    .patch(princemethods.update)
    .delete(princemethods.deletedata);


exports.rishi = rishi;
exports.prince = prince;