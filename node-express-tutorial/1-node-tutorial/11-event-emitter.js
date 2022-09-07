const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listern for an event
// emit - emit an event
customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id: ${id}`);
})

customEmitter.emit('response', 'john', 34);