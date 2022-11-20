import { useParams } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = () => {
  const clothes = React.useContext(AuthContext);

  let { product } = useParams();

  const clickedCloth = clothes.filter((cloth) => {
    return cloth.link == product;
  });

  return <div>{clickedCloth.map((cloth) => cloth.link)}</div>;
};

export default BuyProduct;
