const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.URI;


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
     uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("mongodb is connected successfully");
  } catch (error) {
    console.log(`error occured ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
