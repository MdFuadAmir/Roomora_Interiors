/* eslint-disable react-hooks/set-state-in-effect */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdModeNight } from "react-icons/md";

const DarkMood = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.add("theme-transition");

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    root.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      className="
    relative
    w-10 h-10
    flex items-center justify-center
    rounded-xl
    overflow-hidden

    /* LIGHT MODE */
    bg-[#f6f1ea]
    border border-neutral-300/40

    /* DARK MODE */
    dark:bg-[#221a14]
    dark:border-white/10

    shadow-sm
    backdrop-blur-xl
    transition-colors duration-300
  "
    >
      {/* soft ambient glow */}
      <span
        className="
    absolute inset-0
    bg-amber-400/10
    blur-md
  "
      />

      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="light"
            initial={{ opacity: 0, scale: 0.6, rotate: -60 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 60 }}
            transition={{ duration: 0.25 }}
            className="text-amber-400 text-lg z-10"
          >
            <CiLight />
          </motion.div>
        ) : (
          <motion.div
            key="dark"
            initial={{ opacity: 0, scale: 0.6, rotate: 60 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: -60 }}
            transition={{ duration: 0.25 }}
            className="text-neutral-700 dark:text-neutral-200 text-lg z-10"
          >
            <MdModeNight />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkMood;
