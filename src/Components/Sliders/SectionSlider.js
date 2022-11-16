import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

const SectionSlider = ({ products }) => {
  return (
    <section>
      <h2 className="text-center my-7">Camisas pretas</h2>
      {
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              height: 200,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                productImage={product.imageSrc}
                productDescription={product.description}
                productPrice={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

const Card = ({ productImage, productImageAlt, productDescription, productPrice }) => {
  return (
    <>
      <img className="section-slider-image" src={productImage} alt={productImageAlt}></img>
      <p>{productDescription}</p>
      <p>{productPrice}</p>
    </>
  );
};

export default SectionSlider;
