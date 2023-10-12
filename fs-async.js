const { readFile, writeFile } = require('fs')

readFile('./content/first.text', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);

    readFile('./content/second.text', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);

        writeFile('./content/result.txt', `Added text ${first} then ${second}`, {flag: 'a'}, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })

    readFile('./content/result.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const res = result;
        console.log(res);
    })
})

