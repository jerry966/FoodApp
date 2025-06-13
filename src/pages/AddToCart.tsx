import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SectionTitle from "../components/ui/SectionTitle";

// Define types for cart items
type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  quantity: number;
};

const AddToCart: React.FC = () => {
  
  // In a real app, you would fetch this from context, Redux, or localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Double Cheeseburger",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=500&h=350",
      category: "non-veg",
      quantity: 2,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500&h=350",
      category: "veg",
      quantity: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const deliveryFee = 2.99;
  const tax = 1.75;

  // Calculate totals when cart items change
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price * item.quantity;
    }, 0);
    setSubtotal(total);
  }, [cartItems]);

  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Format price to 2 decimal places
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle
        title="Your Cart"
        subtitle="Review your items before checkout"
      />

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="title-lg mb-4">Your cart is empty</h2>
          <p className="subtitle-secondary mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button to="/category/all" variant="primary">
            Browse Menu
          </Button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="title-lg">Cart Items ({cartItems.length})</h3>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 flex flex-col sm:flex-row gap-4"
                  >
                    {/* Item Image */}
                    <div className="sm:w-1/4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="sm:w-2/4 flex flex-col justify-between">
                      <div>
                        <h4 className="title-base-primary">{item.name}</h4>
                        <span
                          className={`inline-block text-xs px-2 py-1 rounded-full mt-1
                            ${
                              item.category === "veg"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                        >
                          {item.category === "veg" ? "VEG" : "NON-VEG"}
                        </span>
                      </div>

                      <div className="mt-2 flex items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center bg-gray-100">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price and Remove */}
                    <div className="sm:w-1/4 flex flex-col items-end justify-between">
                      <span className="font-bold text-main">
                        {formatPrice(
                          parseFloat(item.price.replace("$", "")) *
                            item.quantity
                        )}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="title-lg mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="subtitle-secondary">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="subtitle-secondary">Delivery Fee</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="subtitle-secondary">Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-main">
                      {formatPrice(subtotal + deliveryFee + tax)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo code input */}
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button className="bg-secondary text-white px-4 py-2 rounded-r-lg">
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout button */}
              <Button variant="primary" className="w-full justify-center">
                Proceed to Checkout
              </Button>

              <div className="mt-4 text-center">
                <Link
                  to="/category/all"
                  className="text-secondary hover:underline text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
