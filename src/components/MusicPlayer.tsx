import { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    try {
      console.log("Memulai inisialisasi Howl...");
      soundRef.current = new Howl({
        src: ["/assets/music/bgm.mp3"], // ← path dari public
        loop: true,
        volume: 0.5,
        autoplay: false,
        onload: () => console.log("Musik berhasil dimuat"),
        onloaderror: (id, err) => console.error("Gagal load musik:", err),
        onend: () => console.log("Lagu selesai, repeat karena loop: true"),
      });

      const playPromise = soundRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Musik mulai play");
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Autoplay diblok browser:", err);
            setIsPlaying(false);
          });
      }
    } catch (err) {
      console.error("Error saat inisialisasi musik:", err);
    }

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const togglePlay = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
        setIsPlaying(false);
      } else {
        soundRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="w-16 h-16 md:w-20 md:h-20 bg-[#1B263B]/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-[#C5A065]/50 hover:border-[#C5A065] transition-all duration-500 group relative"
        aria-label={isPlaying ? "Pause Musik" : "Play Musik"}
      >
        {isPlaying ? (
          <FaCirclePause className="text-[#C5A065] text-4xl md:text-5xl group-hover:scale-110 transition-transform z-10" />
        ) : (
          <FaCirclePlay className="text-[#C5A065] text-4xl md:text-5xl group-hover:scale-110 transition-transform z-10" />
        )}

        {/* Piringan berputar */}
        <div
          className={`absolute inset-0 rounded-full border-4 border-[#C5A065]/30 animate-spin ${
            isPlaying ? "duration-[8000ms]" : "duration-[12000ms]"
          }`}
        >
          <div className="absolute inset-2 rounded-full border border-[#C5A065]/50" />
        </div>
      </button>
    </div>
  );
};

export default MusicPlayer;
