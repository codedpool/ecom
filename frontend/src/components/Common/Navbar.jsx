import {useState} from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag , HiBars3BottomRight} from "react-icons/hi2"; // Import missing icons
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Shopping Bag Icon with Badge */}
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
              4
            </span>
          </button>
          {/* Search */}
          <SearchBar />
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </>
  );
};

export default Navbar;
