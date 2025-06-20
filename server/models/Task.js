const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
});

module.exports = mongoose.model('Task', taskSchema);
// Export the Task model to be used in other parts of the application
// This model will be used to interact with the 'tasks' collection in MongoDB