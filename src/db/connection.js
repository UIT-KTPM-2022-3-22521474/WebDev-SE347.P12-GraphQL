const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🚀 Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ MongoDB Atlas connection error:', error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = { connect };