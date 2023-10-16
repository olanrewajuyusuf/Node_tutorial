var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/bigFile.txt', 'utf8')
    // res.end(text);

    // WE USE STREAM TO SEND OUR FILE IN CHUNK
    // INSTEAD OF SENDING IN LARGE FIFE
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(3700);