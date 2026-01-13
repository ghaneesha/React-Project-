import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section - Email Subscription */}
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Tech-Shop</h3>
        </div>

        <div className="footer-subscription">
          <p>Subscribe to our Email alerts to receive early discount offers,</p>
          <p>and new products info.</p>
          
          <div className="subscription-form">
            <input type="email" placeholder="Email Address*" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Middle Section - Links */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#track">Track Order</a></li>
            <li><a href="#cancel">Cancel Order</a></li>
            <li><a href="#return">Return Order</a></li>
            <li><a href="#warranty">Warranty Info</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="#return-policy">Return Policy</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#service">Service Centres</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#affiliates">Affiliates</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright and Social */}
      <div className="footer-bottom">
        <p className="copyright">2026 | All Rights Reserved.</p>
        
        <div className="social-links">
          <a href="#facebook" className="social-icon" title="Facebook">f</a>
          <a href="#twitter" className="social-icon" title="Twitter">𝕏</a>
          <a href="#instagram" className="social-icon" title="Instagram">📷</a>
          <a href="#linkedin" className="social-icon" title="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  );
}
