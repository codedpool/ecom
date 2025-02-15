const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Helper function to get cart by user Id or guest Id
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
};

// @route POST /api/cart
// @desc Add product to cart for guest or logged in user
// @access Private for users, Public for guests
router.post('/', async (req, res, next) => {
    const { userId } = req.body;

    // Apply protect middleware only for logged-in users
    if (userId) {
        return protect(req, res, next);
    }

    // Skip protect middleware for guests
    next();
}, async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        if (cart) {
            // Check if product is already in cart
            const productIndex = cart.products.findIndex(
                p => p.productId.toString() === productId && p.size === size && p.color === color
            );

            if (productIndex > -1) {
                // If product already exists, increase qty
                cart.products[productIndex].quantity += quantity;
            } else {
                // If product does not exist, add product to cart
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    quantity,
                    size,
                    color
                });
            }

            // Recalculate the total price
            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            // Create a new cart for the guest or user
            const newCart = new Cart({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [{
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    quantity,
                    size,
                    color
                }],
                totalPrice: product.price * quantity
            });

            await newCart.save();
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route PUT /api/cart/
// @desc Update product quantity in cart for guest or logged in user
// @access Private for users, Public for guests
router.put("/", async (req, res, next) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(
            p => p.productId.toString() === productId && p.size === size && p.color === color
        );

        if (productIndex > -1) {
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1);
            }

            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route DELETE /api/cart/
// @desc Delete product from cart for guest or logged in user
// @access Private for users, Public for guests
router.delete("/", async (req, res, next) => {
    const { productId, size, color, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(
            p => p.productId.toString() === productId && p.size === size && p.color === color
        );

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            cart.totalPrice = cart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route GET /api/cart/
// @desc Get cart for guest or logged in user
// @access Private for users, Public for guests
router.get("/", async (req, res, next) => {
    const { userId, guestId } = req.query;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route POST /api/cart/merge
// @desc Merge cart for guest or logged in user
// @access Private for users, Public for guests
router.post("/merge", protect, async (req, res, next) => {
    const { guestId } = req.body;

    try {
        // Find the guest cart and user cart
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: 'Guest cart is empty' });
            }

            if (userCart) {
                // Merge guest cart products into user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(
                        (item) => item.productId.toString() === guestItem.productId.toString() && item.size === guestItem.size && item.color === guestItem.color
                    );

                    if (productIndex > -1) {
                        userCart.products[productIndex].quantity += guestItem.quantity;
                    } else {
                        userCart.products.push(guestItem);
                    }
                });

                // Recalculate the total price
                userCart.totalPrice = userCart.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
                await userCart.save();

                // Remove the guest cart
                try {
                    await Cart.findOneAndDelete({ guestId });
                } catch (error) {
                    console.error("Error deleting guest cart", error);
                }

                return res.status(200).json(userCart);
            } else {
                // If user cart does not exist, update the guest cart user field
                guestCart.user = req.user._id;
                guestCart.guestId = undefined;
                await guestCart.save();
                return res.status(200).json(guestCart);
            }
        } else {
            if (userCart) {
                return res.status(200).json(userCart);
            }
            return res.status(404).json({ message: 'Guest Cart not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;