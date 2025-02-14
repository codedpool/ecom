const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');
const products = require('./data/products');

dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Function to seed data

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: '123456',
      role: 'admin',
    });

    //Assign the default user ID to each product
    const userID = createdUsers._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    //Insert the products in the database
    await Product.insertMany(sampleProducts);

    console.log('Data Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error("Error sending data",error);
    process.exit(1);
  }
};

seedData();