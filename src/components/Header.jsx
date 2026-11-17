import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="container nav-wrap">
      <Link to="/" className="brand" onClick={close}><span className="brand-mark"><UtensilsCrossed size={20}/></span><span>chop<span className="brand-accent">hub</span><small>GOOD FOOD. GOOD MOOD.</small></span></Link>
      <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <NavLink to="/" onClick={close}>Home</NavLink><NavLink to="/menu" onClick={close}>Our Menu</NavLink><NavLink to="/about" onClick={close}>About Us</NavLink><NavLink to="/contact" onClick={close}>Contact</NavLink>
        <Link to="/cart" className="cart-link" onClick={close}><ShoppingBag size={18}/> Cart <span className="cart-count">{count}</span></Link>
      </nav>
    </div>
  </header>;
}