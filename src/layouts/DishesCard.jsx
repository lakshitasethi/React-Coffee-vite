
import React from "react";
import { useCart } from "../context/CartContext";

const DishesCard = ({ img, title, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ img, title, price });
  };

  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow">
      <img src={img} alt={title} className="w-full h-25 object-cover rounded" />
      <h2 className="font-semibold mt-3 text-lg">{title}</h2>
      {/* <p className="text-orange-500 mt-1">⭐️⭐️⭐️⭐️☆</p> */}
      <div className="flex justify-between items-center mt-3">
        <span className="font-bold">{price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishesCard;
