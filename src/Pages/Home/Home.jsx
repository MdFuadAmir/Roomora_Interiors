import SEO from "../../Utils/SEO";
import AboutBrief from "./AboutBrief";
import BrandMarquee from "./BrandMarquee";
import FeaturedProjects from "./FeaturedProjects";
import FinalCTA from "./FinalCTA";
import Hero from "./Hero";
import ServicesBrief from "./ServicesBrief";
import Stats from "./Stats";
import Testmonials from "./Testmonials";
import WorkProcess from "./WorkProcess";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title="Roomora Interior Design Studio"
        description="Roomora Interiors creates timeless luxury interiors, architecture, and bespoke design experiences for modern living."
        keywords="luxury interior design, modern architecture, roomora interiors, residential design"
      />
      <Hero />
      <Stats />
      <AboutBrief />
      <ServicesBrief />
      <FeaturedProjects />
      <WorkProcess />
      <Testmonials />
      <BrandMarquee />
      <FinalCTA />
    </motion.div>
  );
};

export default Home;
