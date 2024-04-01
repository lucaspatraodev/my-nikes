import { createContext, useState } from "react";

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

  const removeItemById = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        removeItemById,
        clearCart,
        isInCart,
        cartItemsQuantity,
        setCartItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
