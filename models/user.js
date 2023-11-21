const { default: mongoose } = require("mongoose");

// create userSchema
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    passwordHash: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Note'
        }
    ]
});

// create a User model from the userSchema
const User = mongoose.model('User', userSchema, 'users');

// export the User model
module.exports = User;