import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";

export default function ItemListContainer({ onItemAdded }) {
  const handleItemAdded = (quantity) => {
    onItemAdded(quantity);
    console.log(`Item added with quantity: ${quantity}`);
  };

  const products = [
    {
      id: "1",
      name: "Air max 90",
      price: 150,
      description: "Air max 90 branco/preto.",
      stock: 15,
    },
    {
      id: "2",
      name: "Air jordan 3",
      price: 150,
      description: "Air jordan 3, um clássico jordan.",
      stock: 5,
    },
    {
      id: "3",
      name: "Air force 1",
      price: 150,
      description: "Air force 1, o clássico na cor branca.",
      stock: 8,
    },
    {
      id: "6",
      name: "Nike Dunk Low",
      price: 150,
      description: "Nike Dunk Low, um dos favoritos dos sneakerheads.",
      stock: 7,
    },
  ];

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
    <main className="flex justify-center items-center w-full h-auto">
      <h1 className="text-xl text-center">Welcome to MyNikes! (in progress)</h1>
      {!items ? <div>Loading...</div> : <ItemList items={items} />}
      <ItemCount onItemAdded={handleItemAdded} />
    </main>
  );
}
