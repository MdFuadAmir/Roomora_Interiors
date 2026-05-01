import { motion } from "framer-motion";
import {
  FaCouch,
  FaPalette,
  FaBuilding,
  FaLightbulb,
  FaRulerCombined,
  FaChair,
} from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Residential Design",
    description:
      "Creating intimate, sophisticated living spaces that blend luxury with comfort and personal style.",
  },
  {
    icon: FaPalette,
    title: "Interior Styling",
    description:
      "Curating textures, colors, and art pieces to bring cohesive elegance to any room in your home.",
  },
  {
    icon: FaRulerCombined,
    title: "Space Planning",
    description:
      "Architectural optimization of spaces to ensure maximum functionality without compromising aesthetic appeal.",
  },
  {
    icon: FaLightbulb,
    title: "Lighting Design",
    description:
      "Expertly crafted lighting systems that transform mood and highlight architectural details.",
  },
  {
    icon: FaCouch,
    title: "Furniture Curation",
    description:
      "Sourcing world-class designer furniture and custom-made pieces tailored to your vision.",
  },
  {
    icon: FaChair,
    title: "Commercial Spaces",
    description:
      "Transforming offices and retail stores into inspiring brand-aligned environments.",
  },
];

const ServicesBrief = () => {
  return (
    <section
      id="services-grid"
      className="py-16 md:py-32 px-6 sm:px-12 bg-[#F1ECE4] dark:bg-[#181818]"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs"
          >
            What We Offer
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Comprehensive Design Solutions
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#222222] p-10 space-y-6 relative group transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-amber-100 dark:bg-[#2d2d2d] flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesBrief;
