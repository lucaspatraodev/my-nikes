import ItemCount from "../ItemList/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";

export default function ItemDetail({ item }) {
  const [actualItem, setActualItem] = useState(item);
  const cartItems = useContext(CartContext).cartItems;
  const setCartItems = useContext(CartContext).setCartItems;
  const setCartItemsQuantity = useContext(CartContext).setCartItemsQuantity;

  const handleItemAdded = (count) => {
    const itemInTheCart = cartItems.find((item) => item.id === actualItem.id);

    if (itemInTheCart) {
      const newQuantity = itemInTheCart.quantity + count;
      itemInTheCart.quantity = newQuantity;
      setCartItems(
        cartItems.map((item) =>
          item.id === actualItem.id ? itemInTheCart : item
        )
      );
    } else {
      const itemToAdd = {
        id: actualItem.id,
        name: actualItem.name,
        price: actualItem.price,
        description: actualItem.description,
        firstImage: actualItem.firstImage,
        quantity: count,
      };

      setCartItems([...cartItems, itemToAdd]);
    }

    setCartItemsQuantity((prevQuantity) => prevQuantity + count);

    console.log(actualItem, cartItems);
  };

  return (
    <>
      <div className="item-detail">
        <img src={item.firstImage} alt={item.title} />
        <div className="details">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <ItemCount
            item={item}
            stock={item.stock}
            onAddClick={(count) => handleItemAdded(count)}
          />
        </div>
      </div>
    </>
  );
}
