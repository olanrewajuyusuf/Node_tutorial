// require('./module')
// const builtin = require('./builtinModule')

// console.log(builtin);

const lo = require('lodash')
require('./eventEmitter')
require('./stream')

const item = [1, [2, [3, [4]]]];
const newItem = lo.flattenDeep(item)

console.log(newItem);
console.log("Hello Coders");
