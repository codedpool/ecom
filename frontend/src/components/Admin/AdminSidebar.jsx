import { FaBoxOpen, FaClipboardList, FaUser, FaStore, FaSignOutAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logout());
      dispatch(clearCart());
        navigate("/");
    };

    return (
      <div className="h-screen w-64 bg-gray-900 text-white p-6 flex flex-col fixed">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/admin" className="text-2xl font-semibold text-white">
            Rabbit
          </Link>
        </div>

        {/* Dashboard Heading */}
        <h2 className="text-lg font-medium mb-6 text-gray-400">
          Admin Dashboard
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-400 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaUser />
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-400 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaBoxOpen />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-400 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaClipboardList />
            <span>Orders</span>
          </NavLink>

          <NavLink
            to="/admin/shop"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                : "text-gray-400 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
            }
          >
            <FaStore />
            <span>Shop</span>
          </NavLink>

          {/* Logout Button (Now right below Shop) */}
          <button 
            onClick={handleLogout} 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded flex items-center justify-center space-x-2 mt-2"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    );
};

export default AdminSidebar;
