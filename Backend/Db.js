const mongoose = require('mongoose');
const mongouri = "mongodb+srv://ritheshjaston22:gofood@gofood.s6kf41a.mongodb.net/?retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongodb;
