import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary significantly based on complexity. A residential renovation typically spans 4-8 months, while larger commercial projects can take 12-18 months including planning.",
  },
  {
    question: "Do you handle the construction phase as well?",
    answer:
      "Yes, we provide full project oversight. We work with our trusted network of elite contractors or collaborate with your preferred builders to ensure the design is executed perfectly.",
  },
  {
    question: "Can I choose specific designers to work on my project?",
    answer:
      "Each project is assigned a Lead Designer based on the project's specific aesthetic needs and their expertise in that particular niche.",
  },
  {
    question: "What geographical areas do you serve?",
    answer:
      "We are based in New York but serve high-end clients globally. For international projects, we conduct initial site visits and subsequent management via regional partners.",
  },
];

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-neutral-200 dark:border-white/10 last:border-0 overflow-hidden">
      <button
        onClick={toggle}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
      >
        <span
          className={`text-lg md:text-xl font-bold transition-colors ${
            isOpen
              ? "text-amber-500"
              : "text-neutral-900 dark:text-white group-hover:text-amber-500"
          }`}
        >
          {question}
        </span>

        <div
          className={`p-2 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-amber-500" : "text-neutral-400"
          }`}
        >
          {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-6"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-18 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-14 md:space-y-16">
        {/* HEADER */}
        <div className="space-y-4 text-center">
          <h4 className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">
            Questions
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Expert Queries
          </h2>
        </div>

        {/* FAQ BOX */}
        <div className="bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/10 p-6 md:p-12  backdrop-blur-sm">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
