const express = require('express');
const router = express.Router();
const User = require('../models/user');
// const catchAsync = require('../utils/catchAsync');
// const router = require('./campgrounds');

router.get('/register', (req, res) => {
    res.render('users/register');
});
router.post('/register', async (req, res) => {
    res.send(req.body);
});

module.exports = router;