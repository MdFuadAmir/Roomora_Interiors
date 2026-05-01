import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import VisionMission from "./VisionMission";
import TeamSection from "./TeamSection";
import HistoryTimeline from "./HistoryTimeline";
import Certifications from "./Certifications";
import SEO from "../../Utils/SEO";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title="About Us"
        description="Discover the vision, values, and creative minds behind Roomora Interiors."
        keywords="about roomora interiors, design studio, luxury architects"
      />
      <AboutHero />
      <VisionMission />
      <TeamSection />
      <HistoryTimeline />
      <Certifications />
    </motion.div>
  );
};

export default About;
