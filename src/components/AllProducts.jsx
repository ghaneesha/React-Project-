import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./AllProducts.css";

export default function AllProducts() {
  const [sortBy, setSortBy] = useState("Featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(40000);
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const allProducts = [
    { id: 1, name: "JBL Live 770NC", brand: "JBL", category: "Headphones", image: "public/images/jbl-live-770-nc.png", rating: 5, discountedPrice: 9999, price: 14999, description: "Wireless Over-Ear NC Headphones" },
    { id: 2, name: "Apple AirPods Pro", brand: "Apple", category: "Earbuds", image: "public/images/apple-airpods-pro.png", rating: 5, discountedPrice: 18999, price: 21900, description: "Premium Sound. Unmatched Comfort." },
    { id: 3, name: "OnePlus Buds Pro", brand: "OnePlus", category: "Earbuds", image: "public/images/oneplus-buds-pro.png", rating: 5, discountedPrice: 9999, price: 12999, description: "True Wireless Earbuds" },
    { id: 4, name: "boAt Airdopes Prime 701", brand: "BoAt", category: "Earbuds", image: "public/images/boat-airdropes-prime-701.png", rating: 5, discountedPrice: 1074, price: 3999, description: "Wireless In-Ear Earbuds" },
    { id: 5, name: "boAt Rockerz 480", brand: "BoAt", category: "Headphones", image: "public/images/boat-rockerz-480.png", rating: 5, discountedPrice: 1299, price: 3990, description: "On-Ear Wireless Headphones" },
    { id: 6, name: "JBL Tune 760NC", brand: "JBL", category: "Headphones", image: "public/images/jbl-tune-760-nc.png", rating: 4, discountedPrice: 5999, price: 7999, description: "Wireless Over-Ear NC Headphones" },
    { id: 7, name: "boAt Rockerz 255", brand: "BoAt", category: "Neckbands", image: "public/images/boat-rockerz-255.png", rating: 5, discountedPrice: 899, price: 2990, description: "In-Ear Wireless Neckbands" },
    { id: 8, name: "Realme Buds Air 7", brand: "Realme", category: "Earbuds", image: "public/images/realme-buds-air-7.png", rating: 4, discountedPrice: 4999, price: 6999, description: "Wireless Earbuds" },
    { id: 9, name: "Bose SoundLink", brand: "Bose", category: "Headphones", image: "public/images/bose-soundlink.png", rating: 5, discountedPrice: 28999, price: 35999, description: "Wireless Headphones" },
    { id: 10, name: "boAt BassHeads 100", brand: "BoAt", category: "Earphones", image: "public/images/boat-bassheads-100.png", rating: 4, discountedPrice: 449, price: 999, description: "In Ear Wired Earphones" },
    { id: 11, name: "boAt Rockerz 411", brand: "BoAt", category: "Headphones", image: "public/images/boat-rockerz-411.png", rating: 5, discountedPrice: 1599, price: 2999, description: "Bluetooth & Wired On-Ear Headphones" },
    { id: 12, name: "JBL Live 200BT", brand: "JBL", category: "Neckbands", image: "public/images/jbl-live-200-bt.png", rating: 4, discountedPrice: 3699, price: 6299, description: "In-Ear Wireless Neckbands" },
    { id: 13, name: "Sony WH-XB910N", brand: "Sony", category: "Headphones", image: "public/images/Sony-WH-XB910N.png", rating: 4, discountedPrice: 13489, price: 19990, description: "Wireless Over-Ear Headphones" },
    { id: 14, name: "JBL Wave 100", brand: "JBL", category: "Earbuds", image: "public/images/jbl-wave-100.png", rating: 4, discountedPrice: 2999, price: 6999, description: "In-Ear Truly Wireless Earbuds" },
    { id: 15, name: "Sony WF-1000XM4", brand: "Sony", category: "Earbuds", image: "public/images/Sony-WF-1000XM4.png", rating: 3, discountedPrice: 19990, price: 24990, description: "Wireless In-Ear NC Earbuds" },
  ];

  const brands = ["JBL", "BoAt", "Sony", "OnePlus", "Realme", "Bose", "Apple"];
  const categories = ["Headphones", "Earbuds", "Earphones", "Neckbands"];

  // Filter products
  let filteredProducts = allProducts;
  
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedBrands.includes(p.brand));
  }
  
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedCategories.includes(p.category));
  }

  // Apply price filter
  filteredProducts = filteredProducts.filter(p => p.discountedPrice <= maxPrice);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Latest":
        return b.id - a.id;
      case "Featured":
        return a.id - b.id;
      case "Top Rated":
        return b.rating - a.rating;
      case "Price(Lowest First)":
        return a.discountedPrice - b.discountedPrice;
      case "Price(Highest First)":
        return b.discountedPrice - a.discountedPrice;
      default:
        return 0;
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? "filled" : ""}`}>★</span>
        ))}
      </div>
    );
  };

  const formatPrice = (price) => {
    return price.toLocaleString('en-IN');
  };

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      discountedPrice: formatPrice(product.discountedPrice),
      price: formatPrice(product.price)
    });
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="all-products-page">
      {/* Sidebar Filters */}
      <aside className="filters-sidebar">
        {/* Sort By */}
        <div className="filter-section">
          <h3 className="filter-heading">Sort By</h3>
          <div className="filter-options">
            {["Latest", "Featured", "Top Rated", "Price(Lowest First)", "Price(Highest First)"].map((option) => (
              <label key={option} className="filter-option">
                <input
                  type="radio"
                  name="sort"
                  checked={sortBy === option}
                  onChange={() => setSortBy(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filter By */}
        <div className="filter-section">
          <h3 className="filter-heading">Filter By</h3>
          
          {/* Brands */}
          <div className="filter-group">
            <h4 className="filter-subheading">Brands</h4>
            <div className="filter-options">
              {brands.map((brand) => (
                <label key={brand} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="filter-group">
            <h4 className="filter-subheading">Category</h4>
            <div className="filter-options">
              {categories.map((category) => (
                <label key={category} className="filter-option">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="filter-group">
            <h4 className="filter-subheading">Price</h4>
            <div className="price-filter">
              <p className="price-display">₹{formatPrice(maxPrice)}</p>
              <input
                type="range"
                min="0"
                max="40000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="price-slider"
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="products-main">
        <div className="products-grid-all">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card-all">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} />
              </div>

              {renderStars(product.rating)}

              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.description}</p>

              <div className="product-prices">
                <span className="price-discounted">₹{formatPrice(product.discountedPrice)}</span>
                <span className="price-original">₹{formatPrice(product.price)}</span>
              </div>

              <button 
                className={`btn-add-to-cart ${addedProductId === product.id ? "added" : ""}`}
                onClick={() => handleAddToCart(product)}
              >
                {addedProductId === product.id ? "✓ Added to Cart" : "Add to cart"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}