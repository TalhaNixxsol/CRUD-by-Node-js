const mongoose = require('mongoose');
const url='mongodb+srv://talha:talhasaeed@cluster0.job7c7k.mongodb.net/'
// Function to connect to MongoDB
async function connectToDB() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Export the connectToDB function
module.exports = connectToDB;
