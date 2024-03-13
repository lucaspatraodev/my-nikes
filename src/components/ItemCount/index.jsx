import { useState } from "react";

export default function ItemCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    // Add logic to add item to cart
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <button
          className="bg-teal-950 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          -
        </button>
        <span className="mx-4">{count}</span>
        <button
          className="bg-teal-950 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          +
        </button>
      </div>

      <button
        className="bg-teal-950 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
        onClick={addToCart}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
