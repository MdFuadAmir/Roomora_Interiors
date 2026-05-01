import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";

const plans = [
  {
    name: "Consultation",
    price: "$5k",
    features: [
      "Space Assessment",
      "Material Curation",
      "3D Mood Boards",
      "Expert Styling Tips",
      "Color Palette Planning",
      "Lighting Guidance",
      "Budget Planning",
    ],
    popular: false,
  },
  {
    name: "Executive",
    price: "$25k+",
    features: [
      "Full Project Design",
      "Technical Blueprints",
      "Vendor Management",
      "Construction Oversight",
      "Furniture Curation",
      "Site Supervision",
      "3D Visualization",
      "Project Timeline Control",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "Custom",
    features: [
      "Multi-location Design",
      "Priority Delivery",
      "Bespoke Furniture",
      "On-site Concierge",
      "Lifetime Support",
      "Luxury Material Sourcing",
      "Global Design Consultation",
    ],
    popular: false,
  },
];

const PricingPackages = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 md:py-32 px-6 sm:px-12 bg-[#FAF9F6] dark:bg-[#121212] transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h4 className="text-amber-500 font-semibold uppercase tracking-[0.3em] text-xs">
            Investment
          </h4>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Design Frameworks
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 md:p-12 border flex flex-col h-full relative overflow-hidden transition-all duration-500 backdrop-blur-sm ${
                plan.popular
                  ? "border-amber-500 shadow-xl scale-105 z-10 bg-white dark:bg-white/5"
                  : "border-neutral-200 dark:border-white/10 hover:border-amber-400 bg-white dark:bg-white/5"
              }`}
            >
              {/* POPULAR TAG */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}

              {/* TITLE */}
              <div className="space-y-2 mb-10 text-center">
                <h3 className="text-lg font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                  {plan.name}
                </h3>

                <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                  {plan.price}
                </div>

                <p className="text-xs text-neutral-400 italic">Starting from</p>
              </div>

              {/* FEATURES */}
              <div className="space-y-4 grow">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-300 items-start"
                  >
                    <FaCheck
                      size={14}
                      className="text-amber-500 mt-1 shrink-0"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => {
                  navigate("/contact", {
                    state: {
                      plan: {
                        name: plan.name,
                        price: plan.price,
                        features: plan.features,
                      },
                    },
                  });
                }}
                className={`mt-12 w-full py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all rounded-md ${
                  plan.popular
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-black hover:opacity-80"
                    : "bg-amber-50 dark:bg-white/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500 hover:text-white"
                }`}
              >
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
