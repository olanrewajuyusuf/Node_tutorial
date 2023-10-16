// EXAMPLE OF WRITING CLEAN CODE WHILE TRYING TO READ AND WRITE MULTIPLE FILES =======\\
// EXAMPLE (1)

const {readFile, writeFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data); 
            }
        })
    }) 
}

getText('./content/first.text')
   .then((result) => console.log(result))
   .catch(err => console.log(err))


// EXAMPLE (2)
// INSTEAD OF WRITING THIS MULTIPLE TIMES
// WE CAN USE ASYNC TO MAKE IT CLEANER ====\\

const start = async () => {
    try {
        const first = await getText('./content/first.text');
        const second = await getText('./content/second.text');
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start();


// EXAMPLE (3)
const {readFile, writeFile} = require('fs');
// WE CAN MAKE IT CLEANER BY USING ANOTHER INBUILT MODULE CALLED {UTIL}
const util = require('util');
// TO USE THIS WE CAN DECLARE A VARIABLE FOR THIS MODULE TO USE PROMISE
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.text', 'utf8');
        const second = await readFilePromise('./content/second.text', 'utf8');
        await writeFilePromise(
            './content/write.txt',
            `THIS IS AMAZING: ${first}, ${second}`
            )
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start();

// EXAMPLE (4)
// APPLY PROMISES WITH THE REQUIRE MODULE
const {readFile, writeFile} = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('./content/first.text', 'utf8');
        const second = await readFile('./content/second.text', 'utf8');
        await writeFile(
            './content/write.txt',
            `THIS IS AMAZING: ${first}, ${second}`,
            { flag: 'a'}
            )
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start();