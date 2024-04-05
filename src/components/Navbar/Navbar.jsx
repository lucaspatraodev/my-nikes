import { IoMdHeartEmpty } from "react-icons/io";
import CartWidget from "../Cart/CartWidget";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartMenu from "../Cart/CartMenu";
import { CartContext } from "../Cart/CartContext";

export default function Navbar() {
  const cartItems = useContext(CartContext).cartItems;
  const [itemsQuantityOnCart, setItemsQuantityOnCart] = useState(0);

  useEffect(() => {
    setItemsQuantityOnCart(cartItems.length);
  }, [cartItems]);

  const listItems = [
    {
      id: 1,
      title: "New",
    },
    {
      id: 2,
      title: "Air Max",
    },
    {
      id: 3,
      title: "Air Force",
    },
    {
      id: 4,
      title: "Dunk",
    },
    {
      id: 5,
      title: "Collabs",
    },
  ];

  const [isCartExpanded, setIsCartExpanded] = useState(false);

  const handleCartExpansion = () => {
    console.log("Cart expanded");
    setIsCartExpanded(!isCartExpanded);
  };

  return (
    <nav className="fixed w-screen max-h-[10vh] p-4 flex justify-between items-center bg-[#FDFDFD]">
      <Link to={"/"}>
        <h1 className="font-TitanOne text-xl text-[#582f0e] cursor-pointer">
          MyNikes
        </h1>
      </Link>
      <ul className="flex items-center justify-center gap-6 font-bold">
        {listItems.map((item) => (
          <Link key={item.id} to={`/category/${item.id}/${item.title}`}>
            <li className="relative text-lg w-fit block cursor-pointer hover:text-[#582f0e] after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#582f0e] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer hover:bg-gray-300 p-[10px] flex items-center justify-center rounded-full">
          <IoMdHeartEmpty size={24} />
        </div>
        <CartWidget
          itemCount={itemsQuantityOnCart}
          cartClicked={() => {
            handleCartExpansion();
          }}
        />
        <CartMenu itemsOnCart={cartItems} isCartExpanded={isCartExpanded} />
      </div>
    </nav>
  );
}
