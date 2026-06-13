import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCard = localStorage.getItem("cartItems");
    return savedCard ? JSON.parse(savedCard) : [];
  });
  const addCart = (item) => {
    setCartItems((prevItem) => [...prevItem, item]);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addCart }}>
      {children}
    </CartContext.Provider>
  );
}
