import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const statsData = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 450, label: "Projects Completed", suffix: "+" },
  { value: 24, label: "Expert Designers", suffix: "" },
  { value: 99, label: "Satisfied Clients", suffix: "%" },
];

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <section
      id="stats-section"
      className="py-24 px-6 sm:px-12 bg-[#F1ECE4] dark:bg-[#181818]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="space-y-3"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-amber-500 dark:text-amber-400">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>

              {/* Label */}
              <p className="uppercase tracking-widest text-[11px] font-semibold text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </p>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.4 }}
                className="h-0.5 bg-amber-500 mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;