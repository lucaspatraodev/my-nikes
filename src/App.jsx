import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen bg-white flex justify-center items-center">
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
