var path = require('path');
//Making this an object
console.log(path.parse('D:\BTECH\BTECH\Semester 5'));
console.log("hello");

//Extract THE File Name :
var filename = path.extname('D:\BTECH\BTECH\Semester 5\Time Table Sem5');
console.log(filename);


var directoryname = path.dirname("D:\BTECH\BTECH\Semester 5\Time Table Sem5");
console.log(directoryname);


// Will show the hex output of the string ;

const buf1 = Buffer.alloc(5, 'hello');
console.log(buf1);

// converting back to String
console.log(buf1.toString());
const buf2 = Buffer.from('54554565165464556444554,hgfhjkljhjjhjh', 'hex');

console.log(buf2.toString('base64url'));

console.log(buf2.toString('ascii', '0', '5'));
const buf = new Buffer.alloc(50);
n = buf.write('This is Node.js class');
console.log('The number of octets are  : ' + n);
console.log(buf);

const buf4 = new Buffer.alloc(50);
const buf5 = new Buffer.alloc(50);

console.log(buf4 == buf5);

