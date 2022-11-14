import { Swiper, SwiperSlider } from "swiper";
import "swiper/css";
import { Navigation } from "swiper";

const SectionSlider = () => {
  <Swiper modules={[Navigation]} slidesPerView={4} spaceBetween={20} navigation></Swiper>;
};
