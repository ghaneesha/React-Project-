import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "JBL Live 660NC",
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463749_rd.jpg",
      originalPrice: "29,999",
      discountedPrice: "22,499",
      type: "Headphones"
    },
    {
      id: 2,
      name: "Apple AirPods Pro",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      originalPrice: "21,900",
      discountedPrice: "18,999",
      type: "Earbuds"
    },
    {
      id: 3,
      name: "OnePlus Buds Pro",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
      originalPrice: "12,999",
      discountedPrice: "9,999",
      type: "Earbuds"
    },
    {
      id: 4,
      name: "Samsung Galaxy Buds2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      originalPrice: "14,999",
      discountedPrice: "11,499",
      type: "Earbuds"
    },
    {
      id: 5,
      name: "JBL Tune 750",
      image: "https://images.unsplash.com/photo-1488148527816-4ae80d86a0d4?w=400&h=400&fit=crop",
      originalPrice: "10,999",
      discountedPrice: "7,999",
      type: "Headphones"
    },
    {
      id: 6,
      name: "Boat Rockerz 255",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=400&fit=crop",
      originalPrice: "4,999",
      discountedPrice: "3,499",
      type: "Neckbands"
    },
    {
      id: 7,
      name: "Realme Buds Air 3",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      originalPrice: "6,999",
      discountedPrice: "4,999",
      type: "Earphones"
    },
    {
      id: 8,
      name: "Bose SoundLink",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop",
      originalPrice: "35,999",
      discountedPrice: "28,999",
      type: "Headphones"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
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
            <div key={product.id} className="featured-product-card">
              <div className="featured-image-wrapper">
                <img src={product.image} alt={product.name} className="featured-product-image" />
              </div>
              <h3 className="featured-product-name">{product.name}</h3>
              <div className="featured-price-section">
                <span className="featured-original-price">₹{product.originalPrice}</span>
                <span className="featured-discounted-price">₹{product.discountedPrice}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
