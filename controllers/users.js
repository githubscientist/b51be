// create a user router
const usersRouter = require('express').Router();
// import the bcrypt library
const bcrypt = require('bcrypt');
const User = require('../models/user');

// define all the user routes here
// to create a new user or register a new user
usersRouter.post('/', async (req, res) => {
    // get the user details from the request body
    const { username, name, password } = req.body;

    // hash the password and store it in the passwordHash variable
    const passwordHash = await bcrypt.hash(password, 10);

    // create a new user object from the User model
    const user = new User({
        username,
        name,
        passwordHash,
    });

    // save the user to the database and store the result in savedUser
    const savedUser = await user.save();

    // send the savedUser as response
    res.json(savedUser);
});

// export the user router
module.exports = usersRouter;