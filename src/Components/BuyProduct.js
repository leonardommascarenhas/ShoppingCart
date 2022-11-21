import { useParams } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = () => {
  const { clothes } = React.useContext(AuthContext);

  let { product } = useParams();

  const clickedCloth = clothes.filter((cloth) => {
    return cloth.link === product;
  });

  return (
    <div className="flex flex-col">
      <img src={clickedCloth[0].imageSrc} className="w-screen"></img>
      <div>
        <p>{clickedCloth[0].name}</p>
        <p>R$ {clickedCloth[0].price}</p>
        <p>Product description</p>
        <p>Product description</p>
      </div>
    </div>
  );
};

export default BuyProduct;
