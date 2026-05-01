import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

const certificates = [
  {
    name: "ASID Excellence",
    org: "American Society of Interior Designers",
    year: "2023",
  },
  {
    name: "LEED Green Associate",
    org: "U.S. Green Building Council",
    year: "2022",
  },
  {
    name: "IIDA Best of Year",
    org: "Int. Interior Design Association",
    year: "2021",
  },
  {
    name: "Global Design Award",
    org: "Architecture MasterPrize",
    year: "2020",
  },
];

const Certifications = () => {
  return (
    <section className="py-18 md:py-24 px-6 sm:px-12 bg-[#FFF8F1] dark:bg-[#18110D] border-t border-amber-100/40 dark:border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs"
          >
            Trusted Excellence
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white uppercase tracking-tighter"
          >
            Recognitions & Certifications
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                p-8 text-center space-y-4
                bg-white dark:bg-white/5
                border border-amber-100/50 dark:border-white/10
               
                hover:border-amber-400/40
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              <div
                className="
                w-16 h-16 mx-auto flex items-center justify-center
                bg-neutral-900 dark:bg-white/10
                text-amber-500
                group-hover:bg-amber-500 group-hover:text-white
                rounded-full
                transition-all duration-300
              "
              >
                <FaAward size={18} />
              </div>

              <h3 className="font-bold text-neutral-900 dark:text-white">
                {cert.name}
              </h3>

              <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-widest font-semibold">
                {cert.org}
              </p>

              <p className="text-amber-500 text-[11px] font-bold">
                {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
