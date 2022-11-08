import Header from "./Modules/Header/Header";
import ShoppingCart from "./Components/ShoppingCart";
import Body from "./Modules/Body/Body";
function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col item-center">
      <ShoppingCart />
      <Header />
      <Body />
    </div>
  );
}

export default App;
