import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-mark"><span>✦</span></span>
            <span>
              chop<span className="brand-accent">hub</span>
              <small>GOOD FOOD. GOOD MOOD.</small>
            </span>
          </Link>
          <p>Big Nigerian flavour, made fresh and served with love.</p>
          
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/menu">Our Menu</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Get in touch</h4>
          <p><MapPin size={16} /> Enugu, Nigeria</p>
          <p><Phone size={16} /> +234 800 000 0000</p>
          <p><Mail size={16} /> hello@chophub.example</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ChopHub. All rights reserved.</span>
        <span>Made for food lovers <b>♥</b></span>
      </div>
    </footer>
  );
}