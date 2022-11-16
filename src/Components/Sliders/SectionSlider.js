import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

const SectionSlider = ({ images }) => {
  return (
    <section>
      <h2 className="text-center mt-7">Camisas pretas</h2>
      {
        <Swiper modules={[Navigation]} slidesPerView={4} spaceBetween={20} navigation>
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Card itemImage={image.imageSrc} itemDescription={image.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

const Card = ({ itemImage, itemImageAlt, itemDescription, price }) => {
  return (
    <div className="h-[300px] w-[200px] mt-5">
      <img className="section-slider-image" src={itemImage} alt={itemImageAlt}></img>
      <p>{itemDescription}</p>
      <p>{price}</p>
    </div>
  );
};

export default SectionSlider;
