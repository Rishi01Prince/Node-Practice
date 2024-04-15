var events = require('events');

// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('event' , ()=>{
//     console.log('an event occured !!');
// })

// eventEmitter.emit('event');




//Second Approach 

var myEmitter = new events.EventEmitter();
myEmitter.on('event', function (msg) {
    console.log(msg)
});

myEmitter.emit('event', 'event Emitted Second');