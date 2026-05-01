import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import image from "../../../public/Images/q5.jpg";
const VideoTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-18 overflow-hidden group bg-[#FAF9F6] dark:bg-[#0A0A0A] transition-colors">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Video Background"
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[20s] ease-linear"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-12 py-20">
        {/* VIDEO AREA (button replace with iframe) */}
        {!isPlaying ? (
          <motion.button
            onClick={() => setIsPlaying(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="
              relative w-24 h-24 mx-auto
              flex items-center justify-center
              rounded-full
              border border-white/30
              bg-white/5 dark:bg-white/5
              text-white
              hover:bg-amber-500 hover:text-black
              transition-all duration-300
            "
          >
            <FaPlay size={26} className="ml-1" />
            <span className="absolute inset-0 rounded-full border border-amber-400/40 animate-ping opacity-40" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-5xl mx-auto flex justify-center items-center aspect-video"
          >
            <iframe
              className="w-full h-full rounded-xl shadow-2xl"
              src="https://www.youtube.com/embed/XC_VytVqLXI?si=WLJIU0b08MfBuyD1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </motion.div>
        )}

        {/* Text */}
        {!isPlaying && (
          <div className="space-y-6">
            <motion.p className="text-amber-500 font-bold uppercase tracking-[0.4em] text-xs">
              Virtual Walkthrough
            </motion.p>

            <motion.h2 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter">
              Celestial Heights:{" "}
              <span className="text-amber-500">The Video Tour</span>
            </motion.h2>

            <motion.p className="text-black dark:text-neutral-300 max-w-xl mx-auto font-light text-sm md:text-base">
              Experience every corner of our latest masterpiece from the comfort
              of your screen.
            </motion.p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTour;
