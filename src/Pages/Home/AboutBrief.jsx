import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../../public/Images/q1.jpg";
import img2 from "../../../public/Images/q2.jpg";
import { useNavigate } from "react-router";

const AboutBrief = () => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    damping: 15,
    stiffness: 150,
  };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about-brief"
      className="py-16 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-4/5 aspect-4/5 relative z-10 shadow-2xl overflow-hidden"
          >
            <img
              src={img2}
              alt="Designer work"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-10 -right-4 w-3/5 aspect-square z-20 border-12 border-[#FAF9F6] dark:border-[#121212] shadow-xl overflow-hidden  sm:block"
          >
            <img
              src={img1}
              alt="Interior detail"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs"
            >
              Our Legacy
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
            >
              Defining Luxury Through Timeless Design
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-lg"
          >
            With over a decade of experience in high-end design, Lumière has
            become a symbol of sophistication and innovative spatial solutions.
            Our approach is deeply personal—we translate your vision into an
            architectural masterpiece that stands the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <motion.button
            onClick={()=>navigate('/about')}
              ref={buttonRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              className="group relative px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Read More
              <FaArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrief;
