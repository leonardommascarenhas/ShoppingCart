import React, { useContext } from "react";
import { AuthContext } from "../Providers/auth";
import Card from "../Components/Card";
const Acessorios = () => {
  const { acessorios } = React.useContext(AuthContext);

  return (
    <div>
      {acessorios.map((acessorio) => {
        <Card
          productImage={acessorio.imageSrc}
          productImageAlt={acessorio.alt}
          productName={acessorio.name}
          productPrice={acessorio.price}
        />;
      })}
    </div>
  );
};

export default Acessorios;
