import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle adding or subtracting items from cart
  const handleAddToCart = ({ productId, delta, quantity, size, color }) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(
      removeFromCart({
        productId,
        guestId,
        userId,
        size,
        color,
      })
    );
  };

  return (
    <div>
      {cart?.products?.length > 0 ? (
        cart.products.map((product, index) => (
          <div key={index} className="flex items-start justify-between py-4 border-b">
            <div className="flex items-start">
              <img src={product.image} alt={product.name} className="h-24 w-20 object-cover mr-4 rounded" />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Size: {product.size}, Color: {product.color}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() =>
                      handleAddToCart({
                        productId: product.productId,
                        delta: -1,
                        quantity: product.quantity,
                        size: product.size,
                        color: product.color,
                      })
                    }
                    className="border rounded px-2 py-1 text-xl font-medium"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        productId: product.productId,
                        delta: 1,
                        quantity: product.quantity,
                        size: product.size,
                        color: product.color,
                      })
                    }
                    className="border rounded px-2 py-1 text-xl font-medium"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p>$ {product.price.toLocaleString()}</p>
              <button onClick={() => handleRemoveFromCart(product.productId, product.size, product.color)}>
                <RiDeleteBinLine className="h-6 w-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartContents;
