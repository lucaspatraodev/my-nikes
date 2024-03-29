import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Air max 90",
      price: 150,
      description: "Air max 90 branco/preto.",
      stock: 15,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "2",
      name: "Air jordan 3",
      price: 150,
      description: "Air jordan 3, um clássico jordan.",
      stock: 5,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "3",
      name: "Air force 1",
      price: 150,
      description: "Air force 1, o clássico na cor branca.",
      stock: 8,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "6",
      name: "Nike Dunk Low",
      price: 150,
      description: "Nike Dunk Low, um dos favoritos dos sneakerheads.",
      stock: 7,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
  ]);

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
        removeItemById,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
