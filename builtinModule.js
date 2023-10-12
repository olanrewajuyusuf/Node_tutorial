const os = require('os');
const user = os.userInfo()
const time = os.uptime()

console.log(user)
console.log(`The system Uptime is: ${time}`);

const myOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    jaggons: os.hostname()
}

console.log(myOs);

module.exports = {user, time, myOs}