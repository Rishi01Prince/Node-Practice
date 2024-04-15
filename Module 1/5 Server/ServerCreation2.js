var http = require('http');
const path = require('path');
const url = require('url');



//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); 
  const urlobject = url.parse(req.url , true);
  const filename = "." + urlobject.pathname;

  
  fs.readFile(filename, (err,data) =>{
    if(err) {

    }



})




  res.end();
}).listen(8080); 


