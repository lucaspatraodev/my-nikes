import { useContext, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CartContext } from "./CartContext";

export default function CartWidget({ cartClicked }) {
  const itemQuantityOnCart = useContext(CartContext).cartItemsQuantity;

  useEffect(() => {
    console.log("cartWidget rendered");
  }),
    [itemQuantityOnCart];

  const handleClick = () => {
    cartClicked();
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full relative"
    >
      <HiOutlineShoppingCart size={24} />
      <div className="rounded-full w-[17px] h-[17px] bg-[#582f0e] text-white text-xs absolute top-0 right-0">
        <span className="flex items-center justify-center w-full h-full">
          {itemQuantityOnCart}
        </span>
      </div>
    </div>
  );
}
