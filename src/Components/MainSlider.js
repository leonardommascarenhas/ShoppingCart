import { motion } from "framer-motion";

import img1 from "../imgs/mainSlider-1.jpg";
import img2 from "../imgs/mainSlider-2.jpg";
import img3 from "../imgs/mainSlider-3.jpg";

const MainSlider = () => {
  const images = [img1, img2, img3];
  return (
    <div>
      <motion.div>
        <motion.div>
          {images.map((image) => (
            <motion.div key={image}>
              <img src={image} alt={image.name}></img>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainSlider;
