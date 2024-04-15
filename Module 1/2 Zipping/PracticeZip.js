var fs = require('fs');
var zlib = require('zlib')

var b = zlib.createGzip();
var read = fs.ReadStream('rishi.txt');
var write = fs.WriteStream('prince.txt');

read.pipe(write);