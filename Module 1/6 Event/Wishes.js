const events = require('events')
const fs = require('fs')
const wishes = new events.EventEmitter();

wishes.on('event', (msg) => {
    console.log(msg)
    fs.renameSync('f1.txt', 'f2.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed.');
    });
    fs.writeFileSync('f2.txt', 'Happy Birthday! to', function (err) {
        if (err) throw err;
        console.log('File written successfully');
    });
})

wishes.emit('event', 'event emitted');