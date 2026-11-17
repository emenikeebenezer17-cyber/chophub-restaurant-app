import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('chophub-cart')) || []; }
    catch { return []; }
  });
  useEffect(() => { localStorage.setItem('chophub-cart', JSON.stringify(items)); }, [items]);
  const addItem = (product) => setItems(current => {
    const found = current.find(item => item.id === product.id);
    return found ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });
  const updateQuantity = (id, quantity) => setItems(current => quantity <= 0 ? current.filter(x => x.id !== id) : current.map(x => x.id === id ? { ...x, quantity } : x));
  const removeItem = (id) => setItems(current => current.filter(x => x.id !== id));
  const clearCart = () => setItems([]);
  const value = useMemo(() => ({
    items, addItem, updateQuantity, removeItem, clearCart,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);