import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img1 from "../../imgs/mainSlider-1.jpg";
import img2 from "../../imgs/mainSlider-2.jpg";
import img3 from "../../imgs/mainSlider-3.jpg";

const MainSlider = () => {
  const images = [img1, img2, img3];

  return (
    <>
      {
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          navigation
          effect
          speed={800}
          slidesPerView={1}
          loop
          grabCursor={true}
          autoplay={{ delay: 2100 }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
            bulletClass: `swiper-pagination-bullet`,
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} className="w-[100vw] h-[52vw] object-cover"></img>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      }
    </>
  );
};
export default MainSlider;
