import { useEffect, useState } from "react";

const Promises = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // carregamento
  const [rejected, setRejected] = useState(null); // rejeição

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsPromise = new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: "1",
                name: "Air max 90",
                description: "Air max 90 branco/preto.",
                stock: 15,
              },
              {
                id: "2",
                name: "Air jordan 3",
                description: "Air jordan 3, um clássico jordan.",
                stock: 5,
              },
              {
                id: "3",
                name: "Air force 1",
                description: "Air force 1, o classico na cor branca.",
                stock: 8,
              },
            ]);
          }, 3000);
        });
        const productsData = await productsPromise;
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setRejected(`Ocorreu um erro: ${error}`);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-24 w-24">
      {loading && <p className="text-white">Carregando...</p>}
      {rejected && <p className="text-white">erro: {rejected}</p>}
      {!loading && !rejected && (
        <div className="h-24 w-screen">
          {products.map((product) => (
            <div
              className="bg-red-300 border-b-4 border-b-black text-center p-4"
              key={product.id}
            >
              <h2 className="text-white">{product.name}</h2>
              <p className="text-white">{product.description}</p>
              <p className="text-white">{product.stock}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Promises;
