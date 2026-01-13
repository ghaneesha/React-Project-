import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const { cartItems, getTotalPrice, getTotalOriginalPrice, getTotalDiscount, getCartCount } = useCart();
  const navigate = useNavigate();

  const totalOriginalPrice = getTotalOriginalPrice();
  const totalDiscountedPrice = getTotalPrice();
  const totalDiscount = getTotalDiscount();
  const itemCount = getCartCount();

  const formattedOriginal = totalOriginalPrice.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedDiscounted = totalDiscountedPrice.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedDiscount2 = totalDiscount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedTotal = totalDiscountedPrice.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="empty-cart-section">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Add some products to get started!</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-content">
        {/* Left Side - Cart Items */}
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary-section">
          <div className="summary-box">
            <h2 className="summary-title">Order Summary ({itemCount} items)</h2>

            <div className="summary-row">
              <span className="summary-label">Original Price</span>
              <span className="summary-value">₹{formattedOriginal}</span>
            </div>

            <div className="summary-row discount-row">
              <span className="summary-label">Discount Price</span>
              <span className="summary-value discount-value">- ₹{formattedDiscount2}</span>
            </div>

            <div className="summary-row delivery-row">
              <span className="summary-label">Delivery</span>
              <span className="summary-value delivery-value">Free</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total-row">
              <span className="summary-label total-label">Total Price</span>
              <span className="summary-value total-value">₹{formattedTotal}</span>
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
