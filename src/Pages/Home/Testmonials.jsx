import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Lumière transformed our house into a home we never want to leave. Their attention to detail and ability to understand our aesthetic was unparalleled.",
    author: "Sarah Johnson",
    role: "Private Homeowner",
    rating: 5,
  },
  {
    quote:
      "The team at Lumière managed our office redesign with absolute professionalism. The result was a functional, yet stunning workspace that our clients always admire.",
    author: "David Chen",
    role: "CEO, TechSphere",
    rating: 5,
  },
  {
    quote:
      "Excellence redefined. From the first consultation to the final handover, the process was seamless and the results exceeded our wildest expectations.",
    author: "Elena Rodriguez",
    role: "Luxury Real Estate Developer",
    rating: 5,
  },
  {
    quote:
      "From concept to completion, every detail was handled with precision. The design team truly understood our vision and elevated it beyond expectations.",
    author: "James Walker",
    role: "Hotel Owner",
    rating: 5,
  },
  {
    quote:
      "A perfect blend of creativity and functionality. Our villa now feels like a modern masterpiece thanks to their incredible design approach.",
    author: "Ayesha Rahman",
    role: "Villa Owner",
    rating: 5,
  },
  {
    quote:
      "They didn’t just design a space, they created an experience. Every corner of our office now reflects our brand identity perfectly.",
    author: "Michael Brown",
    role: "Creative Director, Brandify",
    rating: 5,
  },
  {
    quote:
      "Highly professional, deeply creative, and extremely detail-oriented. The final outcome speaks for itself — pure elegance.",
    author: "Sophia Martinez",
    role: "Interior Client",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 px-6 sm:px-12 bg-[#F6F1EA] dark:bg-[#221a14] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Quote Icon */}
        <FaQuoteLeft className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 text-amber-200/60 dark:text-amber-500/15 w-16 h-16 md:w-24 md:h-24" />

        <div className="min-h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="space-y-8 md:space-y-10"
            >
              {/* Quote */}
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed italic px-2">
                "{testimonials[index].quote}"
              </p>

              {/* Rating + Author */}
              <div className="space-y-4">
                <div className="flex justify-center gap-1 text-amber-500">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                    {testimonials[index].author}
                  </h4>

                  <p className="text-amber-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] mt-2">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-10 md:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-amber-500 w-8"
                  : "bg-neutral-300 dark:bg-neutral-700 w-2 hover:bg-amber-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
