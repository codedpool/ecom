

# Trendora E-Commerce Platform

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Documentation](#api-documentation)
8. [Contributing](#contributing)
9. [License](#license)

---

## Overview

**Trendora** is a full-stack e-commerce application designed to provide users with an intuitive interface to browse, purchase, and manage products. The platform includes features such as user authentication, product management, shopping cart functionality, checkout process, and admin capabilities for managing orders and products.

---

## Features

### Frontend Features:
- **User Authentication**: Register, login, and profile management.
- **Product Browsing**: Filter and sort products by category, price, brand, etc.
- **Shopping Cart**: Add/remove products, update quantities, and view cart summary.
- **Checkout Process**: Secure payment integration using PayPal or Cash on Delivery (COD).
- **Order Tracking**: View order history and order details.
- **Responsive Design**: Mobile-first design using Tailwind CSS.
- **Chatbot Support**: Predefined FAQs for quick customer support.

### Backend Features:
- **RESTful API**: Comprehensive API endpoints for user, product, cart, and order management.
- **Admin Dashboard**: Manage users, products, and orders.
- **Image Upload**: Cloudinary integration for product image uploads.
- **Database**: MongoDB with Mongoose ODM for data modeling.

---

## Technologies Used

### Frontend:
- **React.js** with **Vite** for fast development and hot module replacement.
- **Tailwind CSS** for styling and responsive design.
- **Redux Toolkit** for state management.
- **React Router** for routing.
- **Axios** for API requests.
- **PayPal React SDK** for payment processing.
- **ESLint** for code quality and consistency.

### Backend:
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** with **Mongoose** for database management.
- **JWT** for authentication and authorization.
- **Cloudinary** for image storage and management.
- **Multer** for handling file uploads.
- **Bcrypt.js** for password hashing.
- **CORS** for cross-origin resource sharing.
- **Dotenv** for environment variable management.

---

## Project Structure

### Backend (`backend/`)
```
└── backend/
    ├── Readme.md
    ├── package-lock.json
    ├── package.json
    ├── seeder.js
    ├── server.js
    ├── .gitignore
    ├── config/
    │   └── db.js
    ├── data/
    │   └── products.js
    ├── images/
    │   └── oxford.webp
    ├── middleware/
    │   └── authMiddleware.js
    ├── models/
    │   ├── Cart.js
    │   ├── Checkout.js
    │   ├── Order.js
    │   ├── Product.js
    │   ├── Subscriber.js
    │   └── User.js
    └── routes/
        ├── adminOrderRoutes.js
        ├── adminRoutes.js
        ├── cartRoutes.js
        ├── checkOutRoutes.js
        ├── orderRoutes.js
        ├── productAdminRoutes.js
        ├── productRoutes.js
        ├── subscribeRoutes.js
        ├── uploadRoutes.js
        └── userRoutes.js
```

### Frontend (`frontend/`)
```
└── frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .gitignore
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   ├── feature.webp
        │   ├── hero.webp
        │   ├── login.webp
        │   ├── men.webp
        │   ├── register.webp
        │   └── women.webp
        ├── components/
        │   ├── Chatbot.jsx
        │   ├── Admin/
        │   │   ├── AdminLayout.jsx
        │   │   ├── AdminSidebar.jsx
        │   │   ├── EditProductPage.jsx
        │   │   ├── OrderManagement.jsx
        │   │   ├── ProductManagement.jsx
        │   │   └── UserManagement.jsx
        │   ├── Cart/
        │   │   ├── Cart.jsx
        │   │   ├── CartContents.jsx
        │   │   ├── Checkout.jsx
        │   │   └── PaypalButton.jsx
        │   ├── Common/
        │   │   ├── Footer.jsx
        │   │   ├── Header.jsx
        │   │   ├── Navbar.css
        │   │   ├── Navbar.jsx
        │   │   ├── ProtectRoute.jsx
        │   │   └── SearchBar.jsx
        │   ├── Layout/
        │   │   ├── CartDrawer.jsx
        │   │   ├── Hero.jsx
        │   │   ├── Topbar.jsx
        │   │   └── UserLayout.jsx
        │   └── Products/
        │       ├── FeaturedCollection.jsx
        │       ├── FeaturedSection.jsx
        │       ├── FilterSidebar.jsx
        │       ├── GenderCollectionSection.jsx
        │       ├── NewArrivals.jsx
        │       ├── ProductDetails.jsx
        │       ├── ProductGrid.jsx
        │       ├── Products.jsx
        │       └── SortOptions.jsx
        ├── pages/
        │   ├── AdminHomePage.jsx
        │   ├── CollectionPage.jsx
        │   ├── Home.css
        │   ├── Home.jsx
        │   ├── Login.jsx
        │   ├── MyOrdersPage.jsx
        │   ├── OrderConfirmationPage.jsx
        │   ├── OrderDetailsPage.jsx
        │   ├── Profile.jsx
        │   └── Register.jsx
        └── redux/
            ├── store.js
            └── slices/
                ├── adminOrderSlice.js
                ├── adminProductSlice.js
                ├── adminSlice.js
                ├── authSlice.js
                ├── cartSlice.js
                ├── checkoutSlice.js
                ├── orderSlice.js
                └── productSlice.js
```

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account for image uploads

### Steps

#### Backend
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

#### Frontend
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` directory and add the following variables:
   ```env
   VITE_PAYPAL_CLIENT_ID=<your_paypal_client_id>
   VITE_BACKEND_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

### Accessing the Application
- **Frontend**: Open `http://localhost:5173` in your browser.
- **Backend API**: Accessible at `http://localhost:5000`.

### Admin Dashboard
- Log in with an admin account to access the admin dashboard.
- Manage users, products, and orders from the dashboard.

---

## API Documentation

The backend provides RESTful APIs for various functionalities:
- **User Management**: `/api/users`
- **Product Management**: `/api/products`
- **Cart Management**: `/api/cart`
- **Order Management**: `/api/orders`
- **Image Upload**: `/api/upload`

For detailed API documentation, refer to the individual route files in the `backend/routes/` directory.

---

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.



---

## License

This project is licensed under the **ISC License**. See the `LICENSE` file for more details.

---
Created with 🧠💓 at AdaHacks by 🦊🐢

