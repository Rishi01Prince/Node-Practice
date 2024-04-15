var zlib = require('zlib');
var fs = require('fs');

var def = zlib.createDeflate();
var r = fs.createReadStream('input.txt'); 
var w = fs.createWriteStream('input.txt.gz'); 

r.pipe(def).pipe(w);