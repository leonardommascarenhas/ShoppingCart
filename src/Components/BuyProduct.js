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
      <p className="grid-in-[name]">{clickedCloth[0].name}</p>
      <p className="grid-in-[price]">R$ {clickedCloth[0].price}</p>
      <div className="grid-in-[size]">
        <ClothesSizeBar />
      </div>
    </div>
  );
};

export default BuyProduct;
