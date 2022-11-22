import React from "react";

//black shirts
import img1 from "../imgs/Black-shirts/Masculino/allef-vinicius-flFI_7Rs6Ik-unsplash.jpg";
import img2 from "../imgs/Black-shirts/Masculino/luis-quintero-3qqiMT2LdR8-unsplash.jpg";
import img3 from "../imgs/Black-shirts/Masculino/pexels-jansel-ferma-2315303.jpg";
import img4 from "../imgs/Black-shirts/Masculino/white-striped.jpg";
import img5 from "../imgs/Black-shirts/Feminino/vlah-dumitru-SeeiNC9snZg-unsplash.jpg";

//acessorios
import bone1 from "../imgs/Acessorios/Bonés/hassan-ouajbir-Q-EWbNrfvVU-unsplash.jpg";
import bone2 from "../imgs/Acessorios/Bonés/joe-ciciarelli-FwVnAY_xMaY-unsplash.jpg";
import bone3 from "../imgs/Acessorios/Bonés/photo-1588850561407-ed78c282e89b.jpg";
import touca1 from "../imgs/Acessorios/Toucas/dushawn-jovic-cruUfe5g1Zk-unsplash.jpg";
import touca2 from "../imgs/Acessorios/Toucas/jordan-whitfield-Lprffwrv9cY-unsplash.jpg";
import touca3 from "../imgs/Acessorios/Toucas/logan-weaver-lgnwvr-C47a33QNi18-unsplash.jpg";
import touca4 from "../imgs/Acessorios/Toucas/taan-huyn-gIrrIydPu6U-unsplash.jpg";
import touca5 from "../imgs/Acessorios/Toucas/yannic-laderach-nwR9BCNgZJc-unsplash.jpg";

export const AuthContext = React.createContext([]);

export const AuthProvider = (props) => {
  const blackShirts = [
    {
      imageSrc: img1,
      name: "Basic 1 M",
      alt: "Camisa manga curta preta",
      price: "89,90",
      id: 12783612873,
      link: "basic-1",
    },
    {
      imageSrc: img2,
      name: "Basic 2 M",
      alt: "Camisa manga curta preta 2",
      price: "89,90",
      id: 1298378912,
      link: "basic-2",
    },
    {
      imageSrc: img3,
      name: "Branded M",
      alt: "Camisa manga curta preta 2",
      price: "249,90",
      id: 1289371902783,
      link: "branded",
    },
    {
      imageSrc: img4,
      name: "White Striped M",
      alt: "white striped shirt",
      price: "149,90",
      id: 128937190278,
      link: "whiteStriped",
    },
    {
      imageSrc: img5,
      name: "Basic F",
      alt: "Black shirt F",
      price: "89,90",
      id: 128937130278,
      link: "whiteStriped",
    },
  ];

  const acessorios = [
    {
      imageSrc: bone1,
      name: "Bone NY Jungle",
      alt: "Bone NY jungle",
      price: "79,90",
      id: 228937130278,
      link: "ny-jungle",
    },
    {
      imageSrc: bone2,
      name: "Ice Cream",
      alt: "Ice Cream hat",
      price: "54,90",
      id: 228937133378,
      link: "ice-cream",
    },
    {
      imageSrc: bone3,
      name: "Simple Hat",
      alt: "Simple white hat",
      price: "140,90",
      id: 676363127,
      link: "simple-hat",
    },
    {
      imageSrc: touca1,
      name: "Street Black Cap",
      alt: "Street black Cap",
      price: "87,90",
      id: 6322127,
      link: "street-black-cap",
    },
    {
      imageSrc: touca2,
      name: "Green inca cap",
      alt: "Inca hat",
      price: "60,90",
      id: 636363127,
      link: "green-inca-hat",
    },
    {
      imageSrc: touca3,
      name: "Street Pink cap",
      alt: "Simple white hat",
      price: "79,90",
      id: 2123222,
      link: "street-pink-estampado",
    },
    {
      imageSrc: touca4,
      name: "Whitered Cap",
      alt: "Whitered",
      price: "60,90",
      id: 22200030278,
      link: "whitered-cap",
    },
    {
      imageSrc: touca5,
      name: "Pointed Street Cap",
      alt: "Pointed Street Cap",
      price: "64,90",
      id: 12837130278,
      link: "pointed-cap",
    },
  ];

  const clothes = blackShirts.concat(acessorios);

  return (
    <AuthContext.Provider value={{ blackShirts, acessorios, clothes }}>{props.children}</AuthContext.Provider>
  );
};
