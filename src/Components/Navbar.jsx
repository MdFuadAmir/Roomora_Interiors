import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMood from "../Utils/DarkMood";
import Logo from "../Utils/Logo";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed left-0 w-full z-50">
      <div
        className="
        px-4 md:px-10 lg:px-20
          mx-auto
          backdrop-blur-xl
          bg-[#f6f1ea]/70
          border-b border-neutral-200/40
          shadow-sm
          dark:bg-[#221a14]/60
          dark:border-white/10
          dark:shadow-black/30
        "
      >
        {/* NAVBAR */}
        <div className="flex items-center justify-between py-3">
          <Logo />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition ${
                    isActive
                      ? "text-amber-500"
                      : "text-neutral-600 dark:text-neutral-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <div className="relative">
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeLink"
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-500 rounded-full"
                      />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <DarkMood />

            <button
              onClick={() => navigate("/contact")}
              className="
                hidden md:block
                px-5 py-2
                text-sm font-medium
                bg-black text-white
                hover:bg-amber-600
                transition uppercase
              "
            >
              Inquiry
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl text-neutral-800 dark:text-neutral-200"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="
                mt-3 p-5 rounded-2xl
                bg-[#f6f1ea]/80
                border border-neutral-200/40
                shadow-sm
                dark:bg-[#221a14]/70
                dark:border-white/10
              "
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={i}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition ${
                        isActive
                          ? "text-amber-500"
                          : "text-neutral-600 dark:text-neutral-300"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/contact");
                  }}
                  className="
                    mt-2 py-2
                    text-sm font-medium
                    bg-black text-white
                    hover:bg-amber-600
                    transition uppercase
                  "
                >
                  Inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
