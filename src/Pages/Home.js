import MainSlider from "../Components/Sliders/MainSlider";
import SectionSlider from "../Components/Sliders/SectionSlider";
import img1 from "../imgs/Black-shirts/Masculino/allef-vinicius-flFI_7Rs6Ik-unsplash.jpg";
import img2 from "../imgs/Black-shirts/Masculino/luis-quintero-3qqiMT2LdR8-unsplash.jpg";
import img3 from "../imgs/Black-shirts/Masculino/pexels-jansel-ferma-2315303.jpg";
import img4 from "../imgs/Black-shirts/Masculino/white-striped.jpg";

function Home() {
  const blackShirts = [
    {
      imageSrc: img1,
      description: "Basic 1",
      alt: "Camisa manga curta preta",
      price: "149,90",
      id: 12783612873,
    },
    {
      imageSrc: img2,
      description: "Basic 2",
      alt: "Camisa manga curta preta 2",
      price: "249,90",
      id: 1298378912,
    },
    {
      imageSrc: img3,
      description: "Branded",
      alt: "Camisa manga curta preta 2",
      price: "249,90",
      id: 1289371902783,
    },
    {
      imageSrc: img4,
      description: "White Striped",
      alt: "white striped shirt",
      price: "249,90",
      id: 128937190278,
    },
  ];
  return (
    <>
      <MainSlider />
      <SectionSlider products={blackShirts} />
    </>
  );
}

export default Home;
