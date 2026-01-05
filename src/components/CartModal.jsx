import "./CartModal.css";

export default function CartModal({ onClose }) {
  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h2 className="cart-title">Your Cart is Empty</h2>
          <button className="start-shopping-btn">Start Shopping</button>
        </div>
      </div>
    </div>
  );
}
