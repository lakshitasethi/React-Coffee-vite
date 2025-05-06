import React from "react";
import { useCart } from "../context/CartContext";

const CartScreen = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    const orderDetails = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.title}* x${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("%0A");

    const message = `🛍️ *Order Confirmation Request*%0A%0A${orderDetails}%0A%0A💰 *Total: ₹${totalPrice}*%0A%0APlease confirm the order.`;

    const phoneNumber = "919116336220"; // Replace with your own number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded shadow"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>Price: ₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.title)}
                      className="bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      −
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.title)}
                      className="bg-gray-300 text-black px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.title)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Total: ₹{totalPrice}</h3>
            <button
              onClick={handleConfirmOrder}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Confirm Order on WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
