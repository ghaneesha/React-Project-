import { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      productName: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling wireless headphones with crystal-clear sound',
      originalPrice: '29,999',
      discountedPrice: '22,499',
      discount: '25% OFF',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      brand: 'Sony'
    },
    {
      id: 2,
      productName: 'Apple AirPods Pro',
      description: 'Premium earbuds with active noise cancellation and spatial audio',
      originalPrice: '21,900',
      discountedPrice: '18,999',
      discount: '13% OFF',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      brand: 'Apple'
    },
    {
      id: 3,
      productName: 'OnePlus Buds Pro',
      description: 'True wireless earphones with superior sound and comfort',
      originalPrice: '12,999',
      discountedPrice: '9,999',
      discount: '23% OFF',
      image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop',
      brand: 'OnePlus'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
            {/* Left Side - Product Info */}
            <div className="slide-left">
              <div className="product-name">{slide.productName}</div>
              <p className="product-description">{slide.description}</p>
              
              <div className="price-section">
                <span className="original-price">₹{slide.originalPrice}</span>
                <span className="discounted-price">₹{slide.discountedPrice}</span>
                <span className="discount-badge">{slide.discount}</span>
              </div>

              <button className="show-now-btn">Show Now</button>
            </div>

            {/* Right Side - Product Image */}
            <div className="slide-right">
              <div className="product-emoji">{slide.emoji}</div>
              <div className="product-brand">{slide.brand}</div>
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
