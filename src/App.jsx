import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { CartProvider } from "./components/Cart/CartContext";
import CartView from "./components/Cart/CartView/CartView";

function App() {
  const products = [
    {
      id: "1",
      title: "Air max 90",
      price: 150,
      description: "Air max 90 branco/preto.",
      stock: 15,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "2",
      title: "Air jordan 3",
      price: 150,
      description: "Air jordan 3, um clássico jordan.",
      stock: 5,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "3",
      title: "Air force 1",
      price: 150,
      description: "Air force 1, o clássico na cor branca.",
      stock: 8,
      firstImage: "https://imgnike-a.akamaihd.net/768x768/023768P1.jpg",
      secondImage: "https://imgnike-a.akamaihd.net/768x768/023768P1A4.jpg",
    },
    {
      id: "6",
      title: "Nike Dunk Low",
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
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path={`/product-detail/:id`}
              element={<ItemDetailContainer products={products} />}
            />
            <Route
              path={`/category/:id/:title`}
              element={<ItemListContainer products={products} />}
            />
            <Route path="/cart" element={<CartView />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}

export default App;
