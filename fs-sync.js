const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.text', 'utf8');
const second = readFileSync('./content/second.text', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result.txt',
    `The result of both text files is: ${first}, ${second}`,
    { flag: 'a'}
)

const result = readFileSync('./content/result.txt', 'utf8');
console.log(result)
