import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

export default function CartView() {
  const cartItems = useContext(CartContext).cartItems;

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      {cartItems.length === 0 ? (
        <h1 className="text-4xl font-bold">Seu carrinho está vazio</h1>
      ) : null}
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </section>
  );
}
