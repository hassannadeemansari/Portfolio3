"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image

const projects = [
  { title: "Netflix Website", img: "/netflix.PNG" },
  { title: "Agentia world Website", img: "/agentia.PNG" },
  { title: "infonet Website", img: "/infonet.PNG" },
  { title: "Food Tuck Website", img: "/food.PNG" },
  { title: "Portfolio Website", img: "/portfolio.PNG" }, // ✅ Added "/" at start
  { title: "aigroup Website", img: "/aigroup.PNG" },
  { title: "personal Library Manger", img: "/library-manager.PNG" },
  { title: "Vooting-booth", img: "/booth.PNG" },
];

export default function WorkSection() {
  return (
    <section className="min-h-screen bg-[#0b0014] text-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden bg-white/10 border border-pink-500 backdrop-blur-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* ✅ Replaced <img> with <Image /> */}
              <Image
                src={project.img}
                alt={project.title}
                width={500} // ✅ You can adjust
                height={300} // ✅ You can adjust
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
