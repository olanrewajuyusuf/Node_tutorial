// SETTING SERVER WITH HTTP MODULES ALONE =====\\

const http = require('http')
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./Express-tutorial/index.html')
const logic = readFileSync('./Express-tutorial/index.js')
const style = readFileSync('./Express-tutorial/styles.css')
const image = readFileSync('./Express-tutorial/frame.jpg')

const server = http.createServer((req, res) => {
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead( 200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    // Javascript 
    else if (url === '/index.js') {
        res.writeHead( 200, {'content-type': 'text/javascript'})
        res.write(logic)
        res.end()
    } 
    // Styles.css 
    else if (url === '/styles.css') {
        res.writeHead( 200, {'content-type': 'text/css'})
        res.write(style) 
        res.end()
    } 
    // Image 
    else if (url === '/frame.jpg') {
        res.writeHead( 200, {'content-type': 'image/jpg'})
        res.write(image)
        res.end()
    } 
    // About page 
    else if (url === '/about') {
        res.writeHead( 200, {'content-type': 'text/html'})
        res.write('<h1>About page</h1>')
        res.end()
    } 
    // Error page
    else {
        res.writeHead( 404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
    
})

server.listen(4000, ()=>{
    console.log("Server is on....");
})

module.exports = server