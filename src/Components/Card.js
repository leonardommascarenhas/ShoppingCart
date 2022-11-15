const Card = ({ itemImage, itemDescription }) => {
  return (
    <div className="h-[150px] w-20">
      <img className="section-slider-image" src={itemImage}></img>
      <p>{itemDescription}</p>
    </div>
  );
};

export default Card;
