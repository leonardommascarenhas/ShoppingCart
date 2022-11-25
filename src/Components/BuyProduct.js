import { useParams } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = () => {
  const { allProducts } = React.useContext(AuthContext);

  let { product } = useParams();

  const clickedCloth = allProducts.filter((cloth) => {
    return cloth.link === product;
  });

  return (
    <div className="grid grid-areas-layout grid-cols-layout h-full">
      <img src={clickedCloth[0].imageSrc} className="grid-in-[product]"></img>
      <div className="grid-in-[price]">
        <p>{clickedCloth[0].name}</p>
        <p>R$ {clickedCloth[0].price}</p>
      </div>
      <div className="grid-in-[size]">
        <p>Product description</p>
        <p>Product description</p>
      </div>
    </div>
  );
};

export default BuyProduct;
