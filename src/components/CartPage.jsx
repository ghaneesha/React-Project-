import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import EmptyCartPage from "./CartModal";
import "./CartPage.css";

export default function CartPage() {
  const { cartItems, getTotalPrice, getTotalOriginalPrice, getTotalDiscount, getCartCount } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-empty-modal-wrapper">
          <EmptyCartPage />
        </div>
      </div>
    );
  }

  const totalOriginalPrice = getTotalOriginalPrice();
  const totalDiscountedPrice = getTotalPrice();
  const totalDiscount = getTotalDiscount();
  const itemCount = getCartCount();

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <h1 className="cart-title">Cart</h1>
      </div>

      <div className="cart-content">
        {/* Left Side - Cart Items */}
        <div className="cart-items-section">
          <div className="cart-items-wrapper">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary-section">
          <div className="summary-box">
            <h2 className="summary-title">Order Summary ( {itemCount} items )</h2>

            <div className="summary-row">
              <span className="summary-label">Original Price</span>
              <span className="summary-value">₹{formatPrice(totalOriginalPrice)}</span>
            </div>

            <div className="summary-row discount-row">
              <span className="summary-label">Discount</span>
              <span className="discount-value">- ₹{formatPrice(totalDiscount)}</span>
            </div>

            <div className="summary-row delivery-row">
              <span className="summary-label">Delivery</span>
              <span className="delivery-value">Free</span>
            </div>

            <div className="summary-row total-row">
              <span className="total-label">Total Price</span>
              <span className="total-value">₹{formatPrice(totalDiscountedPrice)}</span>
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}