const express = require('express');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// @route POST /api/checkout
// @desc Create a new checkout
// @access Private
router.post('/', protect, async (req, res) => {
  const { checkOutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  if (!checkOutItems || checkOutItems.length === 0) {
    return res.status(400).json({ message: 'Your cart is empty' });
  }

  try {
    // Create a new checkout session
    const newCheckout = await Checkout.create({
      user: req.user._id,
      checkOutItems: checkOutItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: 'Pending',
      isPaid: false, // Added default value for isPaid
    });

    console.log(`Checkout created for user: ${req.user._id}`);
    res.status(201).json(newCheckout);
  } catch (error) {
    console.error('Error creating checkout session', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to paid after successful payment
// @access Private
router.put('/:id/pay', protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: 'Checkout not found' });
    }

    if (paymentStatus === 'paid') {
      checkout.isPaid = true;
      checkout.paidAt = Date.now();
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;

      await checkout.save();
      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: 'Invalid Payment status' });
    }
  } catch (error) {
    console.error('Error updating checkout to paid', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout after successful payment
// @access Private
router.post('/:id/finalize', protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: 'Checkout not found' });
    }

    if (checkout.isPaid && !checkout.isFinalized) {
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkOutItems,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        paymentStatus: 'paid',
        paymentDetails: checkout.paymentDetails,
      });

      // Mark the checkout as finalized
      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();

      // Delete the cart associated with the user
      await Cart.findOneAndDelete({ user: checkout.user });

      res.status(201).json(finalOrder);
    } else if (checkout.isFinalized) {
      return res.status(400).json({ message: 'Checkout already finalized' });
    } else {
      return res.status(400).json({ message: 'Checkout not paid' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}); // Added missing closing brace

module.exports = router;