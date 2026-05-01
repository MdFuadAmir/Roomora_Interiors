import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    desc: "Roomora Interiors was founded with a vision to craft timeless and functional interior spaces.",
  },
  {
    year: "2014",
    title: "Industry Recognition",
    desc: "Received national appreciation for innovative residential and commercial design excellence.",
  },
  {
    year: "2018",
    title: "Expanding Horizons",
    desc: "Expanded our creative footprint across multiple premium residential and commercial projects.",
  },
  {
    year: "2022",
    title: "Innovation Studio",
    desc: "Launched our creative design lab for modern luxury interiors and spatial experimentation.",
  },
  {
    year: "Present",
    title: "Shaping Tomorrow",
    desc: "Continuing to redefine elegant living through refined craftsmanship and visionary interiors.",
  },
];

const HistoryTimeline = () => {
  return (
    <section className="py-18 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Left */}
        <div className="md:w-1/3 space-y-6">
          <h4 className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">
            Our Evolution
          </h4>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
            A Decade of Excellence
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed">
            Our journey reflects how passion, persistence, and timeless design
            create a legacy that continues to inspire.
          </p>
        </div>

        {/* Timeline */}
        <div className="md:w-2/3 relative space-y-12">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-amber-300/40 dark:bg-amber-500/20" />

          {milestones.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Dot */}
              <div className="absolute left-2.75 md:left-6.75 top-2 w-2.5 h-2.5 bg-[#FAF9F6] dark:bg-[#18110D] border-2 border-amber-500 rounded-full group-hover:scale-150 group-hover:bg-amber-500 transition-all duration-300 z-10" />

              <span className="text-amber-500 font-bold text-xl block mb-2">
                {item.year}
              </span>

              <h3 className="text-xl md:text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
