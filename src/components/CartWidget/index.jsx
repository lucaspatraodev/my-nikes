import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function CartWidget({ itemCount }) {
  return (
    <div className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full relative">
      <HiOutlineShoppingCart size={24} />
      <div className="rounded-full w-[17px] h-[17px] bg-black text-white text-xs absolute top-0 right-0">
        <span className="flex items-center justify-center w-full h-full">
          {itemCount}
        </span>
      </div>
    </div>
  );
}
