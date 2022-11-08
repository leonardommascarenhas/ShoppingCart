import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img1 from "../imgs/mainSlider-1.jpg";
import img2 from "../imgs/mainSlider-2.jpg";
import img3 from "../imgs/mainSlider-3.jpg";

const MainSlider = () => {
  const images = [img1, img2, img3];

  return (
    <>
      {
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
          className="w-screen"
        >
          {images.map((image) => (
            <SwiperSlide key={image} className="aspect-w-4 aspect-h-5">
              <img src={image} className="w-full h-[58vw] object-cover"></img>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </>
  );
};
export default MainSlider;
