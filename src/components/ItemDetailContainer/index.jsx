import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer({ selectedItem, onItemAdded }) {
  const [item, setItem] = useState(null);
  const handleItemAdded = (quantity) => {
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
        setItem(newItem);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, []);

  return (
    <div>
      {item ? (
        <ItemDetail item={item} onItemAdded={handleItemAdded} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
