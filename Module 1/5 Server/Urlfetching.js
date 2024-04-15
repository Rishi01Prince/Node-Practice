const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World. This is root directory.');
        res.end();
    }
    else if (req.url === '/emp') {
        res.write('Hello World. This is employee directory.');
        res.end();
    }
    else if (req.url === '/admin') {
        res.write('Hello World. This is admin directory.');
        res.end();
    }
})

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});