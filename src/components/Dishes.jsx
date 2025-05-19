import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import drink from "../assets/img/drink.png";
import coldcoffee from "../assets/img/cold-coffee.png";
import chocolateShake from "../assets/img/chocolate-shake.png";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 " >
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Drinks 
        <img src={drink} alt="Drink Icon" className="inline-block w-8 h-8 gap-2 ml-2" />

      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={coldcoffee} title="Cold Coffee" price="200" />
        <DishesCard img={chocolateShake} title="Chocolate Shake" price="250" />
        <DishesCard img={img3} title="fasty Dish" price="150" />
        <DishesCard img={img4} title="hasty Dish" price="450" />
        <DishesCard img={img5} title="hasty Dish" price="500" />
        <DishesCard img={img6} title="sasty Dish" price="150" />
      </div>
    </div>
  );
};

export default Dishes;



