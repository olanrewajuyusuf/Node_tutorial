const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end(`
        <h1>Welcome to Our Home Page!</h1>
        <p>Wallew_dev is more happy to take you around the city where you can explore everything..</p>
        `);
    }
    if (req.url === '/about') {
        res.end(`
        <h1>Welcome to Our About Page!</h1>
        <p>Find out what wallew_dev entails and encompasses..</p>
        <ol>
           <li>Home</li>
           <li>Security</li>
           <li>Community</li>
           <li>Services</li>
        </ol>
        `);
    }
    res.end(`
    <h1>Oops Sorry!</h1>
    <p>The page you are looking for cannot be found</p>
    <a href="/">Back home</a>
    `);
})

server.listen(3500)