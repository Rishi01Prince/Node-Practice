const fs = require('fs');

const data = fs.readFileSync('./Input.txt' , 'utf8');

console.log(data);
console.log('File Read Success');

fs.writeFileSync('./Output.txt', data);
console.log('File Write Success');