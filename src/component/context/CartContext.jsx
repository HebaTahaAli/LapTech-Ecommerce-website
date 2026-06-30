import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [favItems, setFavItems] = useState(() => {
    const favedCard = localStorage.getItem("favItem")
    return favedCard ? JSON.parse(favedCard) : [];
  });
  const addFav = (item) => {
    setFavItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item]
    });
  };

  useEffect(() => {
    localStorage.setItem("favItem" , JSON.stringify(favItems))
  }, [favItems])

  const removeFavItem = (id)=>{
   setFavItems(prevItem => prevItem.filter(item=>item.id !==id))
  }

  const [cartItems, setCartItems] = useState(() => {
    const savedCard = localStorage.getItem("cartItems");
    return savedCard ? JSON.parse(savedCard) : [];
  });
  const addCart = (item) => {
    setCartItems((prevItem) => [...prevItem, { ...item, quantity: 1 }]);
  };
  const increaseFunc = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };
  const decreaseFunc = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addCart, increaseFunc, decreaseFunc, removeFromCart, addFav, favItems, removeFavItem}}
    >
      {children}
    </CartContext.Provider>
  );
}
