import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../ItemCollection.jsx";

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [orderStage, setOrderStage] = useState(1);
  const [order, setOrder] = useState(undefined);
  const [orderID, setOrderID] = useState(null);
  const ordersCollection = collection(db, "orders");

  const sendOrder = (buyerData) => {
    let items = cartItems;

    const order = {
      buyer: {
        name: buyerData.name,
        phone: buyerData.phone,
        email: buyerData.email,
      },
      items: items,
      total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    };

    console.log(order);
    // addDoc(ordersCollection, order).then(({ id }) => setOrderID(id));
    // console.log(orderID);
  };

  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

  const addItemToCart = (cartItems, actualItem, count) => {
    let itemInTheCart = cartItems.find((item) => item.id === actualItem.id);

    if (itemInTheCart) {
      let newQuantity = itemInTheCart.quantity + count;
      itemInTheCart.quantity = newQuantity;
      setCartItems(
        cartItems.map((item) =>
          item.id === actualItem.id ? itemInTheCart : item
        )
      );
    } else {
      let itemToAdd = {
        id: actualItem.id,
        title: actualItem.title,
        price: actualItem.price,
        description: actualItem.description,
        firstImage: actualItem.firstImage,
        quantity: count,
      };

      setCartItems([...cartItems, itemToAdd]);
    }
  };

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
        orderStage,
        setOrderStage,
        order,
        setOrder,
        sendOrder,
        addItemToCart,
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
