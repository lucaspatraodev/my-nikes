import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [itemsOnCart, setItemsOnCart] = useState(0);

  const handleItemAddedToCart = (quantity) => {
    setItemsOnCart((prevItems) => prevItems + quantity);
  };

  return (
    <>
      <Navbar itemsOnCart={itemsOnCart} />
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <ItemListContainer onItemAdded={handleItemAddedToCart} />
        <ItemDetailContainer onItemAdded={handleItemAddedToCart} />
      </div>
    </>
  );
}

export default App;
