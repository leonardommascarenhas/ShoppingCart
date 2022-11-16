import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

const SectionSlider = ({ products }) => {
  return (
    <section>
      <h2 className="text-center mt-7">Camisas pretas</h2>
      {
        <Swiper modules={[Navigation]} slidesPerView={4} navigation grabCursor={true} spaceBetween={20}>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card
                productImage={product.imageSrc}
                productDescription={product.description}
                itemPrice={product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

const Card = ({ productImage, productImageAlt, productDescription, price }) => {
  return (
    <>
      <img className="section-slider-image" src={productImage} alt={productImageAlt}></img>
      <p>{productDescription}</p>
      <p>{price}</p>
    </>
  );
};

export default SectionSlider;
