const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['developer', 'admin'],
        default: 'developer'
    }
});

module.exports = mongoose.model('User', userSchema);
// Export the User model to be used in other parts of the application
// This model will be used to interact with the 'users' collection in MongoDB