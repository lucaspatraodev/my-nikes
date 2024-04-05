import ItemCount from "../ItemList/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

export default function ItemDetail({ item }) {
  const cartItems = useContext(CartContext).cartItems;
  const setCartItemsQuantity = useContext(CartContext).setCartItemsQuantity;
  const addItemToCart = useContext(CartContext).addItemToCart;
  const createNewOrder = useContext(CartContext).createNewOrder;
  const order = useContext(CartContext).order;

  const handleItemAdded = (count) => {
    addItemToCart(cartItems, item, count);
    setCartItemsQuantity((prevQuantity) => prevQuantity + count);
  };

  return (
    <>
      {item ? (
        <div>
          <img src={item.firstImage} alt={item.title} />
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <ItemCount
              item={item}
              stock={item.stock}
              onAddClick={(count) => handleItemAdded(count)}
            />
            <button
              className="w-64 h-12 p-4 bg-blue-500 text-white font-bold text-xl rounded-md"
              onClick={() => createNewOrder()}
            >
              CreateOrder
            </button>
            <button
              className="w-64 h-12 p-4 bg-red-500 text-white font-bold text-xl rounded-md"
              onClick={() => {
                console.log(order);
              }}
            >
              Ihu
            </button>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
