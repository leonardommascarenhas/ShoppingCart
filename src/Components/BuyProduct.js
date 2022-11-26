import { useParams } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = () => {
  const { allProducts } = React.useContext(AuthContext);
  const size = useRef("P");
  const quantity = useRef(0);

  const buy = () => {
    if (quantity.current.value <= 0) {
      return alert("A quantidade escolhida deve ser maior que 0");
    }
    return alert(`você comprou ${quantity.current.value} unidades de tamanho ${size.current.value}`);
  };

  let { product } = useParams();

  const clickedCloth = allProducts.filter((cloth) => {
    return cloth.link === product;
  });

  return (
    <div className="grid grid-areas-slim grid-cols-slim grid-rows-slim lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout">
      <img src={clickedCloth[0].imageSrc} className="grid-in-[product]"></img>
      <h1 className="grid-in-[name]">{clickedCloth[0].name}</h1>
      <h2 className="grid-in-[price]">R$ {clickedCloth[0].price}</h2>
      <section className="grid-in-[size] flex flex-col">
        <form action="" method="post" onSubmit={buy}>
          <label htmlFor="tamanho">Tamanho</label>
          <select className="max-w-[64px] border border-gray-900" ref={size}>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
            <option value="XG">XG</option>
          </select>
          <br />
          <label htmlFor="quantity">Quantidade</label>
          <div className="flex">
            <input type="number" name="quantity" id="quantity" className="border" ref={quantity} min="1" />
            <button className="width">Comprar</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BuyProduct;
