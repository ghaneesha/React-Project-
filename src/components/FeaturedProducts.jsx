import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "JBL Live 770NC",
      image: "public/images/jbl-live-770-nc.png",
      originalPrice: "14,999",
      discountedPrice: "9,999",
      type: "Headphones"
    },
    {
      id: 2,
      name: "Apple AirPods Pro",
      image: "public/images/apple-airpods-pro.png",
      originalPrice: "21,900",
      discountedPrice: "18,999",
      type: "Earbuds"
    },
    {
      id: 3,
      name: "OnePlus Buds Pro",
      image: "public/images/oneplus-buds-pro.png",
      originalPrice: "12,999",
      discountedPrice: "9,999",
      type: "Earbuds"
    },
    {
      id: 4,
      name: "boAt Airdopes Prime 701",
      image: "public/images/boat-airdropes-prime-701.png",
      originalPrice: "3,999",
      discountedPrice: "1,074",
      type: "Earbuds"
    },
    {
      id: 5,
      name: "boAt Rockerz 480",
      image: "public/images/boat-rockerz-480.png",
      originalPrice: "3,990",
      discountedPrice: "1,299",
      type: "Headphones"
    },
    {
      id: 6,
      name: "JBL Tune 760NC",
      image: "public/images/jbl-tune-760-nc.png",
      originalPrice: "7,999",
      discountedPrice: "5,999",
      type: "Headphones"
    },
    {
      id: 7,
      name: "boAt Rockerz 255",
      image: "public/images/boat-rockerz-255.png",
      originalPrice: "2,990",
      discountedPrice: "899",
      type: "Neckbands"
    },
    {
      id: 11,
      name: "boAt Rockerz 411",
      image: "public/images/boat-rockerz-411.png",
      originalPrice: "2,990",
      discountedPrice: "1,599",
      type: "Headphones"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false, // DISABLED - all cards same size initially
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="featured-section">
      <h2 className="section-title">Featured Products</h2>
      
      <div className="featured-slider-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className="featured-product-card" onClick={() => navigate(`/product/${product.id}`)} style={{ cursor: 'pointer' }}>
                <div className="featured-image-wrapper">
                  <img src={product.image} alt={product.name} className="featured-product-image" />
                </div>
                <h3 className="featured-product-name">{product.name}</h3>
                <div className="featured-price-section">
                  <span className="featured-discounted-price">₹{product.discountedPrice}</span>
                  <span className="featured-original-price">₹{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}