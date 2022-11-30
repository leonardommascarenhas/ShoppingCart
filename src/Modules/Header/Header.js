import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ShoppingCart from "../../Components/ShoppingCart";

const Header = () => {
  return (
    <header className="relative flex min-[500px]:flex-col justify-center items-center w-full h-auto shadow-lg pb-2">
      <Hamburguer />
      <div className="lg:ml-8">
        <Link to="/" className="text-center">
          <h1 className="text-[50px]">GBN</h1>
          <p className="-mt-2">Generic brand name Slogan</p>
        </Link>
        <List />
      </div>
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
        className="absolute left-6 rounded-full min-[500px]:hidden border-2 "
        onClick={onClick}
      />
      <nav className="hidden left-6 top-0 z-50 gap-x-10 mr-2 bg-white">
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
    </>
  );
};
export default Header;
