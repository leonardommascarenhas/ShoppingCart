const Card = ({ productImage, productImageAlt, productName, productPrice }) => {
  return (
    <>
      <img className="section-slider-image" src={productImage} alt={productImageAlt}></img>
      <p className="text-center">{productName}</p>
      <p className="text-center">{productPrice}</p>
    </>
  );
};

export default Card;
