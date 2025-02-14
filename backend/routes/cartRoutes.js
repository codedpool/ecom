const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const {protect} = require('../middleware/authMiddleware');

const router = express.Router();

//@route POST /api/cart
//@desc Add product to cart for guest or logged in user
//@access Private