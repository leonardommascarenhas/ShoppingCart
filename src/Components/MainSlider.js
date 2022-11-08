import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import img1 from "../imgs/mainSlider-1.jpg";
import img2 from "../imgs/mainSlider-2.jpg";
import img3 from "../imgs/mainSlider-3.jpg";

const MainSlider = () => {
  const images = [img1, img2, img3];

  return (
    <>
      {
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2100 }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} className="w-[99vw] h-[52vw] object-cover"></img>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </>
  );
};
export default MainSlider;
