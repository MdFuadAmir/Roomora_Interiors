import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../public/Data/Projects";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Residential", "Commercial", "Interior"];

const ProjectContent = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section className="py-18 md:py-24 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Filter */}
        <div className="flex flex-wrap gap-4 border-b border-amber-100 dark:border-white/10 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat
                  ? "text-amber-500"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white"
              }`}
            >
              {cat}

              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectContent;
