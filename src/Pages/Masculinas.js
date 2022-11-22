import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import { AuthContext } from "../Providers/auth";

const Masculinas = () => {
  const { clothes } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const masculineClothes = clothes.filter((cloth) => {
    return cloth.gender === "M";
  });

  return (
    <div className="display-section-container">
      {masculineClothes.map((cloth) => (
        <div key={cloth.id} onClick={() => navigate(`/collection/${cloth.link}`)} className="section-display">
          <Card productImage={cloth.imageSrc} productName={cloth.name} productPrice={cloth.price} />
        </div>
      ))}
    </div>
  );
};

export default Masculinas;
