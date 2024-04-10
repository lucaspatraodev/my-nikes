import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "../CartItem";
import OrderProgressBar from "./OrderProgressBar";

export default function CartView() {
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
      <button
        onClick={() => {
          sendOrder();
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Finish order
      </button>
    </section>
  );
}
