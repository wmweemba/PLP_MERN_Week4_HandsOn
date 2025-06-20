const mongoose = require('mongoose');

// Connect to MongoDB using mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;
// Export the connectDB function to be used in other parts of the application
