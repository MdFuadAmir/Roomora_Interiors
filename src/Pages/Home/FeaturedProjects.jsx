import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { projects } from "../../../public/Data/Projects";
import ProjectCard from "../Projects/ProjectCard";

const featuredProjects = [
  { ...projects[0], cols: "md:col-span-2" },
  { ...projects[1], cols: "md:col-span-1" },
  { ...projects[2], cols: "md:col-span-1" },
  { ...projects[3], cols: "md:col-span-2" },
];

const FeaturedProjects = () => {
  return (
    <section
      id="featured-projects"
      className="py-16 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212]"
    >
      <div className="max-w-7xl mx-auto space-y-14 md:space-y-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          {/* Title */}
          <div className="space-y-3 max-w-2xl">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-semibold uppercase tracking-[0.28em] text-[10px] sm:text-xs"
            >
              Masterpieces
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight"
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Button */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              cols={project.cols}
              featured
            />
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to={"/projects"}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group self-start md:self-auto flex items-center gap-3 px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
        >
          Explore All Works
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
