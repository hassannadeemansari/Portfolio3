"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
  "Node.js", "Tailwind CSS", "streamlit", "Sanity", "Shadcn", "GSAP",
  "AI Agents", "Agent SDK", "Chainlit" , "Figma"
];

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveSkill(index);
    setTimeout(() => setActiveSkill(null), 700); // Reset after animation ends
  };

  return (
    <section className="min-h-screen bg-[#0b0014] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a fresher developer with many outstanding practice projects and
            currently learning in the{" "}
            <span className="text-pink-500 font-semibold">
              Governor Initiative for Artificial Intelligence
            </span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My passion is creating{" "}
            <span className="text-pink-500 font-semibold">
              interactive, responsive, modern web applications and autonomous things
            </span>{" "}
            while continuously learning the latest tools and frameworks.
          </p>
        </motion.div>

        {/* ✅ RIGHT SIDE - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg"
              onClick={() => handleClick(i)}
            >
              <button className="relative z-10 w-full px-4 py-2 text-lg font-semibold border border-pink-500 rounded-lg bg-transparent text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500">
                {skill}
              </button>

              {/* ✅ Shine Effect Works on Hover + Click */}
              <span
                className={`absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 ease-in-out
                  group-hover:left-[100%] ${activeSkill === i ? "left-[100%]" : ""}`}
              ></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
