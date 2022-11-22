import React from "react";
import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import { AuthContext } from "../Providers/auth";

function Home() {
  const { blackShirts, acessorios } = React.useContext(AuthContext);

  return (
    <>
      <MainSlider />
      <SectionSlider products={blackShirts} title="camisa pretas" />
      <SectionSlider products={acessorios} title="Acessorios" />
    </>
  );
}

export default Home;
