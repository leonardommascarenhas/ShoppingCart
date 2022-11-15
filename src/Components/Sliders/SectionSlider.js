import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

import Card from "../Card";
import img1 from "../../imgs/Black-shirts/Masculino/allef-vinicius-flFI_7Rs6Ik-unsplash.jpg";
const SectionSlider = () => {
  return (
    <>
      {
        <Swiper modules={[Navigation]} slidesPerView={4} spaceBetween={20} navigation>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
          <SwiperSlide>
            <Card itemImage={img1} itemDescription="Teste" />
          </SwiperSlide>
        </Swiper>
      }
    </>
  );
};
export default SectionSlider;
