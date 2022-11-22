import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/auth";

const Femininas = () => {
  const { clothes } = React.useContext(AuthContext);
  let navigate = useNavigate();
  const feminineClothes = clothes.filter((cloth) => {
    return cloth.gender === "F";
  });

  return <div>Pagina extremamente feminina</div>;
};

export default Femininas;
