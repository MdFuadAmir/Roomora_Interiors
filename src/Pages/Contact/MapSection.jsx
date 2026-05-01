import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-100 w-full relative overflow-hidden"
    >
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902586850525!2d89.122181!3d23.901258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe96b4b7c3d1e1%3A0x9c3b2c7d1f0a3b22!2sKushtia%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1714394000000!5m2!1sen!2s"
        className="w-full h-full border-0 grayscale contrast-125 brightness-90 dark:brightness-75"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/40 pointer-events-none" />
    </motion.section>
  );
};

export default MapSection;
