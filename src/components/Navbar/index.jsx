import { IoMdHeartEmpty } from "react-icons/io";
import CartWidget from "../CartWidget";
import { useEffect } from "react";

export default function Navbar({ itemsOnCart = 0 }) {
  const listItems = [
    {
      id: 1,
      title: "New",
      route: "/",
    },
    {
      id: 2,
      title: "Air Max",
      route: "/",
    },
    {
      id: 3,
      title: "Air Force",
      route: "/",
    },
    {
      id: 4,
      title: "Dunk",
      route: "/",
    },
    {
      id: 5,
      title: "Collabs",
      route: "/",
    },
  ];

  useEffect(() => {
    console.log("Items on cart:", itemsOnCart);
  }, [itemsOnCart]);

  return (
    <nav className="fixed w-screen h-16 p-4 flex justify-between bg-[#FDFDFD]">
      <h1 className="font-TitanOne text-xl">MyNikes</h1>
      <ul className="flex items-center justify-center gap-6 font-bold">
        {listItems.map((item) => (
          <li
            key={item.id}
            className="relative text-lg w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full">
          <IoMdHeartEmpty size={24} />
        </div>
        <CartWidget itemCount={itemsOnCart} />
      </div>
    </nav>
  );
}
