import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "JBL Live 660NC",
      image: "public/images/jbl-live-660-nc.png",
      originalPrice: "29,999",
      discountedPrice: "22,499",
      type: "Headphones"
    },
    {
      id: 2,
      name: "boAt Airdopes Prime 701",
      image: "public/images/boat-airdropes-prime-701.png",
      originalPrice: "3,999",
      discountedPrice: "1,074",
      type: "Earbuds"
    },
    {
      id: 3,
      name: "boAt Rockerz 480",
      image: "public/images/boat-rockerz-480.png",
      originalPrice: "3,990",
      discountedPrice: "1,299",
      type: "Headphones"
    },
    {
      id: 4,
      name: "JBL Tune 760NC",
      image: "public/images/jbl-tune-760-nc.png",
      originalPrice: "17,999",
      discountedPrice: "5,999",
      type: "Headphones"
    },
    {
      id: 5,
      name: "OnePlus Buds Pro",
      image: "public/images/oneplus-buds-pro.png",
      originalPrice: "12,999",
      discountedPrice: "9,999",
      type: "Earbuds"
    },
    {
      id: 6,
      name: "Boat Rockerz 255",
      image: "public/images/boat-rockerz-255.png",
      originalPrice: "4,999",
      discountedPrice: "3,499",
      type: "Neckbands"
    },
    {
      id: 7,
      name: "Realme Buds Air 7",
      image: "public/images/realme-buds-air-7.png",
      originalPrice: "6,999",
      discountedPrice: "4,999",
      type: "Earphones"
    },
    {
      id: 8,
      name: "Bose SoundLink",
      image: "public/images/bose-soundlink.png",
      originalPrice: "35,999",
      discountedPrice: "28,999",
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
              <div className="featured-product-card">
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