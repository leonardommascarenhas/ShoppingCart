const Header = () => {
  return (
    <header className="w-screen flex flex-col justify-center items-center font-title bg-slate-300 min-h-[100px] shadow-xl">
      <div className="title flex flex-col items-center cursor-pointer">
        <h1 className="text-xl">GBN</h1>
        <p>Generic Brand Name</p>
      </div>
      <List />
    </header>
  );
};

const List = () => {
  return (
    <ul>
      <li>
        <a className="hover: transition-all duration-150 origin-center caret-transparent cursor-pointer">
          Sobre
        </a>
      </li>
      <li>
        <a></a>
      </li>
      <li>
        <a></a>
      </li>
      <li>
        <a></a>
      </li>
    </ul>
  );
};

export default Header;
