import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import ShoppingCart from "../../Components/ShoppingCart";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  return (
    <header className="relative shadow w-full pb-3">
      <Hamburguer />
      <div className="sm:pl-2 md:pl-6 lg:pl-8">
        <Link to="/" className="flex flex-col items-center">
          <h1 className="inline text-[36px] md:text-[48px]">GBN</h1>
          <p className="-mt-2 pl-1 text-xs md:text-sm">Generic Slogan</p>
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
      <nav className="hidden min-[500px]:flex mt-2 pb-1 items-center justify-center gap-x-7">
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

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef}>
      <AiOutlineMenu
        className="absolute left-4 bottom-0.5 h-full rounded-full min-[500px]:hidden ml-2"
        onClick={() => {
          setIsActive(!isActive);
        }}
        size={18}
      />
      {isActive === true && (
        <nav className="absolute left-6 top-0 z-50 gap-x-10 mr-2 bg-white">
          <Link
            to="/"
            className="block px-4 py-4"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Home
          </Link>
          <Link
            to="/masculinas"
            className="block px-4 py-4"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Masculinas
          </Link>
          <Link
            to="/femininas"
            className="block px-4 py-4"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Femininas
          </Link>
          <Link
            to="/acessorios"
            className="block px-4 py-4"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Acessorios
          </Link>
        </nav>
      )}
    </div>
  );
};
export default Header;
