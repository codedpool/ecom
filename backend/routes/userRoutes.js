const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {protect} = require('../middleware/authMiddleware');
const router = express.Router();

// @route POST /api/users/register
// @desc Register a new user
// @access Public

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
    });

    // Save user to the database
    await user.save();

    // Create JWT payload
    const payload = {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    // Generate JWT token
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h' }, (err, token) => {
      if (err) throw err;

      // Send response with user data and token
      res.status(201).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    });


  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

// @route POST /api/users/login
// @desc Login user
// @access Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await user.matchPassword(password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT payload
    const payload = {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
 
    // Generate JWT token
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h' }, (err, token) => {
      if (err) throw err;

      // Send response with user data and token
      res.json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    });

    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
});


// @route GET /api/users/profile
// @desc Get user profile
// @access Private
router.get('/profile', protect, async (req, res) => {
  res.json(req.user);
});
  

module.exports = router;