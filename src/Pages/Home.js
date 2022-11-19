import React from "react";
import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import { AuthContext } from "../Providers/auth";

function Home() {
  const clothes = React.useContext(AuthContext);

  return (
    <>
      <MainSlider />
      <SectionSlider products={clothes} />
    </>
  );
}

export default Home;
