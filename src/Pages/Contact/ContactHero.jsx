import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="pt-30 pb-18 px-6 sm:px-12 bg-amber-50/50 dark:bg-[#0A0A0A] transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <div className="space-y-6 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-amber-600 font-semibold uppercase tracking-[0.4em] text-xs"
          >
            Inquiry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            Get In <span className="text-amber-600 italic">Touch</span>
          </motion.h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-amber-200 dark:border-white/10">
          {[
            { icon: FaPhone, label: "Phone", val: "+880 1705470131" },
            { icon: FaEnvelope, label: "Email", val: "mdfuadamir@gmail.com" },
            {
              icon: FaMapMarkerAlt,
              label: "Main Office",
              val: "Kushtia Kataikhana mor,Kushtia 7000",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-6 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white dark:bg-white/5 border border-amber-100 dark:border-white/10 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm rounded-md">
                <item.icon size={20} />
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {item.val}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
