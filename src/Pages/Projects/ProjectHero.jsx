import { motion } from "framer-motion";

const ProjectHero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-18 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between md:items-end gap-12">
        {/* LEFT TEXT */}
        <div className="space-y-6 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-amber-500 font-semibold uppercase tracking-[0.4em] text-xs"
          >
            The Archive
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
          >
            Featured <br />
            <span className="text-amber-500 italic">Museum</span>
          </motion.h1>
        </div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-10 md:gap-12 border-l border-neutral-300 dark:border-white/10 pl-8 md:pl-12"
        >
          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-bold block">150+</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Total Projects
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl md:text-4xl font-bold block">12</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Countries
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
