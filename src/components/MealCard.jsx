import { Plus, Star } from 'lucide-react';
import { formatPrice } from '../data/menu';
import { useCart } from '../context/CartContext';
export default function MealCard({ meal }) {
  const { addItem } = useCart();
  return <article className="meal-card"><div className="meal-image"><img src={meal.image} alt={meal.name} loading="lazy"/>{meal.tag && <span className="meal-tag">{meal.tag}</span>}<span className="meal-rating"><Star size={13} fill="currentColor"/> 4.9</span></div><div className="meal-info"><div className="meal-meta">{meal.category}</div><h3>{meal.name}</h3><p>{meal.description}</p><div className="meal-bottom"><strong>{formatPrice(meal.price)}</strong><button className="add-btn" onClick={() => addItem(meal)} aria-label={`Add ${meal.name} to cart`}><Plus size={19}/> Add</button></div></div></article>;
}