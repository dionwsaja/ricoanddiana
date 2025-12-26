import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  TbArrowNarrowLeftDashed,
  TbArrowNarrowRightDashed,
} from "react-icons/tb";
import "swiper/css";
import "swiper/css/autoplay";

const prewedPhotos = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
];

const fadeInUp: Variants = {
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
          className="text-center mb-16"
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065]">
            Prewedding Moments
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          {prewedPhotos.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={src}
                  alt={`Prewedding ${i + 1}`}
                  className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/3]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4 mt-8 text-[#C5A065]/80">
          <TbArrowNarrowLeftDashed className="text-3xl" />
          <p>Slide untuk melihat lebih banyak</p>
          <TbArrowNarrowRightDashed className="text-3xl" />
        </div>
      </div>
    </section>
  );
};
