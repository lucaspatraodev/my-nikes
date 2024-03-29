import ItemList from "../ItemList";
import { useEffect, useState } from "react";

export default function ItemListContainer({ products }) {
  const [items, setItems] = useState(null);

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItems = await getItem();
        setItems(newItems);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, []);

  return (
    <div className="mt-[10vh] mx-auto flex justify-center w-10/12 h-[90vh]">
      {!items ? <div>Loading...</div> : <ItemList items={items} />}
    </div>
  );
}
