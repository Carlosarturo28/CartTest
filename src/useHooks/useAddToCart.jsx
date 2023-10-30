import { useState } from "react";

export const useAddToCart = (key) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : [];

  const [cart, setCart] = useState(initial);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem(key, JSON.stringify(updatedCart));
  };

  return { addToCart, cart };
};
