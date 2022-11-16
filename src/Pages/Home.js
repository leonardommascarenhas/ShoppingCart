import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import img1 from "../imgs/Black-shirts/Masculino/allef-vinicius-flFI_7Rs6Ik-unsplash.jpg";
import img2 from "../imgs/Black-shirts/Masculino/luis-quintero-3qqiMT2LdR8-unsplash.jpg";
import img3 from "../imgs/Black-shirts/Masculino/pexels-jansel-ferma-2315303.jpg";

function Home() {
  const arr = [
    {
      imageSrc: img1,
      description: "Manga curta preta",
      alt: "Camisa manga curta preta",
      price: "249,90",
    },
    {
      imageSrc: img2,
      description: "teste",
      alt: "Camisa manga curta preta 2",
      price: "249,90",
    },
    { img3 },
  ];
  return (
    <>
      <MainSlider />
      <SectionSlider images={arr} />
    </>
  );
}

export default Home;
