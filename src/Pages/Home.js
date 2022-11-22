import React from "react";
import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import { AuthContext } from "../Providers/auth";

function Home() {
  const { blackShirts, acessorios } = React.useContext(AuthContext);

  return (
    <>
      <MainSlider />
      <SectionSlider products={blackShirts} title="Camisas Pretas" sliderClass="camisaPreta" />
      <SectionSlider products={acessorios} title="Acessorios" sliderClass="acessorio" />
    </>
  );
}

export default Home;
