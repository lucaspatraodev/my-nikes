import ItemCount from "../ItemCount";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function ItemDetail({ item }) {
  const { setCartItems } = useContext(CartContext);

  const handleItemAdded = (item) => {
    setCartItems((prevItems) => prevItems + item);
    console.log(item);
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
            onItemAdded={(item) => handleItemAdded(item)}
          />
        </div>
      </div>
    </>
  );
}
