// import React from "react";
// import { BsStarFill } from "react-icons/bs";
// import { BsStarHalf } from "react-icons/bs";
// import Button from "../layouts/Button";

// const DishesCard = (props) => {
//   return (
//     <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
//       <img className=" rounded-xl" src={props.img} alt="img" />
//       <div className=" space-y-4">
//         <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
//         <div className=" flex flex-row justify-center">
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarFill className=" text-brightColor" />
//           <BsStarHalf className=" text-brightColor" />
//         </div>
//         <div className=" flex flex-row items-center justify-center gap-4">
//           <h3 className=" font-semibold text-lg">{props.price}</h3>
//           <Button title="Buy Now" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishesCard;


import React from "react";
import { useCart } from "../context/CartContext";

const DishesCard = ({ img, title, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ img, title, price });
  };

  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="font-semibold mt-3 text-lg">{title}</h2>
      <p className="text-orange-500 mt-1">⭐️⭐️⭐️⭐️☆</p>
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
