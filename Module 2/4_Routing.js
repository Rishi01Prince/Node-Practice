const http = require('http');


const server = http.createServer(function(req, res){
    const url = req.url;
    if(url == '/HomePage'){
        res.writeHead(200, {
            'ContentType': 'text/html'
        });

        res.end("<h1>Welcome to the HomePage</h1>");
    }
    else{
        res.end("Hello, Welcome to Rundra Domain!");
    }
})


server.listen(3232 ,()=>{console.log('listening on 3232');});