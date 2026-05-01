import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const OfficeLocations = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="space-y-12"
    >
      {/* Heading */}
      <div className="space-y-4">
        <h4 className="text-amber-600 font-semibold uppercase tracking-[0.3em] text-xs">
          Our Studios
        </h4>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Where we work
        </h2>
      </div>

      {/* Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
        {/* NY */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
            Kushtia City
          </h3>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Kushtia Kataikhana mor
            <br />
            Kushtia, 7000
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kataikhana+Mor+Kushtia+Bangladesh"
            target="_blank"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-600 border-b border-amber-500 pb-1 hover:gap-3 transition-all"
          >
            Get Directions <FaArrowRight />
          </a>
        </div>

        {/* Dubai */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
            Dhaka City
          </h3>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Uttara
            <br />
            Uttara, 1230
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Uttarkhan+Police+Station+Dhaka+Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-600 border-b border-amber-500 pb-1 hover:gap-3 transition-all"
          >
            Get Directions <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Career Box */}
      <div className="bg-amber-50 dark:bg-white/5 p-8 rounded-sm space-y-4 transition-colors">
        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
          Career Inquiries
        </h4>

        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Interested in joining our elite team of designers? We are always
          looking for fresh talent.
        </p>

        <span className="text-sm font-semibold text-amber-600">
          mdfuadamir@gmail.com
        </span>
      </div>
    </motion.div>
  );
};

export default OfficeLocations;
