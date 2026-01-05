import "./SignupForm.css";

export default function SignupForm({ onClose, onLoginClick }) {
  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2 className="signup-title">Signup</h2>
        
        <p className="login-text">
          Already have an account? <span className="login-link" onClick={onLoginClick}>Login</span>
        </p>

        <div className="signup-form">
          <input 
            type="text" 
            placeholder="Username" 
            className="signup-input"
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="signup-input"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input"
          />
          
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="signup-input"
          />
          
          <button className="signup-button">Signup</button>
        </div>

        <div className="divider">or login with</div>

        <div className="social-signup">
          <button className="social-btn facebook">f</button>
          <button className="social-btn google">G</button>
          <button className="social-btn twitter">𝕏</button>
        </div>
      </div>
    </div>
  );
}
