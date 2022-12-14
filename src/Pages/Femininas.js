import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import { AuthContext } from "../Providers/auth";

const Femininas = () => {
  const { clothes } = React.useContext(AuthContext);
  let navigate = useNavigate();
  const feminineClothes = clothes.filter((cloth) => {
    return cloth.gender === "F";
  });

  return (
    <div className="display-section-container">
      {feminineClothes.map((cloth) => (
        <div key={cloth.id} onClick={() => navigate(`/collection/${cloth.link}`)} className="section-display">
          <Card productImage={cloth.imageSrc} productName={cloth.name} productPrice={cloth.price} />
        </div>
      ))}
    </div>
  );
};

export default Femininas;
