import React, { useState, useEffect } from "react";

const Button = ({ title }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={`px-6 py-3 bg-amber-800 text-white font-medium rounded-full 
      transform transition-all duration-300 
      ${isHovered ? "scale-110 bg-amber-700 shadow-lg" : ""}
      relative overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{title}</span>
      <span 
        className={`absolute inset-0 bg-amber-600 transform transition-transform duration-300 
        ${isHovered ? "scale-x-100" : "scale-x-0"} origin-left`}
      />
    </button>
  );
};

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/coffe.jpeg')] bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-amber-800 opacity-20 
            animate-float transform rotate-12
            ${i % 2 === 0 ? "animate-spin-slow" : "animate-bounce-slow"}`}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 20}px`,
              borderRadius: '50% 30% 50% 30%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-black opacity-30" />
      
      <div className={`w-full lg:w-2/3 space-y-5 relative z-10 
        transform transition-all duration-1000 
        ${animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="overflow-hidden">
          <h1 className={`text-white font-bold text-5xl md:text-6xl drop-shadow-lg
            transform transition-all duration-1000 delay-300
            ${animate ? "translate-y-0" : "translate-y-full"}`}>
            <span className="block mb-2 text-amber-300">A CUP OF COFFEE</span>
            <span className="block transform transition-all duration-700 delay-500">
              SHARED WITH A FRIEND IS
            </span> 
            <span className="block text-amber-300 transform transition-all duration-700 delay-700">
              HAPPINESS TASTED
            </span>
          </h1>
        </div>
        
        <p className={`text-white max-w-lg text-lg drop-shadow-md
          transform transition-all duration-1000 delay-1000
          ${animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          Experience the perfect blend of rich flavors and warm ambiance at our cozy café.
          Every sip tells a story worth sharing.
        </p>
        
        <div className={`lg:pl-30 transform transition-all duration-1000 delay-1200
          ${animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="relative">
            <div className="absolute -inset-1 bg-amber-400 rounded-full blur opacity-30 animate-pulse" />
            <Button title="Order Now" />
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-10 right-32 z-10">
        <div className="relative w-16 h-16">
          <div className="absolute bottom-0 w-16 h-12 bg-amber-900 rounded-b-full" />
          <div className="absolute bottom-8 w-16 h-4 bg-amber-800 rounded-t-full" />
          <div className="absolute -top-10 left-6 w-1 h-10 bg-white opacity-60 rounded-full animate-steam1" />
          <div className="absolute -top-16 left-10 w-1 h-16 bg-white opacity-40 rounded-full animate-steam2" />
          <div className="absolute -top-12 left-2 w-1 h-12 bg-white opacity-50 rounded-full animate-steam3" />
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(10deg); }
  }
  @keyframes steam1 {
    0% { height: 0; opacity: 0; }
    50% { height: 10px; opacity: 0.6; }
    100% { height: 0; opacity: 0; transform: translateY(-20px) translateX(5px); }
  }
  @keyframes steam2 {
    0% { height: 0; opacity: 0; }
    50% { height: 16px; opacity: 0.4; }
    100% { height: 0; opacity: 0; transform: translateY(-20px) translateX(-5px); }
  }
  @keyframes steam3 {
    0% { height: 0; opacity: 0; }
    50% { height: 12px; opacity: 0.5; }
    100% { height: 0; opacity: 0; transform: translateY(-20px); }
  }
  .animate-float { animation: float 8s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 20s linear infinite; }
  .animate-bounce-slow { animation: bounce-slow 12s ease-in-out infinite; }
  .animate-steam1 { animation: steam1 3s ease-out infinite; }
  .animate-steam2 { animation: steam2 4s ease-out 1s infinite; }
  .animate-steam3 { animation: steam3 3.5s ease-out 0.5s infinite; }
`;
document.head.appendChild(style);

export default Home;