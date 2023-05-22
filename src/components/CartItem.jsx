import React from "react";
import { Link } from "react-router-dom";

import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="shopping cart pic" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-700 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
