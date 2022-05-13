const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
  console.log('Mongoose CONNECTED');
};

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: "My Backyard", description: "cheap camping!" });
    await camp.save();
    console.log(camp);
});







app.listen(3007, () => {
    console.log("Serving on Port 3007")
});