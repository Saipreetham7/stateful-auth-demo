const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/DemoApp');
    if (conn) {
      console.log(`MongoDB database was connected successfully`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
