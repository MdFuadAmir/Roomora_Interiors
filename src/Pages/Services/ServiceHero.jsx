import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import banner from "../../../public/Images/q11.jpg";
const ServiceHero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src={banner}
            alt="Services Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-5xl px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-400 font-semibold uppercase tracking-[0.4em] text-xs"
        >
          Our Offerings
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-8xl font-display font-medium tracking-widest leading-[0.9]
                     text-white drop-shadow-lg"
        >
          CRAFTING <br />
          <span className="text-amber-400 italic">EXCELLENCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
        >
          Bespoke interior architectural solutions for elite residential and
          commercial properties globally.
        </motion.p>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 flex flex-col items-center gap-2
                   text-white/70 hover:text-amber-400 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">
          Explore Services
        </span>
        <FaChevronDown size={20} />
      </motion.button>
    </section>
  );
};

export default ServiceHero;
