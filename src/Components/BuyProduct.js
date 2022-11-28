import { useParams } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { AuthContext } from "../Providers/auth";

const BuyProduct = () => {
  const { allProducts } = React.useContext(AuthContext);
  const size = useRef("P");
  const quantity = useRef(1);

  const buy = () => {
    return alert(`você comprou ${quantity.current.value} unidades de tamanho ${size.current.value}`);
  };

  let { product } = useParams();

  const clickedCloth = allProducts.filter((cloth) => {
    return cloth.link === product;
  });

  return (
    <div className="grid grid-areas-slim grid-cols-slim grid-rows-slim lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout min-h-[80vh]">
      <img src={clickedCloth[0].imageSrc} className="grid-in-[product] h-full"></img>
      <h1 className="grid-in-[name] text-lg font-weight-700">{clickedCloth[0].name}</h1>
      <section className="grid-in-[size] flex flex-col">
        <h2 className="grid-in-[price] ">R$ {clickedCloth[0].price}</h2>
        <form action="" method="post" onSubmit={buy}>
          <label htmlFor="tamanho">Tamanho</label>
          <select className="w-24 border border-gray-900" ref={size}>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
            <option value="XG">XG</option>
          </select>
          <br />
          <label htmlFor="quantity">Quantidade</label>
          <div className="flex">
            <input type="number" name="quantity" id="quantity" ref={quantity} min="1" required />
            <button className="width">Comprar</button>
          </div>
          <aside className=" grid-in-[aside]">
            A Sunt incididunt Lorem nostrud velit qui anim id. Est aute cupidatat nostrud esse. Laborum duis
            exercitation sunt amet duis ipsum ea esse dolor. Irure minim veniam id enim deserunt aliquip ipsum
            officia eiusmod fugiat in.
            <ul className="list-disc">
              <li>Exercitation deserunt cupidatat laboris pariatur eu voluptate proident enim.</li>
              <li>Eu dolore consectetur culpa ipsum proident non minim commodo culpa duis nisi.</li>
              <li>Labore laborum pariatur est reprehenderit.</li>
              <li>Reprehenderit reprehenderit aliqua laborum est id commodo commodo do anim est</li>
            </ul>
          </aside>
        </form>
      </section>
    </div>
  );
};

export default BuyProduct;
