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

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
});

// SHOW
app.get('/campgrounds/:id', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show', { campground });
});





app.listen(3007, () => {
    console.log("Serving on Port 3007")
});