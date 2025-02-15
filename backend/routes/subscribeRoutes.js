const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

//@route POST /api/subscribers
//@desc Add new subscriber
//@access Public
router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    let subscriber = await Subscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).json({ message: 'Subscriber already exists' });
    }

    subscriber = new Subscriber({ email });
    await subscriber.save();
    res.json({ message: 'Subscriber added' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;