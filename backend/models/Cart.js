const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product'
  },
  name: {  
    type: String,  
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  }
}, { _id: false });

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  guestId: {
    type: String,
  },
  products: [cartItemSchema],
  totalPrice: {
    type: Number,
    default: 0,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);