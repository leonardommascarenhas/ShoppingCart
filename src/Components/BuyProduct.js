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
    <div className="p-3 grid grid-areas-slim grid-cols-slim grid-rows-slim lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout h-full ">
      <img src={clickedCloth[0].imageSrc} className="grid-in-[product] h-full"></img>
      <h1 className="grid-in-[name] text-lg font-semibold mb-3">{clickedCloth[0].name}</h1>
      <section className="grid-in-[size] flex flex-col gap-3 my-7">
        <h2 className="text-lg">R$ {clickedCloth[0].price}</h2>
        <form action="" method="post" onSubmit={buy} className="flex flex-col flex-grow gap-4">
          <div className="flex gap-3">
            <select className="flex-grow h-12 border border-gray-300" ref={size}>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
              <option value="XG">XG</option>
            </select>
            <a href="http://https://cdn.eutotal.com/imagens/medida-roupa-brasil-cke.jpg" className="my-auto">
              tabela de medidas
            </a>
          </div>
          <label htmlFor="quantity">Quantidade:</label>
          <div className="flex w-full h-12 gap-3">
            <input
              type="number"
              className="w-1/5 border border-gray-300 text-center"
              name="quantity"
              id="quantity"
              ref={quantity}
              min="1"
              required
            />
            <button className="rounded-lg bg-neutral-800 lg:bg-neutral-500 text-white hover:bg-neutral-800 w-3/4">
              Comprar
            </button>
          </div>
        </form>
      </section>
      <aside className=" grid-in-[aside] flex flex-col gap-4 text-md font-light">
        <div>
          <span className="text-lg">{clickedCloth[0].name}</span> Lorem nostrud velit qui anim id. Est aute
          cupidatat nostrud esse. Laborum duis exercitation sunt amet duis ipsum ea esse dolor. Irure minim
          veniam id enim deserunt aliquip ipsum officia eiusmod fugiat in.
        </div>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Exercitation deserunt cupidatat laboris pariatur eu voluptate proident enim.
          </li>
          <li className="mb-2">
            Eu dolore consectetur culpa ipsum proident non minim commodo culpa duis nisi.
          </li>
          <li className="mb-2">Labore laborum pariatur est reprehenderit.</li>
          <li>Reprehenderit reprehenderit aliqua laborum est id commodo commodo do anim est</li>
        </ul>
      </aside>
    </div>
  );
};

export default BuyProduct;
