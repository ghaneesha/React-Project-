import { useCart } from "../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const discountedPrice = parseFloat(item.discountedPrice.replace(/,/g, ''));
  const itemTotal = (discountedPrice * item.quantity).toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, item.quantity - 1);
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item-box">
      <button className="delete-icon-btn" onClick={handleDelete}>×</button>

      <div className="cart-item-content">
        {/* Left Side - Product Image */}
        <div className="cart-item-image">
          <img src={item.image} alt={item.name} />
        </div>

        {/* Middle - Product Details */}
        <div className="cart-item-details">
          <h3 className="cart-item-name">{item.name}</h3>
          
          <div className="cart-item-prices">
            <span className="cart-item-original">₹{item.price}</span>
            <span className="cart-item-discounted">₹{item.discountedPrice}</span>
          </div>

          {/* Quantity Controls */}
          <div className="quantity-control">
            <button className="qty-btn" onClick={handleDecrement}>−</button>
            <span className="qty-display">{item.quantity}</span>
            <button className="qty-btn" onClick={handleIncrement}>+</button>
          </div>
        </div>

        {/* Right Side - Item Total */}
        <div className="cart-item-total">
          <p className="total-label">Total</p>
          <p className="total-price">₹{itemTotal}</p>
        </div>
      </div>
    </div>
  );
}
