import { useParams } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Providers/auth";
import ClothesSizeBar from "./ClothesSizeBar";

const BuyProduct = () => {
  const { allProducts } = React.useContext(AuthContext);

  let { product } = useParams();

  const clickedCloth = allProducts.filter((cloth) => {
    return cloth.link === product;
  });

  return (
    <div className="grid grid-areas-slim grid-cols-slim grid-rows-slim lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout">
      <img src={clickedCloth[0].imageSrc} className="grid-in-[product]"></img>
      <h2 className="grid-in-[name]">{clickedCloth[0].name}</h2>
      <h3 className="grid-in-[price]">R$ {clickedCloth[0].price}</h3>
      <div className="grid-in-[size] flex flex-col">
        <ClothesSizeBar />
        <h4>Quantidade:</h4>
      </div>
    </div>
  );
};

export default BuyProduct;
