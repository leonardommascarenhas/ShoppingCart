import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AuthContext } from "../Providers/auth";

const ShoppingCart = () => {
  const { toBuyClothes, setToBuyClothes } = React.useContext(AuthContext);
  return (
    <>
      <div className="fixed z-10 right-5 top-5  ">
        <span className="relative w-8 h-8 rounded-full shadow-lg bg-black text-white flex items-center justify-center cursor-pointer">
          {<AiOutlineShoppingCart size={20} />}
        </span>
        <span className="absolute w-4 h-4 -bottom-1.5 -right-1 bg-red-500 rounded-full flex items-center justify-center">
          {toBuyClothes}
        </span>
      </div>
    </>
  );
};

export default ShoppingCart;
