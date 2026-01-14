import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("specifications");
  const [showScrollUp, setShowScrollUp] = useState(false);

  // All products data with multiple images
  const allProducts = [
    { 
      id: 1, 
      name: "JBL Live 770NC", 
      brand: "JBL", 
      category: "Headphones", 
      images: [
        "/images/jbl-live-770-nc.png",
        "/images/jbl-live-770-nc-1.jpg",
        "/images/jbl-live-770-nc-2.jpg",
        "/images/jbl-live-770-nc-3.jpg"
      ],
      image: "/images/jbl-live-770-nc.png",
      rating: 5, 
      discountedPrice: 9999, 
      price: 14999, 
      description: "Wireless Over-Ear NC Headphones", 
      type: "Over Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 2, 
      name: "Apple AirPods Pro", 
      brand: "Apple", 
      category: "Earbuds", 
      images: [
        "/images/apple-airpods-pro.png",
        "/images/apple-airpods-pro-1.png",
        "/images/apple-airpods-pro-2.png",
        "/images/apple-airpods-pro-3.png"
      ],
      image: "/images/apple-airpods-pro.png",
      rating: 5, 
      discountedPrice: 18999, 
      price: 21900, 
      description: "Premium Sound. Unmatched Comfort.", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 3, 
      name: "OnePlus Buds Pro", 
      brand: "OnePlus", 
      category: "Earbuds", 
      images: [
        "/images/oneplus-buds-pro.png",
        "/images/oneplus-buds-pro-1.png",
        "/images/oneplus-buds-pro-2.png",
        "/images/oneplus-buds-pro-3.png"
      ],
      image: "/images/oneplus-buds-pro.png",
      rating: 5, 
      discountedPrice: 9999, 
      price: 12999, 
      description: "True Wireless Earbuds", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 4, 
      name: "boAt Airdopes Prime 701", 
      brand: "BoAt", 
      category: "Earbuds", 
      images: [
        "/images/boat-airdropes-prime-701.png",
        "/images/boat-airdropes-prime-701-1.png",
        "/images/boat-airdropes-prime-701-2.png",
        "/images/boat-airdropes-prime-701-3.png"
      ],
      image: "/images/boat-airdropes-prime-701.png",
      rating: 5, 
      discountedPrice: 1074, 
      price: 3999, 
      description: "Wireless In-Ear Earbuds", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 5, 
      name: "boAt Rockerz 480", 
      brand: "BoAt", 
      category: "Headphones", 
      images: [
        "/images/boat-rockerz-480.png",
        "/images/boat-rockerz-480-1.png",
        "/images/boat-rockerz-480-2.png",
        "/images/boat-rockerz-480-3.png"
      ],
      image: "/images/boat-rockerz-480.png",
      rating: 5, 
      discountedPrice: 1299, 
      price: 3990, 
      description: "On-Ear Wireless Headphones", 
      type: "On Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 6, 
      name: "JBL Tune 760NC", 
      brand: "JBL", 
      category: "Headphones", 
      images: [
        "/images/jbl-tune-760-nc.png",
        "/images/jbl-tune-760-nc-1.png",
        "/images/jbl-tune-760-nc-2.png",
        "/images/jbl-tune-760-nc-3.png"
      ],
      image: "/images/jbl-tune-760-nc.png",
      rating: 4, 
      discountedPrice: 5999, 
      price: 7999, 
      description: "Wireless Over-Ear NC Headphones", 
      type: "Over Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 7, 
      name: "boAt Rockerz 255", 
      brand: "BoAt", 
      category: "Neckbands", 
      images: [
        "/images/boat-rockerz-255.png",
        "/images/boat-rockerz-255-1.png",
        "/images/boat-rockerz-255-2.png",
        "/images/boat-rockerz-255-3.png"
      ],
      image: "/images/boat-rockerz-255.png",
      rating: 5, 
      discountedPrice: 899, 
      price: 2990, 
      description: "In-Ear Wireless Neckbands", 
      type: "Neckband", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 8, 
      name: "Realme Buds Air 7", 
      brand: "Realme", 
      category: "Earbuds", 
      images: [
        "/images/realme-buds-air-7.png",
        "/images/realme-buds-air-7-1.png",
        "/images/realme-buds-air-7-2.png",
        "/images/realme-buds-air-7-3.png"
      ],
      image: "/images/realme-buds-air-7.png",
      rating: 4, 
      discountedPrice: 4999, 
      price: 6999, 
      description: "Wireless Earbuds", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 9, 
      name: "Bose SoundLink", 
      brand: "Bose", 
      category: "Headphones", 
      images: [
        "/images/bose-soundlink.png",
        "/images/bose-soundlink-1.png",
        "/images/bose-soundlink-2.png",
        "/images/bose-soundlink-3.png"
      ],
      image: "/images/bose-soundlink.png",
      rating: 5, 
      discountedPrice: 28999, 
      price: 35999, 
      description: "Wireless Headphones", 
      type: "Over Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 10, 
      name: "boAt BassHeads 100", 
      brand: "BoAt", 
      category: "Earphones", 
      images: [
        "/images/boat-bassheads-100.png",
        "/images/boat-bassheads-100-1.png",
        "/images/boat-bassheads-100-2.png",
        "/images/boat-bassheads-100-3.png"
      ],
      image: "/images/boat-bassheads-100.png",
      rating: 4, 
      discountedPrice: 449, 
      price: 999, 
      description: "In Ear Wired Earphones", 
      type: "In Ear", 
      connectivity: "Wired", 
      microphone: "Yes" 
    },
    { 
      id: 11, 
      name: "boAt Rockerz 411", 
      brand: "BoAt", 
      category: "Headphones", 
      images: [
        "/images/boat-rockerz-411.png",
        "/images/boat-rockerz-411-1.png",
        "/images/boat-rockerz-411-2.png",
        "/images/boat-rockerz-411-3.png"
      ],
      image: "/images/boat-rockerz-411.png",
      rating: 5, 
      discountedPrice: 1599, 
      price: 2990, 
      description: "Bluetooth & Wired On-Ear Headphones", 
      type: "On Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 12, 
      name: "JBL Live 200BT", 
      brand: "JBL", 
      category: "Neckbands", 
      images: [
        "/images/jbl-live-200-bt.png",
        "/images/jbl-live-200-bt-1.png",
        "/images/jbl-live-200-bt-2.png",
        "/images/jbl-live-200-bt-3.png"
      ],
      image: "/images/jbl-live-200-bt.png",
      rating: 4, 
      discountedPrice: 3699, 
      price: 6299, 
      description: "In-Ear Wireless Neckbands", 
      type: "Neckband", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 13, 
      name: "Sony WH-XB910N", 
      brand: "Sony", 
      category: "Headphones", 
      images: [
        "/images/Sony-WH-XB910N.png",
        "/images/Sony-WH-XB910N-1.png",
        "/images/Sony-WH-XB910N-2.png",
        "/images/Sony-WH-XB910N-3.png"
      ],
      image: "/images/Sony-WH-XB910N.png",
      rating: 4, 
      discountedPrice: 13489, 
      price: 19990, 
      description: "Wireless Over-Ear Headphones", 
      type: "Over Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 14, 
      name: "JBL Wave 100", 
      brand: "JBL", 
      category: "Earbuds", 
      images: [
        "/images/jbl-wave-100.png",
        "/images/jbl-wave-100-1.png",
        "/images/jbl-wave-100-2.png",
        "/images/jbl-wave-100-3.png"
      ],
      image: "/images/jbl-wave-100.png",
      rating: 4, 
      discountedPrice: 2999, 
      price: 6999, 
      description: "In-Ear Truly Wireless Earbuds", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
    { 
      id: 15, 
      name: "Sony WF-1000XM4", 
      brand: "Sony", 
      category: "Earbuds", 
      images: [
        "/images/Sony-WF-1000XM4.png",
        "/images/Sony-WF-1000XM4-1.png",
        "/images/Sony-WF-1000XM4-2.png",
        "/images/Sony-WF-1000XM4-3.png"
      ],
      image: "/images/Sony-WF-1000XM4.png",
      rating: 5, 
      discountedPrice: 19990, 
      price: 24990, 
      description: "Wireless In-Ear NC Earbuds", 
      type: "In Ear", 
      connectivity: "Wireless", 
      microphone: "Yes" 
    },
  ];

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Atharva Kumar",
      rating: 5,
      date: "4 Aug 2022",
      text: "Sound is awesome and as I expected, love it."
    },
    {
      id: 2,
      name: "Ritika Sen",
      rating: 5,
      date: "15 July 2022",
      text: "Very good and awesome product"
    },
    {
      id: 3,
      name: "Bhavesh Joshi",
      rating: 4,
      date: "10 June 2022",
      text: "Super amazing product !!!"
    },
    {
      id: 4,
      name: "Anandi Gupta",
      rating: 4,
      date: "6 May 2022",
      text: "Excellent quality and great value for money"
    },
    {
      id: 5,
      name: "Rohan Singh",
      rating: 5,
      date: "28 April 2022",
      text: "Best purchase ever, highly recommended to everyone"
    }
  ];

  // Handle scroll up
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-container">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <button onClick={() => navigate('/')}>Go Back Home</button>
        </div>
      </div>
    );
  }

  // Use multiple images or fallback to single image
  const thumbnails = product.images || [product.image];
  const hasMultipleImages = thumbnails.length > 1;

  // Get related products (same category)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
        ))}
      </div>
    );
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      discountedPrice: formatPrice(product.discountedPrice),
      price: formatPrice(product.price)
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

  return (
    <div className="product-details-page">
      {/* Main Product Section */}
      <div className="product-main-section">
        {/* Left: Image Gallery */}
        <div className="product-image-section">
          {hasMultipleImages && (
            <div className="thumbnail-list">
              {thumbnails.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
          <div className="main-image">
            <img src={thumbnails[selectedImage]} alt={product.name} />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-subtitle">{product.description}</p>

          <div className="product-rating-section">
            {renderStars(product.rating)}
            <span className="rating-count">| 1234 Ratings</span>
          </div>

          <div className="product-price-section">
            <span className="current-price">₹{formatPrice(product.discountedPrice)}</span>
            <span className="original-price">₹{formatPrice(product.price)}</span>
          </div>

          <div className="product-savings">
            <span className="savings-text">You Save: ₹{formatPrice(product.price - product.discountedPrice)} ({discount}%)</span>
            <span className="tax-info">(Inclusive of all taxes)</span>
          </div>

          <div className="stock-status">
            <span className="in-stock">✓ In Stock</span>
          </div>

          <div className="offers-section">
            <h3>Offers and Discounts</h3>
            <div className="offer-badges">
              <div className="offer-badge">No Cost EMI on Credit Card</div>
              <div className="offer-badge">Pay Later & Avail Cashback</div>
            </div>
          </div>

          <button 
            className={`add-to-cart-main ${addedToCart ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {addedToCart ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs-section">
        <div className="tabs-header">
          <button
            className={`tab-btn ${activeTab === "specifications" ? "active" : ""}`}
            onClick={() => setActiveTab("specifications")}
          >
            Specifications
          </button>
          <button
            className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tabs-content">
          {activeTab === "specifications" && (
            <div className="specifications-table">
              <div className="spec-row">
                <span className="spec-label">Brand</span>
                <span className="spec-value">{product.brand}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Model</span>
                <span className="spec-value">{product.name}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Generic Name</span>
                <span className="spec-value">{product.category}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Headphone Type</span>
                <span className="spec-value">{product.type}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Connectivity</span>
                <span className="spec-value">{product.connectivity}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Microphone</span>
                <span className="spec-value">{product.microphone}</span>
              </div>
            </div>
          )}

          {activeTab === "overview" && (
            <div className="overview-content">
              <h3>The {product.name} {product.category} provides with fabulous sound quality</h3>
              <ul>
                <li>Sound Tuned to Perfection</li>
                <li>Comfortable to Wear</li>
                <li>Long Hours Playback Time</li>
              </ul>
              <p>Buy the <strong>{product.name}</strong> {product.category} which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these {product.category} giving you a truly awesome audio experience. It blends with exceptional sound quality and a range of smart features for an unrivalled listening experience.</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="reviews-content">
              <div className="reviews-container-tab">
                {reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-avatar"></div>
                    <div className="review-content">
                      <div className="review-header">
                        <h3 className="review-name">{review.name}</h3>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`review-star ${i < review.rating ? "filled" : ""}`}>★</span>
                          ))}
                        </div>
                        <span className="review-date">| {review.date}</span>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products-section">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product-card">
              <div className="related-product-image">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
              </div>
              {renderStars(relatedProduct.rating)}
              <h3>{relatedProduct.name}</h3>
              <p className="related-product-desc">{relatedProduct.description}</p>
              <div className="related-product-prices">
                <span className="related-price">₹{formatPrice(relatedProduct.discountedPrice)}</span>
                <span className="related-original-price">₹{formatPrice(relatedProduct.price)}</span>
              </div>
              <button 
                className="related-add-btn"
                onClick={() => {
                  addToCart({
                    ...relatedProduct,
                    discountedPrice: formatPrice(relatedProduct.discountedPrice),
                    price: formatPrice(relatedProduct.price)
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages Section */}
      <div className="advantages-section">
        <h2>Our Advantages</h2>
        <div className="advantages-grid">
          <div className="advantage-item">
            <span className="advantage-icon">🚚</span>
            <h4>Express Delivery</h4>
            <p>Ships in 24 Hours</p>
          </div>
          <div className="advantage-item">
            <span className="advantage-icon">🛡️</span>
            <h4>Brand Warranty</h4>
            <p>100% Original products</p>
          </div>
          <div className="advantage-item">
            <span className="advantage-icon">🏷️</span>
            <h4>Exciting Deals</h4>
            <p>On all prepaid orders</p>
          </div>
          <div className="advantage-item">
            <span className="advantage-icon">🔒</span>
            <h4>Secure Payments</h4>
            <p>SSL / Secure certificate</p>
          </div>
        </div>
      </div>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <button className="scroll-up-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}