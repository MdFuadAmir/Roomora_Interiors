import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  const cards = [
    {
      icon: FaEye,
      title: "Our Vision",
      content:
        "To be the global benchmark for sophisticated living, creating architectural experiences that transcend time and resonate with the human soul.",
    },
    {
      icon: FaBullseye,
      title: "Our Mission",
      content:
        "Combining engineering precision with artistic passion to deliver bespoke interior solutions that elevate every facet of our clients' lives.",
    },
  ];

  return (
    <section className="py-16 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="
                group
                bg-white dark:bg-[#222222]
                border border-amber-100 dark:border-white/10
                p-8 md:p-12
                rounded-xl
                shadow-sm hover:shadow-xl
                transition-all duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-16 h-16
                  flex items-center justify-center
                  rounded-xl
                  bg-amber-50 dark:bg-amber-500/10
                  text-amber-500
                  shadow-sm
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                <card.icon size={28} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                {card.title}
              </h3>

              {/* Content */}
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base md:text-lg font-light">
                {card.content}
              </p>

              {/* Accent line */}
              <div className="mt-8 h-0.5 w-16 bg-amber-400 group-hover:w-28 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;