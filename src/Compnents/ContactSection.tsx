"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-[#0b0014] text-white flex items-center justify-center py-20">
      <div className="max-w-4xl w-full px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 bg-white/10 p-8 rounded-xl backdrop-blur-md border border-pink-500"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-900 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-900 text-white outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg bg-gray-900 text-white outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-pink-600 rounded-xl text-lg font-semibold hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
