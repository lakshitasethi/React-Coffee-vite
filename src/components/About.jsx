import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At our cafe, it's not just about drinks—it's about delivering moments of joy 
        in every sip. We blend the finest handpicked coffee beans and the freshest ingredients 
        to craft beverages that awaken your senses and warm your soul. Whether you're 
        craving the bold aroma of freshly brewed coffee or the creamy indulgence of our 
        signature shakes, we’ve got something to match every mood. Passion drives our process, 
        quality defines our taste, and satisfaction is our promise. Choose us for a drink that’s 
        more than just refreshment—it’s an experience.
        </p>
      
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
