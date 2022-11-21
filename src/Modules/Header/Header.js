import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center font-title min-h-[120px] md:h-40 shadow-lg">
      <h1 className="text-[54px]">GBN</h1>
      <p className="-m-2">Generic Brand Name Slogan</p>
      <div className="text-center ">
        <List />
      </div>
    </header>
  );
};

const List = () => {
  return (
    <>
      <nav className="hidden min-[500px]:flex w-full p-4 mt-2 gap-x-10 mr-2">
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
