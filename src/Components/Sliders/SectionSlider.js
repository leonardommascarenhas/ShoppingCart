import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

const SectionSlider = ({ images }) => {
  return (
    <>
      {
        <Swiper modules={[Navigation]} slidesPerView={4} spaceBetween={20} navigation>
          {images.map((image) => (
            <SwiperSlide key={image}>
              <Card itemImage={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </>
  );
};

const Card = ({ itemImage, itemDescription }) => {
  return (
    <div className="h-[150px] w-20">
      <img className="section-slider-image" src={itemImage}></img>
      <p>{itemDescription}</p>
    </div>
  );
};

export default SectionSlider;
