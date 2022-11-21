import React from "react";
import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import { AuthContext } from "../Providers/auth";

function Home() {
  const { clothes, acessorios } = React.useContext(AuthContext);

  return (
    <>
      <MainSlider />
      <SectionSlider products={clothes} title="camisa pretas" />
      <SectionSlider products={acessorios} title="Acessorios" />
    </>
  );
}

export default Home;
