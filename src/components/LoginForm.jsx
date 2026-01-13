import "./LoginForm.css";

export default function LoginForm({ onClose, onSignupClick }) {
  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2 className="login-title">Login</h2>
        
        <p className="signup-text">
          Don't Have an Account? <span className="create-account" onClick={onSignupClick}>Sign up</span>
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email" 
            className="login-input"
            required
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
            required
          />
          
          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="divider">Or Sign in with</div>

        <div className="social-login">
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn google">Google</button>
          <button className="social-btn twitter">Twitter</button>
        </div>
      </div>
    </div>
  );
}