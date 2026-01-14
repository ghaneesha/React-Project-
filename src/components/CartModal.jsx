import { useNavigate } from "react-router-dom";
import "./CartModal.css";

export default function EmptyCartPage() {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/products");
  };

  return (
    <div className="empty-cart-container">
      <div className="empty-cart-content">
        {/* Red Cart Icon with X */}
        <svg 
          className="empty-cart-icon" 
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cart body */}
          <path 
            d="M40 60 L50 60 L70 140 L160 140 L175 80 L60 80" 
            stroke="#ff0000" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Cart handle */}
          <path 
            d="M50 60 L55 40" 
            stroke="#ff0000" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
          {/* Left wheel */}
          <circle 
            cx="85" 
            cy="155" 
            r="12" 
            stroke="#ff0000" 
            strokeWidth="8" 
            fill="none"
          />
          {/* Right wheel */}
          <circle 
            cx="145" 
            cy="155" 
            r="12" 
            stroke="#ff0000" 
            strokeWidth="8" 
            fill="none"
          />
          {/* X mark - first line */}
          <line 
            x1="95" 
            y1="85" 
            x2="135" 
            y2="125" 
            stroke="#ff0000" 
            strokeWidth="10" 
            strokeLinecap="round"
          />
          {/* X mark - second line */}
          <line 
            x1="135" 
            y1="85" 
            x2="95" 
            y2="125" 
            stroke="#ff0000" 
            strokeWidth="10" 
            strokeLinecap="round"
          />
        </svg>

        <h2 className="empty-cart-title">Your Cart is Empty</h2>
        
        <button className="start-shopping-button" onClick={handleStartShopping}>
          Start Shopping
        </button>
      </div>
    </div>
  );
}