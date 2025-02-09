import React, { useState, useEffect } from 'react';
import { toast, Toaster } from "sonner";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish Jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1",
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2",
        },
    ],
};

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, []);

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.");
            return;
        }

        setIsAdding(true); // Show "Adding..." and disable button
        
        setTimeout(() => {
            toast.success("Product added to cart successfully!");
            setIsAdding(false); // Re-enable button after processing
        }, 2000); // Simulating a 2-second delay
    };

    return (
        <div className="p-6">
            <Toaster position="top-right" richColors />
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    
                    {/* Left Thumbnails */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                                    mainImage === image.url ? "border-black" : "border-gray-300"
                                }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img
                                src={mainImage}
                                alt="Main Product"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Mobile Thumbnails */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                                    mainImage === image.url ? "border-black" : "border-gray-300"
                                }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>

                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
                        </p>

                        <p className="text-xl text-gray-500 mb-2">
                            ${selectedProduct.price}
                        </p>

                        {/* Color Selection */}
                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${
                                            selectedColor === color ? "border-4 border-black" : "border-gray-300"
                                        }`}
                                        style={{
                                            backgroundColor: color.toLocaleLowerCase(),
                                            filter: "brightness(0.5)",
                                        }}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-4">
                            <p className="text-gray-700">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border ${
                                            selectedSize === size ? "bg-black text-white" : ""
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selection */}
                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                >
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button
                                    className="px-2 py-1 bg-gray-200 rounded text-lg"
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className={`py-2 px-6 rounded w-full mb-4 ${
                                isAdding ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"
                            }`}
                            disabled={isAdding}
                            onClick={handleAddToCart}
                        >
                            {isAdding ? "Adding..." : "ADD TO CART"}
                        </button>

                        {/* Product Characteristics */}
                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <h2 className="text-2xl text-center font-medium mb-4">
                        You May Also Like
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
