import "./SignupForm.css";

export default function SignupForm({ onClose, onLoginClick }) {
  return (
    <div className="signup-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2 className="signup-title">Signup</h2>
        
        <p className="login-text">
          Already have an account? <span className="login-link" onClick={onLoginClick}>Login</span>
        </p>

        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Username" 
            className="signup-input"
            required
          />
          
          <input 
            type="email" 
            placeholder="Email" 
            className="signup-input"
            required
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="signup-input"
            required
          />
          
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="signup-input"
            required
          />
          
          <button type="submit" className="signup-button">Signup</button>
        </form>

        <div className="divider">Or Sign in with</div>

        <div className="social-signup">
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn google">Google</button>
          <button className="social-btn twitter">Twitter</button>
        </div>
      </div>
    </div>
  );
}