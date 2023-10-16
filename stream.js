const {createReadStream} = require('fs');

const stream = createReadStream('./content/bigFile.txt', { highWaterMark: 90000, encoding: 'utf8' })

// Size of the buffer is 64kb by default
// But can be control by using highWaterMark in object
stream.on('data', (result)=>{
    console.log(result);
}) 
// We can also check for the error
stream.on('error', (err)=>{
    console.log(err);
}) 

module.exports = stream