import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./components/Cart/CartContext";
import CartView from "./components/Cart/CartView";

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

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="h-screen w-screen bg-white flex justify-center items-center z-0">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer products={products} />}
            />
            <Route
              path={`/product-detail/:id`}
              element={<ItemDetailContainer products={products} />}
            />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
