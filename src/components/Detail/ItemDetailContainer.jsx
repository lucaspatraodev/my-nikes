import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({ products }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const selectedItem = products.find((product) => {
    return product.id === id;
  });

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

  return <div>{item ? <ItemDetail item={item} /> : <div>Loading...</div>}</div>;
}
