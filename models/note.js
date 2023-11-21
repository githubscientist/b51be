const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Note = mongoose.model('Note', noteSchema, 'notes');

module.exports = Note;