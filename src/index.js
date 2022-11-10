import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Pages/Home";
import Home from "./Pages/Home";
import Femininas from "./Pages/Femininas";
import Masculinas from "./Pages/Masculinas";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/masculinas" element={<Masculinas />} />
      <Route path="/femininas" element={<Femininas />} />
    </Routes>
  </BrowserRouter>
);
