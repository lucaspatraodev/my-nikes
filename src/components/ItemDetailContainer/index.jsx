import { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({
  CartItems,
  setCartItems,
  products,
  onItemAdded,
}) {
  const { id } = useParams();
  const selectedItem = products.find((product) => product.id === id);
  const [itemCart, setItemCart] = useState(null);

  const handleItemAdded = (quantity) => {
    setCartItems(CartItems.find((item) => item.id === id));
    onItemAdded(quantity);
    console.log(`Item added with quantity: ${quantity}`);
  };

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(selectedItem);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItem = await getItem();
        setItemCart(newItem);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, []);

  return (
    <div>
      {itemCart ? (
        <ItemDetail item={itemCart} onItemAdded={handleItemAdded} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
