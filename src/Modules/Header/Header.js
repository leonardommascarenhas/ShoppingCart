import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex min-[500px]:flex-col justify-center items-center min-h-[120px] md:h-40 shadow-lg">
      <Hamburguer />
      <div className="pl-3">
        <Link to="/" className="text-center">
          <h1 className="text-[50px]">GBN</h1>
          <p className="-mt-2 pl-1">Generic brand name Slogan</p>
        </Link>
        <List />
      </div>
    </header>
  );
};

const List = () => {
  return (
    <>
      <nav className="hidden min-[500px]:flex w-full p-4 mt-2 gap-x-10 mr-2 align-center justify-center">
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
  return (
    <>
      <AiOutlineMenu className="rounded-full" />
    </>
  );
};
export default Header;
