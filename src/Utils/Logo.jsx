import { motion } from "framer-motion";
import { Link } from "react-router";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to="/" onClick={scrollToTop}>
      <motion.h1
        whileHover={{ scale: 1.05, letterSpacing: "0.08em" }}
        whileTap={{ scale: 0.95 }}
        className="
          cursor-pointer select-none
          text-2xl md:text-3xl
          font-bold tracking-wide
          text-neutral-900 dark:text-white
          transition-all duration-300
        "
      >
        Roomora
        <span className="text-amber-500 ml-1">.</span>
      </motion.h1>
    </Link>
  );
};

export default Logo;