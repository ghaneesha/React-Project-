import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./TopProducts.css";

export default function TopProducts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedProductId, setAddedProductId] = useState(null);

  const allProducts = [
    { 
      id: 1, 
      name: "JBL Live 770NC", 
      type: "Headphones", 
      image: "public/images/jbl-live-770-nc.png", 
      rating: 5, 
      discountedPrice: "9,999",
      price: "14,999", 
      description: "Wireless Over-Ear NC Headphones" 
    },
    { 
      id: 2, 
      name: "boAt Rockerz 480", 
      type: "Headphones", 
      image: "public/images/boat-rockerz-480.png", 
      rating: 5, 
      discountedPrice: "1,299", 
      price: "3,990", 
      description: "On-Ear Wireless Headphones" 
    },
    {
      id: 3,
      name: "boAt Airdopes Prime 701", 
      type: "Earbuds",
      image: "public/images/boat-airdropes-prime-701.png",
      rating: 5,
      discountedPrice: "1,099", 
      price: "2,990", 
      description: "Wireless In-Ear Earbuds" 
    },
    { 
      id: 4, 
      name: "boAt BassHeads 100", 
      type: "Earphones", 
      image: "public/images/boat-bassheads-100.png", 
      rating: 4, 
      discountedPrice: "449", 
      price: "999", 
      description: "In Ear Wired Earphones" 
    },
    { 
      id: 5, 
      name: "boAt Rockerz 411", 
      type: "Headphones", 
      image: "public/images/boat-rockerz-411.png", 
      rating: 5, 
      discountedPrice: "1,599", 
      price: "2,999", 
      description: "Bluetooth & Wired On-Ear Headphones" 
    },
    { 
      id: 6, 
      name: "JBL Live 200BT", 
      type: "Neckbands", 
      image: "public/images/jbl-live-200-bt.png", 
      rating: 4, 
      discountedPrice: "3,699", 
      price: "6,299", 
      description: "In-Ear Wireless Neckbands" 
    },
    { 
      id: 7, 
      name: "Sony WH-XB910N", 
      type: "Headphones", 
      image: "public/images/Sony-WH-XB910N.png", 
      rating: 4, 
      discountedPrice: "13,489", 
      price: "19,990", 
      description: "Wireless Over-Ear Headphones" 
    },
    { 
      id: 8, 
      name: "JBL Tune 760NC", 
      type: "Headphones", 
      image: "public/images/jbl-tune-760-nc.png", 
      rating: 4, 
      discountedPrice: "5,999", 
      price: "7,999", 
      description: "Wireless Over-Ear NC Headphones" 
    },
    { 
      id: 9, 
      name: "boAt Rockerz 255", 
      type: "Neckbands", 
      image: "public/images/boat-rockerz-255.png",
      rating: 5,
      discountedPrice: "899", 
      price: "2,990", 
      description: "In-Ear Wireless Neckbands" 
    },
    { 
      id: 10, 
      name: "JBL Wave 100", 
      type: "Earbuds", 
      image: "public/images/jbl-wave-100.png", 
      rating: 4, 
      discountedPrice: "2,999", 
      price: "6,999", 
      description: "In-Ear Truly Wireless Earbuds" 
    },
    { 
      id: 11, 
      name: "Sony WF-1000XM4", 
      type: "Earbuds", 
      image: "public/images/Sony-WF-1000XM4.png", 
      rating: 3, 
      discountedPrice: "19,990", 
      price: "24,990", 
      description: "Wireless In-Ear NC Earbuds" 
    },
    { 
      id: 12, 
      name: "Browse All Products", 
      type: "browse", 
      image: "", 
      rating: 0,
      discountedPrice: "", 
      price: "", 
      description: "" 
    }
  ];

  const filteredProducts = activeFilter === "All" 
    ? allProducts 
    : allProducts.filter(p => p.type === activeFilter || p.type === "browse");

  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
        ))}
      </div>
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="top-products-section">
      <h2 className="section-title">Top Products</h2>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {["All", "Headphones", "Earbuds", "Earphones", "Neckbands"].map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          if (product.type === "browse") {
            return (
              <div key={product.id} className="product-card browse-card">
                <button className="browse-btn" onClick={() => navigate('/products')}>
                  Browse All Products →
                </button>
              </div>
            );
          }

          return (
            <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>

              {renderStars(product.rating)}

              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-price-section">
                <span className="product-discounted-price">₹{product.discountedPrice}</span>
                <span className="product-original-price">₹{product.price}</span>
              </div>

              <button 
                className={`add-to-cart-btn ${addedProductId === product.id ? "added" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                {addedProductId === product.id ? "✓ Added to Cart" : "Add to cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}