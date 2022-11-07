import Header from "./Modules/Header/Header";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col item-center">
      <ShoppingCart />
      <Header />
    </div>
  );
}

export default App;
