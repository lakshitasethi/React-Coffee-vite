import { useState, useEffect } from "react";

const drinksData = [
  {
    id: 1,
    title: "Iced Caramel Macchiato",
    description: "Sweet caramel with espresso and milk over ice",
    price: 220,
    image: "/api/placeholder/320/320",
    category: "cold"
  },
  {
    id: 2,
    title: "Chocolate Mocha Frappuccino",
    description: "Blended coffee with rich chocolate and whipped cream",
    price: 250,
    image: "/api/placeholder/320/320",
    category: "frozen"
  },
  {
    id: 3,
    title: "Vanilla Latte",
    description: "Smooth espresso with steamed milk and vanilla syrup",
    price: 190,
    image: "/api/placeholder/320/320",
    category: "hot"
  },
  {
    id: 4,
    title: "Berry Smoothie",
    description: "Blended mixed berries with yogurt and honey",
    price: 240,
    image: "/api/placeholder/320/320",
    category: "smoothie"
  },
  {
    id: 5,
    title: "Cinnamon Spice Chai",
    description: "Black tea infused with cinnamon, cloves, and steamed milk",
    price: 180,
    image: "/api/placeholder/320/320",
    category: "hot"
  },
  {
    id: 6,
    title: "Mint Cold Brew",
    description: "Slow-steeped cold brew with fresh mint flavoring",
    price: 210,
    image: "/api/placeholder/320/320",
    category: "cold"
  },
  {
    id: 7,
    title: "Matcha Green Tea Latte",
    description: "Premium matcha powder with steamed milk",
    price: 230,
    image: "/api/placeholder/320/320",
    category: "hot"
  },
  {
    id: 8,
    title: "Strawberry Açaí Refresher",
    description: "Refreshing strawberry and açaí flavors with fresh fruit",
    price: 200,
    image: "/api/placeholder/320/320",
    category: "cold"
  }
];

function CategoryButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
        active 
          ? 'bg-amber-600 text-white shadow-lg' 
          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
      }`}
    >
      {children}
    </button>
  );
}

function DrinkCard({ drink, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={drink.image} 
          alt={drink.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-300`}></div>
        <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold text-sm shadow-lg">
          ₹{drink.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-amber-900 mb-2">{drink.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{drink.description}</p>
        <button 
          onClick={onAddToCart}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function CartItem({ item, onAdd, onRemove }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-amber-100 mb-3">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-16 h-16 object-cover rounded-lg shadow-sm"
          />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-amber-900 text-lg">{item.title}</h4>
          <p className="text-amber-700 text-sm">₹{item.price} each</p>
          <p className="text-amber-800 font-medium">Total: ₹{item.quantity * item.price}</p>
        </div>
        
        <div className="flex items-center bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
          <button 
            onClick={onRemove}
            className="px-3 py-2 text-amber-700 hover:bg-amber-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <span className="w-10 text-center font-semibold text-gray-800">{item.quantity}</span>
          
          <button 
            onClick={onAdd}
            className="px-3 py-2 text-amber-700 hover:bg-amber-100 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function CartScreen({ cart, addToCart, removeFromCart, clearCart, closeCart }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalAmount(total);
  }, [cart]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeCart}></div>
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl">
        <div className="h-full flex flex-col">
          <div className="px-6 py-4 bg-amber-50 border-b border-amber-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-amber-800">Your Cart</h2>
              <button 
                onClick={closeCart}
                className="rounded-full bg-amber-100 p-2 text-amber-700 hover:bg-amber-200 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="bg-amber-100 rounded-full p-6 mb-4">
                  <svg className="w-16 h-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Your cart is empty</h3>
                <p className="text-amber-600 mb-6">Add some delicious drinks to get started!</p>
                <button 
                  onClick={closeCart}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div>
                {cart.map(item => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    onAdd={() => addToCart(item)} 
                    onRemove={() => removeFromCart(item.id)} 
                  />
                ))}
              </div>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="border-t border-amber-200 px-6 py-4 bg-amber-50">
              <div className="flex justify-between items-center text-lg font-bold mb-4">
                <span className="text-amber-800">Total:</span>
                <span className="text-amber-900 text-2xl">₹{totalAmount}</span>
              </div>
              <div className="space-y-3">
                <button className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={clearCart}
                  className="w-full py-2 px-4 border-2 border-amber-300 text-amber-700 rounded-lg hover:bg-amber-100 transition-all"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoffeeShop() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [notification, setNotification] = useState({ show: false, message: "" });

  const filteredDrinks = activeCategory === "all" 
    ? drinksData 
    : drinksData.filter(drink => drink.category === activeCategory);

  const addToCart = (drink) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === drink.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === drink.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...drink, quantity: 1 }];
      }
    });

    setNotification({ show: true, message: `${drink.title} added to cart!` });
    setTimeout(() => setNotification({ show: false, message: "" }), 2000);
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== itemId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {notification.show && (
        <div className="fixed top-20 right-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      <nav className="bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-600 transition-all duration-300 hover:scale-105"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 font-medium">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="h-[8vh] text-5xl font-bold mb-4 bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent">
            Our Signature Drinks
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted with love and premium ingredients for the perfect sip every time
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All Drinks
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'hot'} 
            onClick={() => setActiveCategory('hot')}
          >
            Hot Beverages
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'cold'} 
            onClick={() => setActiveCategory('cold')}
          >
            Cold Drinks
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'frozen'} 
            onClick={() => setActiveCategory('frozen')}
          >
            Frozen Treats
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'smoothie'} 
            onClick={() => setActiveCategory('smoothie')}
          >
            Smoothies
          </CategoryButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDrinks.map(drink => (
            <DrinkCard 
              key={drink.id} 
              drink={drink} 
              onAddToCart={() => addToCart(drink)} 
            />
          ))}
        </div>
      </main>

      {isCartOpen && (
        <CartScreen 
          cart={cart} 
          addToCart={addToCart} 
          removeFromCart={removeFromCart} 
          clearCart={clearCart}
          closeCart={closeCart}
        />
      )}
    </div>
  );
}