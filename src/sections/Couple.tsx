import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import ribbon from "../assets/materials/ribbon.png";

// Ganti dengan path foto kalian (foto persegi agar lingkaran rapi)
import ricoImage from "../assets/images/rico.png";
import dianaImage from "../assets/images/diana.png";

gsap.registerPlugin(ScrollTrigger);

export const Couple = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
    });

    function raf(time) {
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
        trigger: "#couple",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(".bg-overlay", { opacity: 0 }, { opacity: 1, duration: 1.5 });

    tl.from(".couple-title", { y: 50, opacity: 0, duration: 1 }, "-=1");

    tl.from(
      ".groom-card, .bride-card",
      { y: 60, opacity: 0, duration: 1.2, stagger: 0.4 },
      "-=0.8"
    );

    tl.from(
      ".photo-ring",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "back.out(1.7)",
      },
      "-=1"
    );
  }, []);

  return (
    <section
      id="couple"
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="couple-title font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-16 drop-shadow-lg">
          The Couple
        </h2>

        <div className="flex relative flex-col md:flex-row justify-center items-center gap-12 md:gap-24 ">
          <div className="groom-card text-center">
            <div className="relative mx-auto mb-6">
              <div className="photo-ring w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#C5A065]/50 mx-auto shadow-xl">
                <img
                  src={ricoImage}
                  alt="Muhammad Rico Listiawan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-great-vibes text-3xl md:text-4xl text-[#C5A065] mb-3">
              Muhammad Rico Listiawan
            </h3>
            <p className="text-[#F5F0E6] text-lg font-light mb-2">
              Putra Pertama Bpk. Tulistiono & Ibu Tutik Handayani
            </p>
            <p className="text-[#F5F0E6]/80 text-base mb-4">
              Bulangan, Dukun, Gresik
            </p>
            <a
              href="https://instagram.com/rico_username" // Ganti dengan IG Rico
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A065] hover:text-[#d4b27a] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.157.23.23 3.157.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.158 3.895 3.085 6.822 7.052 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 3.895-.158 6.822-3.085 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.158-3.895-3.085-6.822-6.98-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              @ig nya mas rico
            </a>
          </div>
          <div className="bride-card text-center">
            <div className="relative mx-auto mb-6">
              <div className="photo-ring w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#C5A065]/50 mx-auto shadow-xl">
                <img
                  src={dianaImage}
                  alt="Diana Agustin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-great-vibes text-3xl md:text-4xl text-[#C5A065] mb-3">
              Diana Agustin
            </h3>
            <p className="text-[#F5F0E6] text-lg font-light mb-2">
              Putri Kedua Bpk. Kaseran & Ibu Muzaini
            </p>
            <p className="text-[#F5F0E6]/80 text-base mb-4">
              Sungelebak, Karanggeneng, Lamongan
            </p>
            <a
              href="https://instagram.com/diana_username" // Ganti dengan IG Diana
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A065] hover:text-[#d4b27a] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.157.23.23 3.157.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.158 3.895 3.085 6.822 7.052 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 3.895-.158 6.822-3.085 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.158-3.895-3.085-6.822-6.98-6.98C15.668.014 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              @ig mbak diana
            </a>
          </div>

          <img
            src={ribbon}
            className="absolute -z-20 -rotate-90 md:rotate-0 opacity-25 md:w-125 top-1/2 -translate-y-42"
          />
        </div>
      </div>
    </section>
  );
};
