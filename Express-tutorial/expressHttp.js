// SETTING SERVER WITH EXPRESS JS =====\\


// You can set it up like this ====
const express = require('express');
const app = express();
// OR =====
// const app = require('express')();
const path = require('path');

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
//     adding to static assets
//     SSR serverside rendering
// })


app.all('*', (req, res)=>{
    res.status(404).send('<h1>Page can not be found</h1>')
})

// BASICS =====

// app.get('/', (req, res)=>{
//     res.status(200).send('Home page')
// })

// app.get('/about', (req, res)=>{
//     res.status(200).send('<h1>About page</h1>')
// })

// app.all('*', (req, res)=>{
//     res.status(404).send('<h1>Page can not be found</h1>')
// })

app.listen(4000, ()=>{
    console.log("Express is listening on port 4000..");
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
module.exports = app