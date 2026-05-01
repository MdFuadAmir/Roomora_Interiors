import { motion } from "framer-motion";
import img1 from "../../../public/Images/brand/cartier.png";
import img2 from "../../../public/Images/brand/hermes.png";
import img3 from "../../../public/Images/brand/Louis_Vuitton.png";
import img4 from "../../../public/Images/brand/Porsha.png";
import img5 from "../../../public/Images/brand/Rolex.png";
import img6 from "../../../public/Images/brand/icon.png";

const logos = [img1, img2, img3, img4, img5, img6];

const BrandMarquee = () => {
  return (
    <section
      id="brand-marquee"
      className="py-16 md:py-20 border-y border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-black"
    >
      <div className="relative flex">
        <motion.div
          className="flex items-center gap-20 md:gap-28 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="w-32 md:w-40 h-16 md:h-20 flex items-center justify-center
              grayscale opacity-40
              hover:grayscale-0 hover:opacity-100
              transition-all duration-500 cursor-pointer
              dark:invert"
            >
              <img
                src={logo}
                alt={`Brand ${i}`}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandMarquee;
