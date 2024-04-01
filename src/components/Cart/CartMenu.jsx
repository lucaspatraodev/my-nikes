import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartMenu({ itemsOnCart, isCartExpanded }) {
  return (
    <div
      className={
        isCartExpanded
          ? "fixed right-0 top-0 w-[30vw] h-full bg-black border-r border-r-gray-100 ease-in-out duration-300 z-100"
          : "fixed left-[-100%]"
      }
    >
      <Link to="/cart">
        <button className="absolute top-0 right-0 p-4 text-white bg-yellow-500">
          CART
        </button>
      </Link>

      {itemsOnCart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
