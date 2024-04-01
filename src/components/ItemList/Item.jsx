import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Item({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink to={`/product-detail/${item.id}`}>
      <div className="p-4 w-[310px] h-[380px] text-[#272343] text-lg cursor-pointer ">
        <img
          className="rounded-md w-full m-auto border-[#272343] border-[1.5px]"
          src={hovered ? item.secondImage : item.firstImage}
          alt={item.title}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
        <div className="p-1">
          <h2 className="">{item.name}</h2>
          <p className="font-bold">${item.price}</p>
        </div>
      </div>
    </NavLink>
  );
}
