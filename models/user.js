const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true // this is a unique index in the database (not a validator) 
                     // If you try to create a user with the same email, it will fail
                     // If you set up a validation middleware at some point, this will not be one of those validations
    }
});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

