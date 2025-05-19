import React, { useState, useEffect } from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "☕",
      title: "Premium Coffee",
      description: "Handpicked beans from sustainable farms"
    },
    {
      icon: "🥤",
      title: "Fresh Ingredients",
      description: "Locally sourced, organic ingredients"
    },
    {
      icon: "👨‍🍳",
      title: "Expert Baristas",
      description: "Skilled craftspeople perfecting every cup"
    },
    {
      icon: "🌟",
      title: "Unique Experience",
      description: "More than coffee, it's a moment of joy"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "15+", label: "Coffee Varieties" },
    { number: "5★", label: "Rating" },
    { number: "24/7", label: "Fresh Brews" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 overflow-hidden">
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-amber-200 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20">
          <div className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src={img} 
                  alt="About our cafe" 
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                ☕
              </div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white animate-pulse">
                ✨
              </div>
            </div>
          </div>

          <div className={`space-y-8 lg:pt-14 max-w-2xl transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase animate-pulse">
                  Why Choose Us?
                </span>
              </div>
              <h1 className="font-bold text-5xl md:text-6xl text-center md:text-start bg-gradient-to-r from-gray-800 via-orange-700 to-amber-800 bg-clip-text text-transparent leading-tight">
                Crafting Excellence
                <span className="block text-orange-600">In Every Cup</span>
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed text-center md:text-start">
              At our cafe, it's not just about drinks—it's about delivering moments of joy
              in every sip. We blend the finest handpicked coffee beans and the freshest ingredients
              to craft beverages that awaken your senses and warm your soul. Whether you're
              craving the bold aroma of freshly brewed coffee or the creamy indulgence of our
              signature shakes, we've got something to match every mood.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-orange-100 to-amber-100 border-orange-300 shadow-lg'
                      : 'bg-white border-gray-200 hover:border-orange-200 hover:shadow-md'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="text-2xl mb-2 transform transition-transform duration-300 hover:scale-125">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold text-orange-600 mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <Button title="Learn More" />
                </div>
                <button className="px-6 py-3 border-2 border-orange-400 text-orange-600 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Visit Us Today
                </button>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-l-4 border-orange-400">
                <p className="text-sm text-gray-700 italic">
                  <span className="font-semibold text-orange-600">Our Promise:</span> Passion drives our process,
                  quality defines our taste, and satisfaction is our guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-orange-600">
            <div className="w-12 h-px bg-orange-300"></div>
            <span className="text-2xl animate-spin">☀️</span>
            <div className="w-12 h-px bg-orange-300"></div>
          </div>
          <p className="mt-4 text-gray-500 text-sm">Experience the difference, one cup at a time</p>
        </div>
      </div>
    </div>
  );
};

export default About;