
"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Python", "React.js", "Next.js",
  "Node.js", "Tailwind CSS", "streamlit", "Sanity", "WordPress", "Shadcn", "GSAP",
  "AI Agents", "Agent SDK", "Chainlit", "Figma"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.8, 0.25, 1], // smooth cubic-bezier
    },
  },
};

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveSkill(index);
    setTimeout(() => setActiveSkill(null), 700);
  };

  return (
    <section className="min-h-screen bg-[#0b0014] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
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

        {/* ✅ RIGHT SIDE - 3D Skills */}
        <motion.div
          style={{ perspective: "1200px" }} // Gives 3D depth
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0px 15px 25px rgba(255, 105, 180, 0.4)",
                transition: { duration: 0.4 },
              }}
              className="group relative overflow-hidden rounded-xl border border-pink-400 "
              onClick={() => handleClick(i)}
            >
              <button className="relative z-10 w-full px-4 py-3 text-lg font-semibold text-white">
                {skill}
              </button>

              {/* ✅ Shine Effect */}
              <span
                className={`absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 ease-in-out
                  group-hover:left-[100%] ${activeSkill === i ? "left-[100%]" : ""}`}
              ></span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

