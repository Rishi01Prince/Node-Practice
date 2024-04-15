var zlib = require('zlib');
var fs = require('fs');



var gzib = zlib.createGzip();
var r = fs.createReadStream('input.txt'); 
var w = fs.createWriteStream('input.txt.gz'); 
r.pipe(gzip).pipe(w);