import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
function NotFound(){return <main className="container section empty-state"><h1>Page not found</h1><p>Let’s get you back to something delicious.</p><a className="btn btn-primary" href="/">Go home</a></main>}
export default function App(){return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<Menu/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></>}
