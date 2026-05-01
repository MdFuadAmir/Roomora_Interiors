import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import img1 from "../../../public/Images/q5.jpg";
import img2 from "../../../public/Images/q4.jpg";
import img3 from "../../../public/Images/q3.jpg";
const titleText = "We Design Your Dreams Into Reality";

const images = [img1, img2, img3];

const Hero = () => {
  const words = titleText.split(" ");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative md:min-h-screen flex items-center overflow-hidden py-24 bg-[#FAF9F6] dark:bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          className="space-y-8 z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-neutral-900 dark:text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={child}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={child}
            className="text-lg max-w-lg leading-relaxed font-light text-neutral-600 dark:text-neutral-300"
          >
            Exceptional interior design for residential and commercial spaces.
            We blend aesthetic brilliance with functional excellence to create
            environments that inspire.
          </motion.p>

          <motion.div variants={child} className="flex flex-wrap gap-4 pt-4">
            <Link
              to={"/projects"}
              className="bg-amber-500 text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs flex items-center group hover:bg-amber-600 transition-all duration-300"
            >
              View Projects
              <FaArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </Link>

            <Link
              to={"/services"}
              className="border border-neutral-900 dark:border-white text-neutral-900 dark:text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <div className="relative md:flex items-center justify-center w-full">
          {/* Glow */}
          <motion.div
            className="absolute w-105 h-105 rounded-full bg-amber-300/20 dark:bg-amber-500/10 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
          {/* Main Image */}
          <div className="relative w-full h-80 md:h-125 overflow-hidden rounded-t-full shadow-2xl">
            {/* Old Image (goes out) */}
            <motion.img
              key={"old-" + index}
              src={images[(index - 1 + images.length) % images.length]}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ clipPath: "inset(0 0 0 0)" }}
              animate={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* New Image (comes in) */}
            <motion.img
              key={"new-" + index}
              src={images[index]}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          {/* Floating Top */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-0 left-0 w-20 h-20 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Bottom */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-12 right-0 w-20 h-20 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
