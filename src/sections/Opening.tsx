import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import backgroundImage from "../assets/images/1.jpg";
import flowers from "../assets/materials/flowers.png";

gsap.registerPlugin(ScrollTrigger);

export const Opening = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth: true,
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#opening",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".bg-image",
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 2 }
    );

    tl.to(".overlay", { opacity: 1, duration: 1.5 }, "-=1.5");

    tl.from(".header1", { y: 60, opacity: 0, duration: 1.2 }, "-=1");

    tl.from(
      ".header2, .header3",
      { y: 40, opacity: 0, duration: 1, stagger: 0.3 },
      "-=0.8"
    );

    tl.from(
      ".ayat-arab, .ayat-indo",
      { opacity: 0, y: 30, duration: 1.2, stagger: 0.4 },
      "-=0.6"
    );

    // Animasi flowers masuk halus dari bawah
    tl.from(
      ".flowers-bg",
      { y: 200, opacity: 0, duration: 2, ease: "power3.out" },
      "-=1.5"
    );
  }, []);

  return (
    <section
      id="opening"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background utama */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Rico & Diana Prewedding"
          className="bg-image w-full h-full object-cover opacity-0"
        />
        <div className="overlay absolute inset-0 z-0 bg-linear-to-b from-[#1B263B] via-black/50 to-[#1B263B]/80 opacity-0" />
      </div>

      <img
        src={flowers}
        alt="Flowers decoration"
        className="flowers-bg absolute bottom-0 left-0 w-full h-auto object-cover object-bottom z-10 pointer-events-none"
      />

      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <h2 className="header1 font-great-vibes text-4xl md:text-5xl text-[#C5A065] mb-6 drop-shadow-lg">
          With hearts overflowing full of gratitude and joy,
          <br className="hidden md:block" /> we welcome you to our wedding
        </h2>

        <p className="header2 text-[#F5F0E6] text-xl md:text-2xl font-light leading-relaxed mb-8">
          Together with our families, we,{" "}
          <span className="font-medium text-[#C5A065]">Rico & Diana</span>,
          invite you to celebrate our marriage
        </p>

        <p className="header3 text-[#C5A065] text-2xl md:text-3xl font-light tracking-wider mb-12">
          Saturday, 17 January 2026 <br />
          <span className="text-xl">Start at 08:00 AM</span>
        </p>

        <div className="ayat-container bg-[#1B263B]/40 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-[#C5A065]/70 max-w-3xl mx-auto">
          <p className="ayat-arab font-arabic text-3xl md:text-4xl text-[#C5A065] leading-loose mb-6">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="ayat-indo text-[#F5F0E6] text-lg md:text-xl italic font-light">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tenteram kepadanya, dan Dia menjadikan di antaramu mawaddah
            dan rahmah. Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir."
          </p>
          <p className="text-[#C5A065]/80 text-sm mt-4">(QS. Ar-Rum: 21)</p>
        </div>
      </div>
    </section>
  );
};
