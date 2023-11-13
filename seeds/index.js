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
    for(let i = 0; i < 200; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
          // hard coded to my USER ID
           author: '63e28bc9ce97b37bd333d350',
           location: `${cities[random1000].city}, ${cities[random1000].state}`,
           title: `${sample(descriptors)} ${sample(places)}`,
           images: [{
            url: 'https://res.cloudinary.com/dqvnoupcd/image/upload/v1676072068/samples/food/spices.jpg',
            filename: 'samples/food/spices',
          },
          {
            url: 'https://res.cloudinary.com/dqvnoupcd/image/upload/v1676072068/samples/food/spices.jpg',
            filename: 'samples/food/spices',
          },
          {
            url: 'https://res.cloudinary.com/dqvnoupcd/image/upload/v1676072068/samples/food/spices.jpg',
            filename: 'samples/food/spices',
          }],
           description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique quam aperiam maiores asperiores nihil fuga qui officiis delectus! Accusantium enim natus corporis. Architecto veniam minus reprehenderit dolorum aliquam corrupti.',
           price,
           geometry: { 
            type: 'Point', 
            coordinates: [
              cities[random1000].longitude, 
              cities[random1000].latitude
            ] 
          },
        });
    await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
    console.log("Mongoose Connection Closed")
});