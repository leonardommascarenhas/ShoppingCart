import { AiOutlineShoppingCart } from "react-icons/ai";

const ShoppingCart = () => {
  return (
    <span className="absolute right-0 mr-7 mt-7 w-10 h-10 rounded-full shadow-lg bg-black text-white flex items-center justify-center cursor-pointer">
      {<AiOutlineShoppingCart size={28} />}
    </span>
  );
};

export default ShoppingCart;
