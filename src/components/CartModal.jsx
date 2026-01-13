import { useNavigate } from "react-router-dom";
import "./CartModal.css";

export default function CartModal({ onClose }) {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="cart-title">Your Cart is Empty</h2>
          <p className="cart-subtitle">Add some products to get started!</p>
          <button className="start-shopping-btn" onClick={handleStartShopping}>
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}