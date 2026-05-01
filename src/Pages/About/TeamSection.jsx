import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import owner1 from "../../../public/Images/owners/o1.jpg";
import owner2 from "../../../public/Images/owners/o2.jpg";
import owner3 from "../../../public/Images/owners/o3.jpg";
import owner4 from "../../../public/Images/owners/04.png";
const team = [
  {
    name: "Alexia Lumière",
    role: "Principal Designer",
    image: owner1,
  },
  {
    name: "Marcus Vane",
    role: "Lead Architect",
    image: owner2,
  },
  {
    name: "Isabella Thorne",
    role: "Creative Director",
    image: owner3,
  },
  {
    name: "Julian Brooks",
    role: "Project Manager",
    image: owner4,
  },
];

const TeamSection = () => {
  return (
    <section
      id="team-section"
      className="py-18 md:py-32 px-6 sm:px-12 bg-[#FFF8F1] dark:bg-[#18110D]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-semibold uppercase tracking-[0.28em] text-xs"
          >
            Behind The Designs
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
          >
            Meet Our Experts
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 dark:text-neutral-400"
          >
            A passionate team of designers, architects, and creators crafting
            luxurious spaces with timeless elegance.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden  bg-white dark:bg-[#241913] shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-3/4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="text-amber-400 text-[11px] font-semibold uppercase tracking-[0.25em] mt-2">
                  {member.role}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-5 opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                  {[FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition cursor-pointer"
                    >
                      <Icon size={14} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
