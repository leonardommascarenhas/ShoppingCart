import { useParams } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = ({}) => {
  const clothes = React.useContext(AuthContext);
  let { product } = useParams();
  return (
    <div>
      {product}
      {console.log(clothes)}
      {console.log(
        "começar daqui, utilizar filter aqui para achar o produto e depois exibir na tela dinamicamente"
      )}
    </div>
  );
};

export default BuyProduct;
