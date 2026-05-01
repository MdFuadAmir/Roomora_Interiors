import { motion } from "framer-motion";
import ProjectHero from "./ProjectHero";
import ProjectContent from "./ProjectContent";
import VideoTour from "./VideoTour";
import ProjectTestmonials from "./ProjectTestmonials";
import SEO from "../../Utils/SEO";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title="Projects"
        description="Browse Roomora Interiors' portfolio of luxury residential, commercial, and bespoke interior design projects."
        keywords="luxury interior projects, architecture portfolio, roomora projects"
      />
      <ProjectHero />
      <ProjectContent />
      <VideoTour />
      <ProjectTestmonials />
    </motion.div>
  );
};

export default Projects;
