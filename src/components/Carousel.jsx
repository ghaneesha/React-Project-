import { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      productName: 'JBL Live 770NC',
      description: 'Keep The Noise Out, Or In. You Choose.',
      originalPrice: '14,999',
      discountedPrice: '9,999',
      image: 'public/images/jbl-live-770-nc.png'
    },
    {
      id: 2,
      productName: 'Apple AirPods Pro',
      description: 'Premium Sound. Unmatched Comfort.',
      originalPrice: '21,900',
      discountedPrice: '18,999',
      image: 'public/images/apple-airpods-pro.png'
    },
    {
      id: 3,
      productName: 'OnePlus Buds Pro',
      description: 'True Wireless Freedom.',
      originalPrice: '12,999',
      discountedPrice: '9,999',
      image: 'public/images/oneplus-buds-pro.png'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            {/* LEFT SIDE - All Product Info */}
            <div className="slide-left">
              {/* 1. Product name - SMALL WHITE */}
              <div className="product-name">{slide.productName}</div>
              
              {/* 2. Description - LARGE WHITE */}
              <p className="product-description">{slide.description}</p>
              
              {/* 3. Prices */}
              <div className="price-section">
                <span className="discounted-price">₹{slide.discountedPrice}</span>
                <span className="original-price">₹{slide.originalPrice}</span>
              </div>

              {/* 4. Shop Now button */}
              <button className="show-now-btn">Shop Now</button>
            </div>

            {/* RIGHT SIDE - Product Image Only */}
            <div className="slide-right">
              <img src={slide.image} alt={slide.productName} className="slide-image" />
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}