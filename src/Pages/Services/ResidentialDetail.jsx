import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import image from "../../../public/Images/q10.jpg"
const subServices = [
  "Kitchen Mastery",
  "Master Suites",
  "Spa Bathrooms",
  "Living Sanctuaries",
];

const ResidentialDetail = () => {
  return (
    <section className="py-18 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-3/5"
        >
          <div className="aspect-16/10 overflow-hidden rounded-xl shadow-xl relative">
            <img
              src={image}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              alt="Residential Interior"
              referrerPolicy="no-referrer"
            />

            <div className="absolute top-6 left-6 bg-amber-500 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              Elite Living
            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:w-2/5 space-y-8"
        >
          <div className="space-y-3">
            <h4 className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">
              For your home
            </h4>

            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Residential Design
            </h2>
          </div>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light text-base md:text-lg">
            We specialize in creating bespoke residential environments that serve as
            personal sanctuaries. Our approach emphasizes quiet luxury, high-quality
            materiality, and impeccable spatial flow.
          </p>

          {/* SERVICES */}
          <div className="space-y-4 pt-2">
            {subServices.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 font-medium"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-sm border border-amber-200 dark:border-amber-500/30 text-amber-500">
                  <FaCheck size={12} />
                </div>

                {service}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentialDetail;