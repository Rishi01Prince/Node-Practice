const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("<html>");
    res.write("<body><h1>Rishi</h1><br><input type = text > <input type = button > </body>");
    res.write("</html>");
    res.end();
    console.log("It is a request ");
})


// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
//   });
  


server.listen(2000, ()=>{
    console.log("Port 200 is Running ");
})