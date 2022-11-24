import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Modules/Header/Header";
import ShoppingCart from "./Components/ShoppingCart";
import Home from "./Pages/Home";
import Femininas from "./Pages/Femininas";
import Masculinas from "./Pages/Masculinas";
import BuyProduct from "./Components/BuyProduct";
import Acessorios from "./Pages/Acessorios";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection/:product" element={<BuyProduct />} />
            <Route path="masculinas" element={<Masculinas />} />
            <Route path="femininas" element={<Femininas />} />
            <Route path="acessorios" element={<Acessorios />} />
          </Routes>
        </main>
      </BrowserRouter>
      <ShoppingCart />
    </>
  );
};

export default App;
