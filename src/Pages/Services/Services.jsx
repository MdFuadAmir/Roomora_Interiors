import { motion } from "framer-motion";
import ServiceHero from "./ServiceHero";
import ResidentialDetail from "./ResidentialDetail";
import CommercialDetail from "./CommercialDetail";
import PricingPackages from "./PricingPackages";
import ServiceFAQ from "./ServiceFAQ";
import SEO from "../../Utils/SEO";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <SEO
        title="Our Services"
        description="Explore premium interior design, architectural planning, commercial design, and bespoke consultation services."
        keywords="interior design services, architectural planning, commercial interiors"
      />
      <ServiceHero />
      <ResidentialDetail />
      <CommercialDetail />
      <PricingPackages />
      <ServiceFAQ />
    </motion.div>
  );
};

export default Services;
