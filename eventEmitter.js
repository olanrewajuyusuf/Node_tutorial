const EventEmitter = require('events');

const newEmitter = new EventEmitter();

// WE CAN HAVE AS MANY FUNCTION AS WE WANT HERE
newEmitter.on('response', (name)=>{
    console.log("Data received from " + name); 
})
newEmitter.on('response', (name, id)=>{
    console.log(`Another Data processed by ${name} with the id of ${id}`);
})
newEmitter.on('response', (name, age)=>{
    console.log(`${name} is ${age} years old`);
})

// WE CAN PASS IN PARAMETERS
newEmitter.emit('response', 'Wallew', 40)

module.exports = newEmitter
