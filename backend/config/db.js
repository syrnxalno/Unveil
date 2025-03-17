const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      maxPoolSize: 10,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
