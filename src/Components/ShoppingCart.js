import { AiOutlineShoppingCart } from "react-icons/ai";

const ShoppingCart = () => {
  return (
    <span className="fixed right-0 h-10 w-10 m-7 shadow-lg rounded-3xl bg-black text-green-400 flex items-center justify-center">
      {<AiOutlineShoppingCart size={28} />}
    </span>
  );
};

export default ShoppingCart;
