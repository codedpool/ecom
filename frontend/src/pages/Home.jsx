import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import ProductGrid from '../components/Products/ProductGrid';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import { GenderCollectionSection } from '../components/Products/GenderCollectionSection';
import Hero from '../components/Layout/Hero';
import FeaturedSection from '../components/Products/FeaturedSection';
import { fetchProductsByFilter } from '../redux/slices/productSlice';
import Chatbot from '../components/Chatbot'; // Import the Chatbot component
import './Home.css'; // Import the CSS file

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch products for a specific collection
    dispatch(
      fetchProductsByFilter({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      })
    );

    // Fetch Best Seller Product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error("Error fetching best seller product:", error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className='loading-text'>Loading best seller product...</p>
      )}
      <div className="container mx-auto">
        {/* Apply the shop-smart-heading class here */}
        <h2 className="shop-smart-heading text-4xl">
          Shop Smart, Shop Fast, Shop With Confidence!
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <FeaturedCollection />
      <FeaturedSection />
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default Home;
