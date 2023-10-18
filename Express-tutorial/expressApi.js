const express = require('express');
const app = express();
const profiles = require('../data.js');

// BASIC API JSON SETUP
// API EXAMPLE: hn.algolia.com/api

// To get all the contents in data.js file
// app.get('/', (req, res) => {
//     res.json(profiles);
// })

// Directing the user to the data through a link
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/profiles">Profiles</a>')
})

app.get('/api/profiles', (req, res) => {
    // Sending back minimum info when requesting for profiles
    const newProfiles = profiles.map(profile => {
        const {id, name, price, rating} = profile;
        return {id, name, price, rating};
    })
    res.json(newProfiles);
})

// Getting a single profile with full content routing using request param id..
app.get('/api/profiles/:profileID', (req, res) => {
    const {profileID} = req.params;
    const singleProfile = profiles.find(profile => {
        return profile.id === Number(profileID);
    })

    if(!singleProfile) {
        return res.status(404).send('<p>This profile does no exist</p> <a href="/">return to home page</a>')
    }
    res.json(singleProfile);
})

// Adding reviews placeholder to the link
app.get('/api/profiles/:profileID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("This is reviews page...")
})

// Query params use to send small amount of info to the server..
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;

    let sortedProfiles = [...profiles];
    if(search) {
        sortedProfiles = sortedProfiles.filter(profile => {
            return profile.name.startsWith(search)
        })
    }
    if(limit) {
        sortedProfiles = sortedProfiles.slice(0, Number(limit))
    }
    if(sortedProfiles.length < 1) {
        return res.status(200).send('No profile matched your search request..');
    }

    res.status(200).json(sortedProfiles);
})



app.listen(4000, ()=>{
    console.log('Server is listening to port 4000...');
})

module.exports = app;