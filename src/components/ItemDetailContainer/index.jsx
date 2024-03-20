import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer({ selectedItem }) {
  const [item, setItem] = useState(null);

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
    <div>{!item ? <div>Loading...</div> : <ItemDetail item={item} />}</div>
  );
}
