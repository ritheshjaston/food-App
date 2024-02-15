const express = require("express");
const roter = express.Router();
const mongoose = require('mongoose');

roter.post("/fooddata", (req, res) => {
  try {
    res.send([global.fooditems, global.foodcategory]);
  } catch (error) {
    console.log("error in fetching data");
  }
});



roter.post('/myoredrs', async (req, res) => {
    try {
      const mongouri =
        'mongodb+srv://ritheshjaston22:gofood@gofood.s6kf41a.mongodb.net/gofood?retryWrites=true&w=majority';
  
      await mongoose.connect(mongouri);
      console.log('data fetched');
  
      const fetchorders = await mongoose.connection.db.collection('carts').find({}).toArray();
      console.log(fetchorders);
      global.data=fetchorders;
      res.send([fetchorders]);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });
  
module.exports = roter;
