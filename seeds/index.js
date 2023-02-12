const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
  console.log('Mongoose CONNECTED');
};

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for(let i = 0; i < 5; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
           author: '63e28bc9ce97b37bd333d350',
           location: `${cities[random1000].city}, ${cities[random1000].state}`,
           title: `${sample(descriptors)} ${sample(places)}`,
           images: [{url: 'https://source.unsplash.com/collection/483251', filename: 'image' + random1000}, 
                    {url: 'https://source.unsplash.com/collection/483251', filename: 'image' + random1000}],
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique quam aperiam maiores asperiores nihil fuga qui officiis delectus! Accusantium enim natus corporis. Architecto veniam minus reprehenderit dolorum aliquam corrupti.',
           price
        });
    await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});