const fs = require('fs');
const { Duplex } = require('stream');

const data = 'This is the duplex file data';

// Create a new duplex stream
const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
  read(size) {}
});

// Pipe the duplex stream to a file
const writeStream = fs.createWriteStream('dupfile.txt');
duplexStream.pipe(writeStream);

// Writing data to the duplex stream
duplexStream.write(data, 'utf8', () => {
  console.log('Finished writing data to the duplex stream');
  duplexStream.end();
});

// Reading data from the duplex stream
let readData = '';
duplexStream.on('data', chunk => {
  readData += chunk.toString();
});

duplexStream.on('end', () => {
  console.log('Data read from the duplex stream:', readData);
});
