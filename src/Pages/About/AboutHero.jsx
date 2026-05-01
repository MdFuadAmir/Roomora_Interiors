import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import banner from "../../../public/Images/q7.jpg";


const AboutHero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={banner}
          alt="About Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Better Overlay */}
        <div className="absolute inset-0 bg-[#1a120d]/55 dark:bg-[#120d09]/75" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/55 dark:from-black/30 dark:via-black/45 dark:to-black/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl space-y-6"
      >
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
          <Link
            to="/"
            className="hover:text-white transition-colors text-neutral-200"
          >
            Home
          </Link>

          <FaChevronRight size={10} className="text-amber-400" />

          <span className="text-white/90">About Us</span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white"
        >
          Our Story <span className="text-amber-400">&</span> Legacy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed"
        >
          Crafting timeless interiors that blend luxury, function, and
          personality — transforming spaces into experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
