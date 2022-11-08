import { AiOutlineShoppingCart } from "react-icons/ai";

const ShoppingCart = () => {
  return (
    <span className="fixed z-10 left-0 bottom-0 ml-7 mb-7 w-10 h-10 rounded-full shadow-lg bg-black text-white flex items-center justify-center cursor-pointer">
      {<AiOutlineShoppingCart size={28} />}
    </span>
  );
};

export default ShoppingCart;
