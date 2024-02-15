const mongoose = require('mongoose');
const mongouri = "mongodb+srv://ritheshjaston22:gofood@gofood.s6kf41a.mongodb.net/gofood?retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongouri);
    console.log("Connected to MongoDB");

    // Fetch data using async/await
    const fetchdata = await mongoose.connection.db.collection("fooditems").find({}).toArray();
    const fetchcatdata = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
    const fetchorders = await mongoose.connection.db.collection("carts").find({}).toArray();
    // console.log(fetchorders);
    global.fooditems=fetchdata;
    global.foodcategory=fetchcatdata;
    global.data=fetchorders;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = mongodb;
