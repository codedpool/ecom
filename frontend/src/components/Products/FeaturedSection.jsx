import { HiOutlineCreditCard, HiShoppingBag, HiArrowPath } from "react-icons/hi2"; 

const FeaturedSection = () => {
  return (
    <section className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {/* Feature 1 */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-100 rounded-full mb-4">
          <HiShoppingBag className="text-3xl" />
        </div>
        <h4 className="tracking-tighter font-semibold mb-2">
          FREE SHIPPING
        </h4>
        <p className="text-gray-600 text-sm tracking-tighter">
          On all orders over ₹1500
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-100 rounded-full mb-4">
          <HiArrowPath className="text-3xl" />
        </div>
        <h4 className="tracking-tighter font-semibold mb-2">
          15 DAYS RETURN
        </h4>
        <p className="text-gray-600 text-sm tracking-tighter">
          Money back guarantee
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center">
        <div className="p-4 bg-gray-100 rounded-full mb-4">
          <HiOutlineCreditCard className="text-3xl" />
        </div>
        <h4 className="tracking-tighter font-semibold mb-2">
          SECURE CHECKOUT
        </h4>
        <p className="text-gray-600 text-sm tracking-tighter">
          100% secured checkout process
        </p>
      </div>
    </section>
  );
};

export default FeaturedSection;
