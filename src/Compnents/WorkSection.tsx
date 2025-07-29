"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link

const projects = [
  { title: "Netflix Website", img: "/netflix.PNG", link: "https://netflix-clone22.vercel.app/" },
  { title: "Agentia world Website", img: "/agentia.PNG", link: https://agentia-world-umber.vercel.app/" },
  { title: "infonet Website", img: "/infonet.PNG", link: "https://info-services.vercel.app/" },
  { title: "Food Tuck Website", img: "/food.PNG", link: "https://food-tuck-beta.vercel.app/" },
  { title: "Portfolio Website", img: "/portfolio.PNG", link: "https://hassan-nadeem.vercel.app/" },
  { title: "aigroup Website", img: "/aigroup.PNG", link: "https://aigroup.sg/" },
  { title: "personal Library Manager", img: "/library-manager.PNG", link: "https://library-manager2.streamlit.app/" },
  { title: "password strength checker", img: "/image.PNG", link: "https://password-str-checker.streamlit.app/" },
  { title: "Voting-booth", img: "/booth.PNG", link: "https://voting-booth.streamlit.app/" },
];

export default function WorkSection() {
  return (
    <section className="min-h-screen bg-[#0b0014] text-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link href={project.link} key={i} target="_blank">
              <motion.div
                className="rounded-xl overflow-hidden bg-white/10 border border-pink-500 backdrop-blur-md cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
