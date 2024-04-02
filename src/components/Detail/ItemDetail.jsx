import ItemCount from "../ItemList/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

export default function ItemDetail({ item }) {
  const cartItems = useContext(CartContext).cartItems;
  const setCartItemsQuantity = useContext(CartContext).setCartItemsQuantity;
  const addItemToCart = useContext(CartContext).addItemToCart;

  const handleItemAdded = (count) => {
    addItemToCart(cartItems, item, count);
    setCartItemsQuantity((prevQuantity) => prevQuantity + count);
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
