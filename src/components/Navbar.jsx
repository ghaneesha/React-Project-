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

  return (
    <>
      <nav className="navbar">
        <div className="nav-left" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Tech-Shop</div>

        <div className="nav-right">
          {/* Search Icon */}
          <div
            className="nav-icon-wrapper"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍
            <span className="tooltip">Search</span>
          </div>

          {/* Cart Icon */}
          <div 
            className="nav-icon-wrapper"
            onClick={() => navigate('/cart')}
          >
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            <span className="tooltip">Cart</span>
          </div>

          {/* Profile Icon */}
          <div
            className="nav-icon-wrapper"
            onMouseEnter={() => setHoverProfile(true)}
            onMouseLeave={() => setHoverProfile(false)}
          >
            👤
            {/* Profile box appears on hover */}
            {hoverProfile && (
              <div className="profile-box">
                <p className="profile-title">Hello!</p>
                <p className="profile-subtext">
                  Access account and manage orders
                </p>
                <button 
                  className="login-btn"
                  onClick={() => setShowLoginForm(true)}
                >
                  Login / Signup
                </button>
                <p className="profile-login-text">Please Login</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      {showSearch && (
        <div className="search-overlay">
          <div className="search-modal">
            <div className="search-input-container">
              <input 
                type="text" 
                placeholder="Search for product...." 
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
