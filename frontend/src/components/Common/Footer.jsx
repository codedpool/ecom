import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta, TbFilePhone } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600">
            Subscribe to our newsletter to get the latest updates
          </p>
          <p className="font-medium text-sm text-gray-600">
            Sign up and get 10% off on your first order
          </p>

          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-black text-white text-sm rounded-r-md hover:bg-gray-800 transition-all p-3"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-800 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>

          {/* Call Us Section */}
          <div>
            <p className="text-gray-500">Call Us</p>
            <a
              href="tel:+1234567890"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <TbFilePhone className="inline-block mr-2" />
              +91 9155808901
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-lighter text-center"> 2025 Trendora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;