import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (!state) return;

    // CASE 1
    if (state.message) {
      setValue("message", state.message);
      return;
    }
    // CASE 2
    if (state.plan) {
      const message = `Hi, I am interested in the "${state.plan.name}" package (${state.plan.price}).

Features:
${state.plan.features.map((f) => `• ${f}`).join("\n")}

Please contact me.`;

      setValue("message", message);
    }
  }, [state, setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await axios.post(
        "https://roomora-interiors-server.vercel.app/send-email",
        data,
      );

      toast("Message sent successfully!");
      reset();
    } catch {
      toast("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-10 relative"
    >
      {/* Heading */}
      <div className="space-y-4">
        <h4 className="text-amber-600 font-semibold uppercase tracking-[0.3em] text-xs">
          Send a message
        </h4>

        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Project Inquiry
        </h2>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* NAME */}
        <div className="border-b border-neutral-300 dark:border-neutral-700 focus-within:border-amber-500 py-2">
          <label className="text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
            Full Name
          </label>
          <input
            {...register("name")}
            placeholder="John Doe"
            className="w-full bg-transparent outline-none text-sm font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
          />
        </div>

        {/* EMAIL */}
        <div className="border-b border-neutral-300 dark:border-neutral-700 focus-within:border-amber-500 py-2">
          <label className="text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="john@example.com"
            className="w-full bg-transparent outline-none text-sm font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
          />
        </div>

        {/* TYPE */}
        <div className="border-b border-neutral-300 dark:border-neutral-700 focus-within:border-amber-500 py-2">
          <label className="text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
            Project Type
          </label>
          <select
            {...register("type")}
            className="w-full bg-transparent outline-none text-sm font-medium text-neutral-900 dark:text-white"
          >
            <option>Residential</option>
            <option>Commercial</option>
            <option>Hospitality</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="border-b border-neutral-300 dark:border-neutral-700 focus-within:border-amber-500 py-2">
          <label className="text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={6}
            placeholder="Tell us your vision..."
            className="w-full bg-transparent outline-none text-sm font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="bg-neutral-900 dark:bg-white text-white dark:text-black px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:opacity-80 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
