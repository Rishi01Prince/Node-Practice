const http = require('http');
const fs = require('fs');
const url = require('url');
const port = process.env.port || 5000;

http.createServer((req, res) => {
  fs.writeFile('temp.txt', 'written', function (err) {
    if (err) {
      console.log("error occured");
      throw err;
    }
    console.log('Saved!');
  });
  res.write("Written on txt file");
  res.end();

}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
});