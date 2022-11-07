const Header = () => {
  return (
    <header className="w-screen flex flex-col justify-center items-center font-title min-h-[120px] md:h-40 shadow-lg">
      <div className="max-w-md md:w-1/2">
        <div className="title flex flex-col justify-center items-center cursor-pointer">
          <h1 className="text-[54px]">GBN</h1>
          <p className="-m-2">Generic Brand Name</p>
        </div>
        <div className="hidden md:block md:w-full p-4 mt-2">
          <List />
        </div>
      </div>
    </header>
  );
};

const List = () => {
  return (
    <ul className=" flex gap-x-10 mr-4">
      <li>
        <a href="#" className="menu-link">
          Sobre
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          Masculinas
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          Femininas
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          Acessórios
        </a>
      </li>
    </ul>
  );
};

export default Header;
