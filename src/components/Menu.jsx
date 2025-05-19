import React, { useState } from "react";

const DishesCard = ({ img, title, price, description, category, rating, discount }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        isHovered ? 'rotate-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 animate-pulse">
          -{discount}%
        </div>
      )}
      
      <div className="relative overflow-hidden h-64">
        <img
          src={img}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? 'opacity-20' : 'opacity-0'
        }`}></div>
        
        <div className={`absolute bottom-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-lg text-sm font-semibold transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          ★ {rating}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">{category}</span>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 delay-${i * 100} ${
                  i < Math.floor(rating) ? 'bg-yellow-400 scale-100' : 'bg-gray-200 scale-75'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-orange-500">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {discount ? (
              <>
                <span className="text-2xl font-bold text-green-600">${Math.round(price * (1 - discount / 100))}</span>
                <span className="text-lg text-gray-400 line-through">${price}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-800">${price}</span>
            )}
          </div>
          
          <button className={`bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-600 transform ${
            isHovered ? 'scale-105 shadow-lg' : 'scale-100'
          }`}>
            Order Now
          </button>
        </div>
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 transform transition-transform duration-500 ${
        isHovered ? 'scale-x-100' : 'scale-x-0'
      }`}></div>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Main Course', 'Appetizer', 'Dessert', 'Beverage'];
  
  const menuItems = [
    {
      img: "/api/placeholder/400/300",
      title: "Grilled Salmon Deluxe",
      price: 250,
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon butter sauce",
      category: "Main Course",
      rating: 4.8,
      discount: null
    },
    {
      img: "/api/placeholder/400/300",
      title: "Truffle Pasta Supreme",
      price: 180,
      description: "Handmade pasta with black truffle, parmesan, and wild mushrooms",
      category: "Main Course",
      rating: 4.6,
      discount: 15
    },
    {
      img: "/api/placeholder/400/300",
      title: "Chocolate Lava Cake",
      price: 120,
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      category: "Dessert",
      rating: 4.9,
      discount: null
    },
    {
      img: "/api/placeholder/400/300",
      title: "Caesar Salad Classic",
      price: 85,
      description: "Crisp romaine lettuce with house-made dressing, croutons, and parmesan",
      category: "Appetizer",
      rating: 4.4,
      discount: null
    },
    {
      img: "/api/placeholder/400/300",
      title: "Craft Beer Selection",
      price: 45,
      description: "Premium local craft beer selection with tasting notes",
      category: "Beverage",
      rating: 4.5,
      discount: 20
    },
    {
      img: "/api/placeholder/400/300",
      title: "Wagyu Beef Steak",
      price: 450,
      description: "Premium Wagyu beef cooked to your preference with roasted vegetables",
      category: "Main Course",
      rating: 5.0,
      discount: null
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative px-5 lg:px-32 py-20">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-200">
              Our Delicious Menu
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
              Discover culinary masterpieces crafted with passion and premium ingredients
            </p>
          </div>
        </div>
        
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="px-5 lg:px-32 py-12">
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
              } animate-fade-in-up`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{transitionDelay: `${index * 150 + 500}ms`}}
            >
              <DishesCard {...item} />
            </div>
          ))}
        </div>

        <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {[
            { number: '500+', label: 'Happy Customers' },
            { number: '50+', label: 'Menu Items' },
            { number: '4.8', label: 'Average Rating' },
            { number: '24/7', label: 'Service Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Menu;