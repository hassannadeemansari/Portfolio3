"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image

export default function AboutSection() {
  return (
    <section className="md:h-[70vh] h-screen bg-[#0b0014] text-white flex items-center justify-center px-6">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >
          <motion.div
            className="relative w-64 h-64 rounded-full border-4 border-purple-900 brightness-80 shadow-xl shadow-purple-500/50 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {/* ✅ Replaced <img> with <Image /> */}
            <Image
              src="/pfp.png"
              alt="Profile"
              width={240}
              height={240}
              className="w-60 h-60 rounded-full object-cover object-top "
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I&apos;m Hassan, a passionate web developer with experience in
            building modern, responsive, and interactive websites using
            Next.js, React, and Tailwind CSS.
          </p>
          <a
            href="/cv.pdf"
            className="px-6 py-3 bg-pink-600 rounded-xl text-lg font-semibold hover:bg-pink-700 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
