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
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  const handleLogoClick = () => {
    setShowSearch(false);
    setHoverProfile(false);
    setShowLoginForm(false);
    setShowSignupForm(false);
    navigate('/');
  };

  const closeSearch = () => {
    setShowSearch(false);
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
                placeholder="Search for products..." 
                className="search-input-modal"
                autoFocus
              />
            </div>
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