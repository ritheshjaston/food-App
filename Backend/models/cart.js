const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  cartdata: [ 
    {
      client_id: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      item_id: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      title: {
        type: String,
      },
      total: {
        type: Number,
      },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
