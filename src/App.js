import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Modules/Header/Header";
import Home from "./Pages/Home";
import Femininas from "./Pages/Femininas";
import Masculinas from "./Pages/Masculinas";
import BuyProduct from "./Components/BuyProduct";
import Acessorios from "./Pages/Acessorios";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="font-roboto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection/:product" element={<BuyProduct />} />
            <Route path="masculinas" element={<Masculinas />} />
            <Route path="femininas" element={<Femininas />} />
            <Route path="acessorios" element={<Acessorios />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
