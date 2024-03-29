import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { CartProvider, CartContext } from "./components/CartContext.jsx";

function App() {
  const products = [
    {
      id: "1",
      name: "Air max 90",
      price: 150,
      description: "Air max 90 branco/preto.",
      stock: 15,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "2",
      name: "Air jordan 3",
      price: 150,
      description: "Air jordan 3, um clássico jordan.",
      stock: 5,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "3",
      name: "Air force 1",
      price: 150,
      description: "Air force 1, o clássico na cor branca.",
      stock: 8,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "6",
      name: "Nike Dunk Low",
      price: 150,
      description: "Nike Dunk Low, um dos favoritos dos sneakerheads.",
      stock: 7,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
  ];

  // const handleItemAddedToCart = (newItems) => {
  //   setCartItems((prevItems) => [...prevItems, newItems]);
  // };

  const cartContext = useContext(CartContext);

  const cartItems = cartContext ? cartContext.cartItems : [];
  const setCartItems = cartContext ? cartContext.setCartItems : () => {};

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="h-screen w-screen bg-white flex justify-center items-center">
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  products={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path={`/product-detail/:id`}
              element={
                <ItemDetailContainer
                  products={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
