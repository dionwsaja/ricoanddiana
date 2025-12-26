// import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  TbArrowNarrowLeftDashed,
  TbArrowNarrowRightDashed,
} from "react-icons/tb";
import "swiper/css";
import "swiper/css/autoplay";

// IMPORT FOTO (pastikan path benar)
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";

const prewedPhotos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const PrewedSection = () => {
  return (
    <section
      id="prewed"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }} // delay per elemen
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065] drop-shadow-lg">
            Prewedding Moments
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }} // delay per elemen
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {prewedPhotos.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden group rounded-3xl transition-all duration-700 ease-out shadow-2xl border-2 border-[#C5A065]/20 hover:border-[#C5A065]/50">
                  <img
                    src={img}
                    alt={`Prewedding ${index + 1}`}
                    className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/3] transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center text-sm md:text-lg text-[#C5A065]/80 gap-x-4 mt-8">
            <TbArrowNarrowLeftDashed className="text-3xl" />
            <p className="">Slide untuk melihat lebih banyak</p>
            <TbArrowNarrowRightDashed className="text-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
