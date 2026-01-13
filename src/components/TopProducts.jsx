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
    
    { id: 1, name: "JBL Live 660Nc", type: "Headphones", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463749_rd.jpg", rating: 5, discountedPrice: "9,999",Price:  " 14,499", description: "Wireless Over-Ear NC Headphones" },
    { id: 2, name: "boAt Rockerz 518", type: "Headphones", image: "https://5.imimg.com/data5/IH/LW/KV/SELLER-92163150/boat-rockerz-510-wireless-bluetooth-headphones-black--1000x1000.jpg", rating: 4, discountedPrice: "1,999", Price: "3,999", description: "On-Ear wireless Headphones" },
    {id:3 ,name:"boAt Airdopes 131", type:"Earbuds",image:"https://m.media-amazon.com/images/I/512jrg8-68L._AC_.jpg",rating: 5,discountedPrice:  "1,099", Price: "2,990", description: "Wireless In-Ear Earbuds" },
    { id: 4, name: "boAt BassHeads 110", type: "Earphones", image: "https://5.imimg.com/data5/SELLER/Default/2021/9/WK/TP/LK/10044338/04-500x500.png", rating: 4, discountedPrice: "449", Price: "999", description: "In Ear Wired Earphones" },

    
    { id: 5, name: "boAt Rockerz 410", type: "Headphones", image: "https://shop4deal.in/uploads/products/1598519541.5f4778f591bdc.jpg", rating: 5, discountedPrice:  "1,599", Price: "2,999", description: "Bluetooth & wired On-Ear Headphones" },
    { id: 6, name: "JBL Live 200BT", type: "Neckbands", image: "https://telecominox.in/wp-content/uploads/2022/05/111-3.jpg", rating: 4, discountedPrice:  "3,699", Price: "5,299", description: "In-EarWireless Neckbands" },
    { id: 7, name: "Sony WH-XB910N", type: "Headphones", image: "https://www.sony.com.tw/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320", rating: 4, discountedPrice: "13,489", Price: "19,499", description: "Wireless over-Ear Headphones" },
    { id: 8, name: "JBL Tune 760NC", type: "Headphones", image: "https://www.bhphotovideo.com/images/images2500x2500/jbl_jblt760ncbluam_tune_760nc_noise_canceling_wireless_1640765.jpg", rating: 3, discountedPrice:  "6,999", Price: "4,999", description: "Wireless over-Ear NC Headphones" },

    
    
    { id: 9, name: "boAt Rockerz 255", type:"Neckbands", image:"http://www.boat-lifestyle.com/cdn/shop/products/255red-PhotoRoom.png-PhotoRoom.png?v=1685699388",rating: 4,discountedPrice:  "999", Price: "1,999", description: "In-Ear Wireless Neckbands" },
    { id: 10, name: "JBL Wave 100", type: "Earbuds", image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/3/f3b21b8JBLW100TWSBLUIN_1.jpg", rating: 3, discountedPrice: "899", Price: "2,990", description: "In-Ear Truly Wireless Earbuds" },

    
    { id: 11, name: "Sony WF-1000XM4", type: "Headphones", image:"https://tse1.mm.bing.net/th/id/OIP.8ngRwElvMc6YA9aPqvj8lwHaEK?pid=Api&P=0&h=180", rating: 4, discountedPrice:  "19,999", Price: "24,499", description: "Wireless over-Ear NC Headphones" },
    { id: 12, name: "Browse All Products", type: "browse", image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop", rating: 0,discountedPrice:  "", Price: "", description: "" }
  ];

  const filteredProducts = activeFilter === "All" 
    ? allProducts 
    : allProducts.filter(p => p.type === activeFilter);

  const displayProducts = activeFilter === "All" ? allProducts : filteredProducts;

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
        {displayProducts.map((product) => {
          if (product.type === "browse") {
            return (
              <div key={product.id} className="product-card browse-card">
                <button className="browse-btn">Browse All Products →</button>
              </div>
            );
          }

          return (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>

              {renderStars(product.rating)}

              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-price-section">
                <span className="product-original-price">₹{product.price}</span>
                <span className="product-discounted-price">₹{product.discountedPrice}</span>
              </div>

              <button 
                className={`add-to-cart-btn ${addedProductId === product.id ? "added" : ""}`}
                onClick={() => handleAddToCart(product)}
              >
                {addedProductId === product.id ? "✓ Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
