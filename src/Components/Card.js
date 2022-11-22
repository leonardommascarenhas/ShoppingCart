const Card = ({ productImage, productImageAlt, productName, productPrice }) => {
  return (
    <>
      <img className="section-slider-image" src={productImage} alt={productImageAlt}></img>
      <p>{productName}</p>
      <p>{productPrice}</p>
    </>
  );
};

export default Card;
