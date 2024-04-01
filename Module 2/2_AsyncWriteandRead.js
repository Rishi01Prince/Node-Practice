const fs = require('fs').promises;

// Note if you want to use promises of async-await  in asynchronour method then use - const fs = require('fs').promises 
//Non Blocking Readfile

// fs.readFile('./Input.txt', 'utf-8' , function(err, data) {
//     console.log(data);
//     fs.writeFile('./Outputanc.txt', data+"Rishi", function(err) {
//         if(err) {
//             console.log(err);
//         }
//         console.log('File Write Success' + emoji );
//     });
    
// });


//Using Promise :-
// fs.readFile('./Input.txt', 'utf-8')
// .then(data => {fs.writeFile('./Outputanc.txt',data+"Rihi")})
// .catch(err => console.log(err));


const rishi = async function() {
    const read = await fs.readFile('./Input.txt', 'utf-8');
    fs.writeFile('./Outputanc.txt', read+ " Using Async Await");
};

rishi();

console.log('End of FILE');