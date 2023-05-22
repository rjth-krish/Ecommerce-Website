import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

import { BiShoppingBag } from "react-icons/bi";
import Logo from "../img/Logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="Logo" />
          </div>
        </Link>
      </div>
      <div
        className="cursor-pointer flex relative max-w-[50px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiShoppingBag className="text-2xl" />
        <div className="absolute bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
          {itemAmount}
        </div>
      </div>
    </header>
  );
};

export default Header;
