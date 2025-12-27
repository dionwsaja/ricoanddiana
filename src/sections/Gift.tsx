import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Gift = () => {
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
        trigger: "#gift",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".gift-title", { y: 50, opacity: 0, duration: 1 }, "-=1");

    tl.from(
      ".gift-text",
      { y: 40, opacity: 0, duration: 1, stagger: 0.3 },
      "-=0.8"
    );

    tl.from(
      ".gift-card",
      { y: 60, opacity: 0, duration: 1.2, stagger: 0.4 },
      "-=0.6"
    );

    tl.from(
      ".icon-gift",
      {
        scale: 0.8,
        rotate: -10,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=1"
    );
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening disalin!");
  };

  return (
    <section
      id="gift"
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="gift-title font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-8 drop-shadow-lg">
          Wedding Gift
        </h2>

        <div className="gift-text text-[#F5F0E6] text-xl md:text-2xl font-light leading-relaxed mb-12">
          <p className="mb-4">
            Your prayers, love, and presence are the greatest gifts we could ask
            for.
          </p>
          <p className="mb-4">
            If you wish to share a gift/ blessing, the information is available
            below
          </p>
          <p>Thank you for your kindness.</p>
        </div>

        <div className="flex w-full  justify-center items-center">
          <div className="gift-card bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-8 border border-[#C5A065]/50 shadow-lg">
            <h3 className="text-[#C5A065] text-2xl font-medium mb-4">
              Bank Jatim
            </h3>
            <p className="text-[#F5F0E6] text-lg mb-3">a.n TUTIK HANDAYANI</p>
            <div className="flex items-center justify-center gap-4">
              <p className="text-[#F5F0E6]/90 text-xl font-light">0276402340</p>
              <button
                onClick={() => copyToClipboard("901133891203")}
                className="px-4 py-2 bg-[#C5A065]/30 text-[#C5A065] rounded-full text-sm hover:bg-[#C5A065]/50 transition"
              >
                Salin
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
