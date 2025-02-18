import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { clearCart } from "../redux/slices/cartSlice";
  
  const OrderConfirmationPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { checkout } = useSelector((state) => state.checkout);

    //Clear cart after order confirm
    useEffect(() => {
      if (checkout && checkout._id) {
        dispatch(clearCart());
        localStorage.removeItem("cart");
      }else{
        navigate("/my-orders");
      }
    }, [checkout, dispatch, navigate]);


    const calculateEstimatedDelivery = (createdAt) => {
      const orderDate = new Date(createdAt);
      orderDate.setDate(orderDate.getDate() + 7); // Estimated 7-day delivery
      return orderDate.toLocaleDateString();
    };
  
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-emerald-700 mb-6">
          Thank You for Your Order!
        </h1>
  
        {/* Order ID & Delivery Date */}
        {checkout && (
          <div className="p-6 rounded-lg border">
            <div className="flex justify-between items-start mb-6">
              {/* Order Details */}
              <div>
                <h2 className="text-md font-semibold">
                  Order ID: <span className="text-gray-700">{checkout._id}</span>
                </h2>
                <p className="text-gray-500 text-sm">
                  Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
              </div>
  
              {/* Estimated Delivery */}
              <div className="text-right">
                <p className="text-green-600 text-sm font-medium">
                  Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
                </p>
              </div>
            </div>
  
            {/* Order Summary */}
            <div className="border-t py-4">
              {checkout.checkoutItems.map((product, index) => (
                <div key={index} className="flex items-center py-4 border-b">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
  
                  {/* Product Details */}
                  <div className="flex-1 px-4">
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="text-gray-500 text-xs">
                      {product.color} | {product.size}
                    </p>
                  </div>
  
                  {/* Price & Quantity */}
                  <div className="text-right">
                    <p className="text-md font-semibold">${product.price?.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs">Qty: {product.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Pricing Summary */}
            <div className="flex justify-between items-center text-md mb-2">
              <p className="font-medium">Subtotal</p>
              <p className="font-semibold">
                ${checkout.checkoutItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between items-center text-md mb-2">
              <p className="font-medium">Shipping</p>
              <p className="font-semibold text-green-600">Free</p>
            </div>
  
            {/* Total Amount */}
            <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>
                ${checkout.checkoutItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString()}
              </p>
            </div>
  
            {/* Payment & Delivery Details */}
            <div className="grid grid-cols-2 gap-6 text-sm mt-6">
              <div>
                <h4 className="font-semibold mb-2">Payment</h4>
                <p className="text-gray-600">PayPal</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-gray-600">{checkout.shippingAddress.address}</p>
                <p className="text-gray-600">
                  {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default OrderConfirmationPage;
  