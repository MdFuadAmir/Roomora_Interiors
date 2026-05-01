import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import image from"../../../public/Images/owners/o2.jpg"
const ProjectTestmonials = () => {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-12 bg-amber-50/20 dark:bg-[#0A0A0A] transition-colors">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full flex justify-center">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-70 h-70 md:w-105 md:h-105 bg-amber-100 dark:bg-white/5 rounded-full overflow-hidden border-16 border-white dark:border-white/10 shadow-xl "
        >
          <img
            src={image}
            alt="Happy Client"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        </div>

        {/* Text */}
        <div className="space-y-8 relative">
          <FaQuoteLeft className="absolute -top-10 -left-6 text-amber-200/60 dark:text-white/10 w-20 h-20" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium italic leading-relaxed text-neutral-800 dark:text-neutral-200"
          >
            "Lumière didn't just design our penthouse; they created a visual
            narrative of our journey as a family. Every material, every light
            fixture has a story. It's truly a work of art."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
              Roomel Wilson
            </h4>
            <p className="text-amber-600 dark:text-amber-500 text-xs font-semibold uppercase tracking-widest mt-1">
              Owner, Sapphire Villa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTestmonials;
