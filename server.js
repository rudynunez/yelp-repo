const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

// mongoose connection
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
    console.log('Mongoose CONNECTED');
};

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: 'this-secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.warning = req.flash('warning');
    res.locals.danger = req.flash('danger');
    res.locals.info = req.flash('info');
    res.locals.message = req.flash('message'); 
    res.locals.error = req.flash('error');
    next();
});

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews);

// INDEX

app.get('/', (req, res) => {
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Somethin aint right...'
    res.status(statusCode).render('error', { err });
});

app.listen(3007, () => {
    console.log("Serving on Port 3007");
});