import { Link } from "react-router-dom";
import "./Navebar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><img src="Screenshot 2026-06-15 164323.png" ></img>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/track">Track Service</Link></li>
        <li><Link to="/vehicle-report">Vehicle Report</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;