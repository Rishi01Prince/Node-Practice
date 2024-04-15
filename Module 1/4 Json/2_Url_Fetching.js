const path = require('path');
const url = require('url');
const reqUrl = 'https://practice.geeksforgeeks.org/problems/51afa710a708c0681748445b509696dd588d5c40/1?page=1&company[]=JUSPAY&sortBy=submissions';



// converting json to object
const urlobject = url.parse(reqUrl , true);
console.log(urlobject);
console.log(urlobject.path);
console.log(urlobject.slashes);
console.log(urlobject.port);
console.log(urlobject.auth);

console.log(urlobject.query);


