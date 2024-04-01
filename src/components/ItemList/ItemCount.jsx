import { useState } from "react";

export default function ItemCount({ item, stock, onAddClick }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count === 0) return;
    onAddClick(count);
    setCount(0);
  };

  const increment = () => {
    if (count === stock) return;

    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
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
        onClick={handleClick}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
