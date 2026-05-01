import { motion } from "framer-motion";
import ContactHero from "./ContactHero";
import MapSection from "./MapSection";
import SocialConnect from "./SocialConnect";
import ContactForm from "./ContactForm";
import OfficeLocations from "./OfficeLocations";
import SEO from "../../Utils/SEO";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title="Contact"
        description="Get in touch with Roomora Interiors for luxury design consultations and project inquiries."
        keywords="contact roomora interiors, design consultation"
      />
      <ContactHero />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 px-4 border-t border-gray-400/40 md:px-10 lg:px-20 py-18 md:py-24 bg-amber-50/50 dark:bg-[#0A0A0A]">
        <ContactForm />
        <OfficeLocations />
      </div>
      <MapSection />
      <SocialConnect />
    </motion.div>
  );
};

export default Contact;
