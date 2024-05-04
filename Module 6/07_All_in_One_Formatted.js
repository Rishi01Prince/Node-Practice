const express = require('express');
const fs = require('fs');
const app = express();
// define config port

app.use(express.json());
const data = JSON.parse(fs.readFileSync(`${__dirname}/rishi.json`));



var getalldata = (req, res) => {
    res.status(200).json({
        status: 'success',
        length: data.length,
        data: data
    })
};


var getapaticulardata = (req, res) => {
    console.log(req.params);
    const val = req.params.id;
    const ele = data.filter(x => x.age == val);
    res.status(200).send({
        "msg": "Welcome to Parama!",
        "status": "OK",
        "data": {
            "tour": ele
        }
    });
}

var postdata = (req, res) => {
    const obj = req.body;
    const x = Object.assign(obj);

    data.push(obj);

    fs.writeFile(`${__dirname}/rishi.json`, JSON.stringify(data), err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Data added');
        }
    });
    res.status(200).send(data);
}

var update = (req, res) => {
    console.log(req.params);
    const val = req.params.id;
    const name = req.body.Name;
    // console.log(tours);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        if (data[i]["age"] === val) {
            data[i]["name"] = name;
            console.log(data[i]["name"]);
        }
    }

    fs.writeFile(`${__dirname}/rishi.json`, JSON.stringify(data), err => {
        if (err) throw err;
        console.log('Data written to file');
    });

    const ele = data.filter(x => x["age"] === val);
    res.status(200).send({
        "msg": "Updated Value!",
        "status": "OK",
        "data": ele
    });
}

var deletedata = (req, res) => {
    console.log(req.body);
    for (let i = 0; i < data.length; i++) {
        if (data[i].age == req.params.id) {
            data.splice(i, 1);
        }
    }

    fs.writeFile(`${__dirname}/rishi.json`, JSON.stringify(data), err => {
        if (err) throw err;
        console.log(req.params.id + " deleted successfully");
    });

    res.status(200).send(data);

}

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the Ulimate Realm of Rishi " });
})


app.get('/rishi', getalldata);
app.post('/rishi', postdata);

app.get('/rishi/:id', getapaticulardata);
app.patch('/rishi/:id', update)
app.delete('/rishi/:id', deletedata);



app.listen(4000, '127.0.0.1', () => {
    console.log('listening on port ' + 4000);
});