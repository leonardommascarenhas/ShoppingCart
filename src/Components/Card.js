const Card = ({ itemImage, itemDescription }) => {
  return (
    <>
      <img className="section-slider-image" src={itemImage}></img>
      <p>{itemDescription}</p>
    </>
  );
};
