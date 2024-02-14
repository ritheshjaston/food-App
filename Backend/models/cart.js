const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    client_id: { type: String, required: true },
  item_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
  total: { type: Number, required: true },
  img: { type: String }, // Assuming you have an 'img' property in your data
  title: { type: String }
  });
  
  const cartSchema = new mongoose.Schema({
    cartdata: [cartItemSchema],
  });
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;