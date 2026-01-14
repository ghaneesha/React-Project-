import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  // All products data for search
  const allProducts = [
    { id: 1, name: "JBL Live 770NC", brand: "JBL", category: "Headphones", image: "/images/jbl-live-770-nc.png", rating: 5, discountedPrice: 9999, price: 14999, description: "Wireless Over-Ear NC Headphones" },
    { id: 2, name: "Apple AirPods Pro", brand: "Apple", category: "Earbuds", image: "/images/apple-airpods-pro.png", rating: 5, discountedPrice: 18999, price: 21900, description: "Premium Sound. Unmatched Comfort." },
    { id: 3, name: "OnePlus Buds Pro", brand: "OnePlus", category: "Earbuds", image: "/images/oneplus-buds-pro.png", rating: 5, discountedPrice: 9999, price: 12999, description: "True Wireless Earbuds" },
    { id: 4, name: "boAt Airdopes Prime 701", brand: "BoAt", category: "Earbuds", image: "/images/boat-airdropes-prime-701.png", rating: 5, discountedPrice: 1074, price: 3999, description: "Wireless In-Ear Earbuds" },
    { id: 5, name: "boAt Rockerz 480", brand: "BoAt", category: "Headphones", image: "/images/boat-rockerz-480.png", rating: 5, discountedPrice: 1299, price: 3990, description: "On-Ear Wireless Headphones" },
    { id: 6, name: "JBL Tune 760NC", brand: "JBL", category: "Headphones", image: "/images/jbl-tune-760-nc.png", rating: 4, discountedPrice: 5999, price: 7999, description: "Wireless Over-Ear NC Headphones" },
    { id: 7, name: "boAt Rockerz 255", brand: "BoAt", category: "Neckbands", image: "/images/boat-rockerz-255.png", rating: 5, discountedPrice: 899, price: 2990, description: "In-Ear Wireless Neckbands" },
    { id: 8, name: "Realme Buds Air 7", brand: "Realme", category: "Earbuds", image: "/images/realme-buds-air-7.png", rating: 4, discountedPrice: 4999, price: 6999, description: "Wireless Earbuds" },
    { id: 9, name: "Bose SoundLink", brand: "Bose", category: "Headphones", image: "/images/bose-soundlink.png", rating: 5, discountedPrice: 28999, price: 35999, description: "Wireless Headphones" },
    { id: 10, name: "boAt BassHeads 100", brand: "BoAt", category: "Earphones", image: "/images/boat-bassheads-100.png", rating: 4, discountedPrice: 449, price: 999, description: "In Ear Wired Earphones" },
    { id: 11, name: "boAt Rockerz 411", brand: "BoAt", category: "Headphones", image: "/images/boat-rockerz-411.png", rating: 5, discountedPrice: 1599, price: 2999, description: "Bluetooth & Wired On-Ear Headphones" },
    { id: 12, name: "JBL Live 200BT", brand: "JBL", category: "Neckbands", image: "/images/jbl-live-200-bt.png", rating: 4, discountedPrice: 3699, price: 6299, description: "In-Ear Wireless Neckbands" },
    { id: 13, name: "Sony WH-XB910N", brand: "Sony", category: "Headphones", image: "/images/Sony-WH-XB910N.png", rating: 4, discountedPrice: 13489, price: 19990, description: "Wireless Over-Ear Headphones" },
    { id: 14, name: "JBL Wave 100", brand: "JBL", category: "Earbuds", image: "/images/jbl-wave-100.png", rating: 4, discountedPrice: 2999, price: 6999, description: "In-Ear Truly Wireless Earbuds" },
    { id: 15, name: "Sony WF-1000XM4", brand: "Sony", category: "Earbuds", image: "/images/Sony-WF-1000XM4.png", rating: 3, discountedPrice: 19990, price: 24990, description: "Wireless In-Ear NC Earbuds" },
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogoClick = () => {
    setShowSearch(false);
    setHoverProfile(false);
    setShowLoginForm(false);
    setShowSignupForm(false);
    navigate('/');
  };

  const closeSearch = () => {
    setShowSearch(false);
    setSearchQuery("");
  };

  const handleProductClick = (productId) => {
    closeSearch();
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left" onClick={handleLogoClick}>
          Tech-Shop
        </div>

        <div className="nav-right">
          {/* Search Icon */}
          <div
            className="nav-icon-wrapper"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <span className="tooltip">Search</span>
          </div>

          {/* Cart Icon */}
          <div 
            className="nav-icon-wrapper"
            onClick={() => navigate('/cart')}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span className="tooltip">Cart</span>
          </div>

          {/* Profile Icon */}
          <div
            className="nav-icon-wrapper"
            onMouseEnter={() => setHoverProfile(true)}
            onMouseLeave={() => setHoverProfile(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="tooltip">Account</span>
            
            {/* Profile box appears on hover */}
            {hoverProfile && (
              <div className="profile-box">
                <p className="profile-title">Hello!</p>
                <p className="profile-subtext">
                  Access account and manage orders
                </p>
                <button 
                  className="login-btn"
                  onClick={() => {
                    setShowLoginForm(true);
                    setHoverProfile(false);
                  }}
                >
                  Login / Signup
                </button>
                <p className="profile-login-text">Please Login</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {showSearch && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <button className="search-close-btn" onClick={closeSearch}>×</button>
            <div className="search-input-container">
              <input 
                type="text" 
                placeholder="Search for products, brands, categories..." 
                className="search-input-modal"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Search Results */}
            {searchQuery && (
              <div className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className="search-result-item"
                      onClick={() => handleProductClick(product.id)}
                    >
                      <img src={product.image} alt={product.name} className="search-result-image" />
                      <div className="search-result-info">
                        <h4 className="search-result-name">{product.name}</h4>
                        <p className="search-result-brand">{product.brand} • {product.category}</p>
                        <p className="search-result-price">₹{product.discountedPrice.toLocaleString('en-IN')}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results">
                    <p>No products found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Form Modal */}
      {showLoginForm && (
        <LoginForm 
          onClose={() => setShowLoginForm(false)}
          onSignupClick={() => {
            setShowLoginForm(false);
            setShowSignupForm(true);
          }}
        />
      )}

      {/* Signup Form Modal */}
      {showSignupForm && (
        <SignupForm 
          onClose={() => setShowSignupForm(false)}
          onLoginClick={() => {
            setShowSignupForm(false);
            setShowLoginForm(true);
          }}
        />
      )}
    </>
  );
}

export default Navbar;