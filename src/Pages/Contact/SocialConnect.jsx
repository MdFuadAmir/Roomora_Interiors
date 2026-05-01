import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from "react-icons/fa";

const socialLinks = [
  { icon: FaInstagram, name: "Instagram", handle: "@lumiere.design" },
  { icon: FaLinkedin, name: "LinkedIn", handle: "Lumière Studio" },
  { icon: FaTwitter, name: "Twitter", handle: "@lumiere_dsgn" },
  { icon: FaPinterest, name: "Pinterest", handle: "Lumière Boards" }
];

const SocialConnect = () => {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-12 bg-white dark:bg-[#0A0A0A] transition-colors">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h4 className="text-amber-600 font-semibold uppercase tracking-[0.3em] text-xs">
            Stay Connected
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Follow Our Journey
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-6"
              >
                {/* Icon Circle */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-amber-50 dark:bg-white/5 text-amber-600 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <Icon size={32} />
                  </div>

                  <div className="absolute -inset-2 border border-amber-200 dark:border-white/10 rounded-full scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3 className="font-bold text-neutral-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mt-1">
                    {item.handle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;