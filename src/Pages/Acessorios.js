import React, { useContext } from "react";
import { AuthContext } from "../Providers/auth";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";

const Acessorios = () => {
  const { acessorios } = React.useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <div className="display-section-container">
      {acessorios.map((cloth) => (
        <div key={cloth.id} onClick={() => navigate(`/collection/${cloth.link}`)} className="section-display">
          <Card productImage={cloth.imageSrc} productName={cloth.name} productPrice={cloth.price} />
        </div>
      ))}
    </div>
  );
};

export default Acessorios;
