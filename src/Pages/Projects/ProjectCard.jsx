import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router";

const ProjectCard = ({
  project,
  index = 0,
  cols = "",
  featured = false,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`
        group relative overflow-hidden cursor-pointer
        ${featured ? `h-87 sm:h-105 md:h-125 ${cols}` : "h-112"}
        bg-white dark:bg-white/5
        border border-amber-100/40 dark:border-white/10
      `}
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full h-full object-cover grayscale
          group-hover:grayscale-0
          group-hover:scale-110
          transition-all duration-700
        "
      />

      <div
        className="
          absolute inset-0
          bg-linear-to-t from-black/70 via-black/30 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          flex flex-col justify-center items-center text-center p-6
        "
      >
        <p className="text-amber-400 uppercase tracking-widest text-xs font-bold">
          {project.category}
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
          {project.title}
        </h3>

        <button
          className="
            mt-6 flex items-center gap-2
            bg-white text-black px-5 py-2
            text-[10px] font-bold uppercase tracking-widest
            hover:bg-amber-500 hover:text-white transition
          "
        >
          View Project <FiExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;