import React, { useContext } from "react";
import { AuthContext } from "../Providers/auth";
import Card from "../Components/Card";

import { useNavigate } from "react-router-dom";
const Acessorios = () => {
  const { acessorios } = React.useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <div>
      {acessorios.map((acessorio) => (
        <div
          key={acessorio.id}
          onClick={() => {
            navigate(`/collection/${acessorio.link}`);
          }}
        >
          <Card
            productImage={acessorio.imageSrc}
            productName={acessorio.name}
            productPrice={acessorio.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Acessorios;
