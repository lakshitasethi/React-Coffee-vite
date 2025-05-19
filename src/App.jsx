import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import CartScreen from "./components/CartScreen"; // 👈 Cart screen
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="menu">
          <Menu />
        </div>

        {/* <div id="review">
          <Reviews />
        </div> */}

        <div id="cart">
          <CartScreen /> 
        </div>
      </main>

      <Footer />
      
    </CartProvider>
  );
};

export default App;
