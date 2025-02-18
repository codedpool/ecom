import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const cartItemCount = cart?.products?.reduce((total, product) => total + product.quantity, 0);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) setNavHeight(navbar.offsetHeight);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change on scroll position > 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar with Blur on Scroll */}
      <nav
        id="navbar"
        className={`fixed top-[40px] left-0 w-full z-50 shadow-md py-4 px-6 transition-all duration-300 ${
          isScrolled ? "navbar-blur" : "navbar-solid"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-4xl font-medium great-vibes-regular text-black">
            Trendora
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/collections/all?gender=Men" className="text-lg text-gray-700 text-bold hover:text-black font-medium uppercase">
              Men
            </Link>
            <Link to="/collections/all?gender=Women" className="text-lg text-gray-700 text-bold hover:text-black font-medium uppercase">
              Women
            </Link>
          </div>
          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">
                Admin
              </Link>
            )}
            {/* Profile Icon */}
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>
            {/* Shopping Bag Icon with Badge */}
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                  {cartItemCount}
                </span>
              )}
            </button>
            {/* Search */}
            <SearchBar />
            {/* Mobile Menu Toggle */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer} className="text-gray-600">
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav>
            <Link to="/collections/all?gender=Men" onClick={toggleNavDrawer} className="block py-2 text-gray-700 hover:text-black">
              Men
            </Link>
            <Link to="/collections/all?gender=Women" onClick={toggleNavDrawer} className="block py-2 text-gray-700 hover:text-black">
              Women
            </Link>
          </nav>
        </div>
      </div>
      {/* Push Main Content Below Navbar */}
      <div style={{ marginTop: `${navHeight + 10}px` }} className="px-6"></div>
    </>
  );
};

export default Navbar;