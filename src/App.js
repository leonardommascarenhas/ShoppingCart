import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Modules/Header/Header";
import ShoppingCart from "./Components/ShoppingCart";
import Home from "./Pages/Home";
import Femininas from "./Pages/Femininas";
import Masculinas from "./Pages/Masculinas";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ShoppingCart />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="masculinas" element={<Masculinas />} />
          <Route path="femininas" element={<Femininas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
