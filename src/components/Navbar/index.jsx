import logo from "../../assets/react.svg";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Navbar() {
  const listItems = [
    {
      title: "New",
      route: "/",
    },
    {
      title: "Air Max",
      route: "/",
    },
    {
      title: "Air Force",
      route: "/",
    },
    {
      title: "Dunk",
      route: "/",
    },
    {
      title: "Collabs",
      route: "/",
    },
  ];

  return (
    <nav className="fixed w-screen h-16 p-4 flex justify-between bg-[#FDFDFD]">
      <h1 className="font-TitanOne text-xl">MyNikes</h1>
      <ul className="flex items-center justify-center gap-6 font-bold">
        {listItems.map((item) => (
          <li className="relative text-lg w-fit block cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full">
          <HiOutlineShoppingCart size={24} />
        </div>
        <div className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full">
          <IoMdHeartEmpty size={24} />
        </div>
      </div>
    </nav>
  );
}
