import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

const SectionSlider = ({ products, title, sliderClass }) => {
  let navigate = useNavigate();

  return (
    <section>
      <h2 className="text-center my-7">{title}</h2>
      <div className="swiper-container">
        {
          <Swiper
            observeParents={true}
            observer={true}
            className="section-slider"
            modules={[Navigation]}
            navigation={{
              nextEl: `.${sliderClass}`,
              prevEl: `.${sliderClass}`,
            }}
            speed={1200}
            spaceBetween={20}
            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                height: 200,
                slidesPerGroup: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
              },
            }}
            loop
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                onClick={() => {
                  navigate(`/collection/${product.link}`);
                }}
              >
                <div className="swiper-content">
                  <Card
                    productImage={product.imageSrc}
                    productName={product.name}
                    productPrice={product.price}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
        <span className={`swiper-left ${sliderClass}`}>
          <BsArrowLeftCircle size={18} />
        </span>
        <span className={`swiper-right ${sliderClass}`}>
          <BsArrowRightCircle size={18} />
        </span>
      </div>
    </section>
  );
};

export default SectionSlider;
