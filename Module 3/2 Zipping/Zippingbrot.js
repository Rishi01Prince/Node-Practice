var zlib = require('zlib');
var fs = require('fs');


var brot = zlib.createBrotliCompress();
var r = fs.createReadStream('input.txt'); 
var w = fs.createWriteStream('input.txt.gz'); 

r.pipe(brot).pipe(w);
