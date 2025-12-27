import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const EventSection = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
        trigger: "#event",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".bg-image",
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 0.4, duration: 2 }
    );

    tl.to(".overlay", { opacity: 1, duration: 1.5 }, "-=1.5");

    tl.from(".event-title", { y: 50, opacity: 0, duration: 1 }, "-=1");

    tl.from(
      ".akad-card, .resepsi-card, .place-card",
      { y: 60, opacity: 0, duration: 1.2, stagger: 0.3 },
      "-=0.8"
    );

    tl.from(
      ".divider-line",
      { width: 0, duration: 1.5, ease: "power3.out" },
      "-=1"
    );
  }, []);

  return (
    <section
      id="event"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/3.jpg"
          alt="Event Background"
          className="bg-image w-full h-full object-cover opacity-0"
        />
        <div className="overlay absolute inset-0 bg-white/40 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="event-title font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-16 drop-shadow-lg">
          Save the Date
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative">
          <div className="divider-line hidden md:block absolute top-0 bottom-0 left-1/2 w-0 h-full border-l-2 border-[#C5A065]/70 transform -translate-x-1/2" />

          <div className="akad-card bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/50 shadow-lg text-center md:text-right w-full md:w-1/2">
            <h3 className="font-great-vibes text-4xl text-[#C5A065] mb-4">
              Akad Nikah
            </h3>
            <p className="text-[#F5F0E6] text-2xl font-light">
              08:00 - 09:00 WIB
            </p>
          </div>

          <div className="resepsi-card bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/50 shadow-lg text-center md:text-left w-full md:w-1/2">
            <h3 className="font-great-vibes text-4xl text-[#C5A065] mb-4">
              Resepsi
            </h3>
            <p className="text-[#F5F0E6] text-2xl font-light">
              10:00 - Selesai
            </p>
          </div>
        </div>

        <div className="place-card bg-[#1B263B]/60 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#C5A065]/50 shadow-lg mt-12 max-w-3xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1766847561628!6m8!1m7!1s9KsWv5Q7xPFQPcmVdG-XiA!2m2!1d-7.465682569600196!2d112.6269285791352!3f25.901247!4f0!5f0.7820865974627469"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />

          <h3 className="font-great-vibes text-3xl text-[#C5A065] my-6">
            Tempat
          </h3>
          <p className="text-[#F5F0E6] text-xl font-light mb-4">
            Desa.Bulangan Rt.03 Rw.01 kecamatan dukun kabupaten gresik
          </p>
          <a
            href="https://maps.app.goo.gl/mAKyYD9p1BjwrmGR9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#C5A065] text-white font-medium rounded-full text-lg mt-4 hover:bg-[#d4b27a] transition-colors shadow-lg"
          >
            Buka Maps
          </a>
        </div>

        <p className="text-[#C5A065] text-3xl font-light tracking-widest mt-12">
          17 . 01 . 2026
        </p>

        <button className="mt-6 px-8 py-4 bg-[#C5A065]/80 text-white rounded-full text-lg hover:bg-[#C5A065] transition-colors">
          Add to Calendar
        </button>
      </div>
    </section>
  );
};
