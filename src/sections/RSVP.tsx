import { motion } from "framer-motion";

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
} satisfies import("framer-motion").Variants;

export const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B263B 0%, #0d1a2e 100%)",
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="font-great-vibes text-5xl md:text-6xl text-[#C5A065] mb-8 drop-shadow-lg">
            Konfirmasi Kehadiran
          </h2>

          <p className="text-[#F5F0E6] text-xl md:text-2xl font-light leading-relaxed mb-12">
            Kehadiran Anda adalah hadiah terbesar bagi kami. Mohon konfirmasi
            kehadiran Anda di bawah ini.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="bg-[#1B263B]/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#C5A065]/30 shadow-2xl"
        >
          <form className="space-y-8">
            {/* Nama Lengkap */}
            <div className="text-left">
              <label
                htmlFor="name"
                className="block text-[#C5A065] text-lg font-medium mb-3"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama lengkap Anda"
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] placeholder-[#F5F0E6]/50 focus:outline-none focus:border-[#C5A065] transition-all duration-300"
              />
            </div>

            {/* Jumlah Tamu */}
            <div className="text-left">
              <label
                htmlFor="guests"
                className="block text-[#C5A065] text-lg font-medium mb-3"
              >
                Jumlah Tamu (termasuk diri sendiri)
              </label>
              <select
                id="guests"
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] focus:outline-none focus:border-[#C5A065] transition-all duration-300"
              >
                <option value="">Pilih jumlah tamu</option>
                <option value="1">1 Orang (Hanya Saya)</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
                <option value="5+">Lebih dari 4 Orang</option>
              </select>
            </div>

            {/* Ucapan */}
            <div className="text-left">
              <label
                htmlFor="message"
                className="block text-[#C5A065] text-lg font-medium mb-3"
              >
                Ucapan & Doa (Opsional)
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tuliskan ucapan atau doa Anda di sini..."
                className="w-full px-6 py-4 bg-[#0d1a2e]/50 border border-[#C5A065]/30 rounded-xl text-[#F5F0E6] placeholder-[#F5F0E6]/50 focus:outline-none focus:border-[#C5A065] transition-all duration-300"
              />
            </div>

            {/* Tombol Kirim */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-6 px-12 py-5 bg-[#C5A065] text-[#1B263B] font-medium rounded-full text-xl tracking-wide hover:bg-[#d4b27a] transition-all duration-300 shadow-lg"
            >
              Kirim Konfirmasi
            </motion.button>
          </form>

          <p className="text-[#F5F0E6]/70 text-sm mt-8 italic">
            Konfirmasi paling lambat 10 Januari 2026. Terima kasih!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
