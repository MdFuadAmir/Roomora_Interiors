import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../Utils/Logo";

const socialLinks = [
  {
    icon: FaInstagram,
    link: "https://instagram.com/yourusername",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/yourusername",
  },
  {
    icon: FaFacebook,
    link: "https://facebook.com/yourusername",
  },
];

const Footer = () => {
  return (
    <footer
      id="main-footer"
      className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white pt-20 pb-10 px-6 sm:px-12 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Logo + About */}
        <div className="space-y-6 col-span-1 md:col-span-2">
          <Logo />

          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
            Crafting sophisticated spaces that reflect your personality and
            elevate your lifestyle. Excellence in every detail, passion in every
            design.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-amber-500">
            Navigation
          </h4>

          <ul className="space-y-4">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-amber-500"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-amber-500">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
            <li>kataikhana mor </li>
            <li>Kushtia, BD 7000</li>
            <li>+880 1705470131</li>
            <li>mdfuadamir@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium tracking-wider uppercase">
        <p>
          &copy; {new Date().getFullYear()} Md Fuad Amir. All Rights Reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
