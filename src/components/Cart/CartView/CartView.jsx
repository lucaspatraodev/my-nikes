import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../CartItem";
import OrderProgressBar from "./OrderProgressBar";

export default function CartView() {
  const [buyerData, setBuyerData] = useState({
    name: "Lucas de Castro",
    phone: "(11) 99999-9999",
    email: "lucasdecastropatrao@gmail.com",
  });

  const handleInputChange = (event, type) => {
    const newValue = event.target.value;
    setBuyerData({ ...buyerData, [type]: newValue });
  };

  const sendOrder = useContext(CartContext).sendOrder;
  const cartItems = useContext(CartContext).cartItems;
  // const setOrderStage = useContext(CartContext).setOrderStage;
  const orderStage = useContext(CartContext).orderStage;

  return (
    <section className="flex flex-col items-center justify-center w-6/12 h-full gap-4">
      {!cartItems[0] ? (
        <h1 className="text-4xl font-bold text-black">Your cart is empty.</h1>
      ) : null}
      <OrderProgressBar orderStage={orderStage} />
      <div className="w-full h-auto">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          type="text"
          placeholder="Name"
          onChange={(event) => handleInputChange(event, "name")}
        />

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          type="tel"
          placeholder="Phone"
          onChange={(event) => handleInputChange(event, "phone")}
        />

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          type="email"
          placeholder="Mail Address"
          onChange={(event) => handleInputChange(event, "email")}
        />
      </form>

      <button
        onClick={() => {
          sendOrder(buyerData);
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Finish order
      </button>
    </section>
  );
}
