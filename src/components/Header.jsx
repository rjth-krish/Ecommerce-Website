import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className=" bg-teal-800">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiShoppingBag className="text-2xl text-white" />
      </div>
    </header>
  );
};

export default Header;
