import "./LoginForm.css";

export default function LoginForm({ onClose, onSignupClick }) {
  return (
    <div className="login-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2 className="login-title">Login</h2>
        
        <p className="signup-text">
          New to Tech-Shop? <span className="create-account" onClick={onSignupClick}>Create an account</span>
        </p>

        <div className="login-form">
          <input 
            type="email" 
            placeholder="Email" 
            className="login-input"
          />
          
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input"
          />
          
          <button className="login-button">Login</button>
        </div>

        <div className="divider">or login with</div>

        <div className="social-login">
          <button className="social-btn facebook">f</button>
          <button className="social-btn google">G</button>
          <button className="social-btn twitter">𝕏</button>
        </div>
      </div>
    </div>
  );
}
