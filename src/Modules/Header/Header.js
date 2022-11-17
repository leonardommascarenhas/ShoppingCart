import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center font-title min-h-[120px] md:h-40 shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[54px]">GBN</h1>
        <p className="-m-2">Generic Brand Name Slogan</p>
        <div className="hidden min-[500px]:block w-full p-4 mt-2">
          <List />
        </div>
      </div>
    </header>
  );
};

const List = () => {
  return (
    <>
      <nav className=" flex gap-x-10 mr-4">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/masculinas" className="menu-link">
          Masculinas
        </Link>
        <Link to="/femininas" className="menu-link">
          Femininas
        </Link>
      </nav>
    </>
  );
};

export default Header;
