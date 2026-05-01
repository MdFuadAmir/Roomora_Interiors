import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image from "../../../public/Images/q12.jpg";
const CommercialDetail = () => {
  return (
    <section className="py-18 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#0f0f0f] text-neutral-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-2/5 space-y-8"
        >
          <div className="space-y-3">
            <h4 className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">
              Business Spaces
            </h4>

            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
              Commercial Construction
            </h2>
          </div>

          <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed font-light text-base md:text-lg">
            Elevate your brand experience with architectural excellence. We
            design high-performance offices, flagship retail storefronts, and
            hospitality venues that inspire loyalty and productivity.
          </p>

          {/* GRID INFO */}
          <div className="pt-4 grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <h5 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest">
                Office Hubs
              </h5>
              <p className="text-xs text-neutral-600 dark:text-neutral-500">
                Corporate headquarters and creative studios.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest">
                Retail Spaces
              </h5>
              <p className="text-xs text-neutral-600 dark:text-neutral-500">
                Flagship stores and luxury boutique environments.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <a
            href="https://docs.google.com/document/d/12K2cXFu7bpCguwRwaytDKMEsww5fUsbcZP4UmAU-N6E/export?format=pdf"
            className="flex items-center gap-3 text-amber-500 text-xs font-bold uppercase tracking-[0.3em] group transition-all"
          >
            Commercial Brochure
            <FaArrowRight
              size={14}
              className="group-hover:translate-x-2 transition-transform"
            />
          </a>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:w-3/5"
        >
          <div className="aspect-16/10 overflow-hidden rounded-xl shadow-2xl relative">
            <img
              src={image}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Commercial Office"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommercialDetail;
