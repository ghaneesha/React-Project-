import { useCart } from "../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item-box">
      {/* Product Image */}
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        
        <div className="cart-item-prices">
          <span className="cart-item-discounted">₹{item.discountedPrice}</span>
          <span className="cart-item-original">₹{item.price}</span>
        </div>

        {/* Quantity Controls */}
        <div className="quantity-control">
          <button 
            className="qty-btn" 
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span className="qty-display">{item.quantity}</span>
          <button className="qty-btn" onClick={handleIncrement}>+</button>
        </div>
      </div>

      {/* Delete Button */}
      <button className="delete-icon-btn" onClick={handleDelete} aria-label="Remove item">
        🗑️
      </button>
    </div>
  );
}