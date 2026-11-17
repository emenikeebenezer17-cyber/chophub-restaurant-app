import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import MealCard from '../components/MealCard';
import { menuItems } from '../data/menu';
export default function Menu() {
  const [category, setCategory] = useState('All'); const [search, setSearch] = useState('');
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filtered = useMemo(() => menuItems.filter(item => (category === 'All' || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return <main><section className="page-banner"><div className="container"><span className="eyebrow light">SOMETHING DELICIOUS AWAITS</span><h1>Our menu</h1><p>Freshly made favourites, packed with the flavours you love.</p></div></section><section className="container section menu-section"><div className="menu-toolbar"><div className="filter-pills">{categories.map(cat => <button key={cat} className={category === cat ? 'filter-pill active' : 'filter-pill'} onClick={() => setCategory(cat)}>{cat}</button>)}</div><label className="search-box"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search meals..."/></label></div>{filtered.length ? <div className="meal-grid">{filtered.map(meal => <MealCard key={meal.id} meal={meal}/>)}</div> : <div className="empty-state"><SlidersHorizontal size={30}/><h3>No meals found</h3><p>Try another search or category.</p><button className="btn btn-outline" onClick={() => {setSearch('');setCategory('All')}}>Clear filters</button></div>}</section></main>;
}