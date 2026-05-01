import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  FaSearch,
  FaPenNib,
  FaLightbulb,
  FaKey,
} from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    title: "Consultation",
    description:
      "Understanding your vision, lifestyle, and project requirements.",
  },
  {
    icon: FaPenNib,
    title: "Design",
    description:
      "Creating comprehensive 3D models and curated material palettes.",
  },
  {
    icon: FaLightbulb,
    title: "Refinement",
    description:
      "Iterating on feedback to perfect every technical and aesthetic detail.",
  },
  {
    icon: FaKey,
    title: "Delivery",
    description:
      "Seamless execution and final handover of your dream space.",
  },
];

const WorkProcess = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="work-process"
      ref={containerRef}
      className="py-20 md:py-32 px-6 sm:px-12 bg-[#ECE5DA] dark:bg-[#17130f] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-24">

        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-semibold uppercase tracking-[0.28em] text-[10px] sm:text-xs"
          >
            How It Works
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Our Seamless Process
          </motion.h2>
        </div>

        {/* Process */}
        <div className="relative">

          {/* Progress Background */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-neutral-300 dark:bg-neutral-800 hidden md:block" />

          {/* Animated Progress */}
          <motion.div
            className="absolute top-8 left-0 w-full h-0.5 bg-amber-500 origin-left hidden md:block"
            style={{ scaleX }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 md:gap-10 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18 }}
                className="flex flex-col items-center text-center space-y-6 group cursor-pointer transition-all duration-500 hover:-translate-y-3"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1e1e1e] border-2 border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-amber-500 relative shadow-lg">
                    <Icon size={22} />

                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-amber-500 text-white text-xs font-bold flex items-center justify-center rounded-full">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-55">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;