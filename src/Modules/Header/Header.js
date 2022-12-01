import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ShoppingCart from "../../Components/ShoppingCart";

const Header = () => {
  return (
    <header className="relative flex justify-center items-center w-full h-auto pb-3 shadow-lg min-[500px]:flex-col min-[500px]:pl-4">
      <Hamburguer />
      <Link to="/" className="flex flex-col mx-auto justify-center items-center">
        <h1 className="text-[36px] lg:text-[48px]">GBN</h1>
        <p className="-mt-2 pl-1 text-xs">Generic Slogan</p>
      </Link>

      <List />
      <ShoppingCart />
    </header>
  );
};

const List = () => {
  return (
    <>
      <nav className="hidden min-[500px]:flex w-full mt-2 pb-6 gap-x-10 mr-2 align-center justify-center">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/masculinas" className="menu-link">
          Masculinas
        </Link>
        <Link to="/femininas" className="menu-link">
          Femininas
        </Link>
        <Link to="/acessorios" className="menu-link">
          Acessorios
        </Link>
      </nav>
    </>
  );
};

const Hamburguer = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <>
      <AiOutlineMenu
        className="absolute left-4 rounded-full min-[500px]:hidden ml-2"
        onClick={onClick}
        size={18}
      />
      {isActive == true && (
        <nav className="absolute left-6 top-0 z-50 gap-x-10 mr-2 bg-white">
          <Link to="/" className="block px-4 py-4">
            Home
          </Link>
          <Link to="/masculinas" className="block px-4 py-4">
            Masculinas
          </Link>
          <Link to="/femininas" className="block px-4 py-4">
            Femininas
          </Link>
          <Link to="/acessorios" className="block px-4 py-4">
            Acessorios
          </Link>
        </nav>
      )}
    </>
  );
};
export default Header;
