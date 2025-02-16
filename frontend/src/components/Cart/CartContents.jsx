import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateCartItemQuantity } from "../../redux/slices/cartSlice";

const CartContents = ({cart,userId,guestId}) => {
  const dispatch =useDispatch();

  // Handle adding or subtracting from cart

  const handleAddToCart={pproductId,delta,quantity,size,color}=>{
    const newQuantity=quality+delta;
    if(newQuantity>=1){
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity:newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      )
    }
  }


  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-start justify-between py-4 border-b">
          <div className="flex items-start">
            <img src={product.image} alt={product.name} className="h-24 w-20 object-cover mr-4 rounded" />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size}, Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                <span className="mx-2">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
              </div>
            </div>
          </div>
          {/* Wrap price and delete button in the same return block */}
          <div className="flex flex-col items-end">
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBinLine className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
