import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import cta from "../../../public/Images/cta.jpg";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const FinalCTA = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async (data) => {
    try {
      setLoading(true);

      await axios.post("https://roomora-interiors-server.vercel.app/newsletter", data);

      toast("Thank you for joining our design journal.");
      reset();
    } catch {
      toast("Subscription failed.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={cta}
          alt="Luxury Interior"
          className="w-full h-full"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-900/70 dark:bg-black/80 " />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 text-center space-y-14">
        {/* Title */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Ready to build your{" "}
            <span className="text-amber-400">masterpiece</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-300 text-base md:text-lg font-light"
          >
            Contact us today to schedule a consultation with our lead designers
            and start your transformation journey.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => {
              navigate("/contact", {
                state: {
                  message:
                    "Hello, I'm interested in starting a luxury interior design project and would like to schedule a consultation.",
                },
              });
            }}
            className="mt-4 bg-amber-500 text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-amber-600 transition-all duration-300 cursor-pointer"
          >
            Get Started Now
          </motion.button>
        </div>

        {/* Newsletter */}
        <div className="pt-16 border-t border-white/80 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-white font-bold text-xl">Newsletter</h4>
            <p className="text-neutral-400 text-sm">
              Get design inspiration and studio updates.
            </p>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit(onSubscribe)}
            className="relative w-full md:w-1/2"
          >
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="w-full bg-neutral-800/50 border border-neutral-700 px-6 py-4 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 bg-amber-500 hover:bg-amber-600 px-6 text-white flex items-center justify-center transition disabled:opacity-50"
            >
              {loading ? ".~." : <FaPaperPlane size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
