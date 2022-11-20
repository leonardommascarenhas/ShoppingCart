import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SectionSlider = ({ products }) => {
  let navigate = useNavigate();

  return (
    <section>
      <h2 className="text-center my-7">Camisas pretas</h2>
      <div className="swiper-container">
        {
          <Swiper
            observeParents={true}
            observer={true}
            className="section-slider"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-right",
              prevEl: ".swiper-left",
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
                <Card
                  productImage={product.imageSrc}
                  productDescription={product.description}
                  productPrice={product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        }
        <span className="swiper-left">
          <BsArrowLeftCircle size={18} />
        </span>
        <span className="swiper-right">
          <BsArrowRightCircle size={18} />
        </span>
      </div>
    </section>
  );
};

const Card = ({ productImage, productImageAlt, productDescription, productPrice }) => {
  return (
    <div className="swiper-content">
      <img className="section-slider-image" src={productImage} alt={productImageAlt}></img>
      <p>{productDescription}</p>
      <p>{productPrice}</p>
    </div>
  );
};

export default SectionSlider;
