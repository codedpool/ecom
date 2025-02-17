import { IoMdClose } from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
const navigate=useNavigate();
const {user,guestId}= useSelector((state)=>state.auth);
const {cart}=useSelector((state)=>state.cart);
const userId=user?user._id :null;


  const handleCheckout=()=>{
    toggleCartDrawer();
    if(!user){
      navigate("/login?redirect=checkout");

    }
    else{
      navigate("/checkout");
    }
    
  };
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer} className="text-gray-600">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Scrollable Cart Items Section */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart && cart ?.products?.length>0 ? (<CartContents cart ={cart} userId={userId} guestId={guestId}/>):
        (
          <p>Your Cart is Empty</p>
        )}
        <CartContents />
      </div>

      {/* Checkout Section (Sticky at the Bottom) */}
      <div className="p-4 bg-white sticky bottom-0">
      {cart && cart ?.products?.length>0 && (
        <>
        <button  onClick={handleCheckout}className="w-full py-3 bg-gray-800 text-white rounded-lg">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discounts calculated at checkout.
        </p></>
      )}
        <button  onClick={handleCheckout}className="w-full py-3 bg-gray-800 text-white rounded-lg">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discounts calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
