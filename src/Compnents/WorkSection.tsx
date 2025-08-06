<<<<<<< HEAD
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    title: "Netflix Clone", 
    img: "/netflix.PNG", 
    link: "https://netflix-clone22.vercel.app/",
    description: "A fully responsive Netflix replica with movie browsing, trailers, and user authentication.",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TMDB API"]
  },
  { 
    title: "Agentia World", 
    img: "/agentia.PNG", 
    link: "https://agentia-world-umber.vercel.app/",
    description: "Digital agency website showcasing services and client portfolio with modern animations.",
    tech: ["React", "GSAP", "Framer Motion", "CSS Modules"]
  },
  { 
    title: "Infonet Services", 
    img: "/infonet.PNG", 
    link: "https://info-services.vercel.app/",
    description: "IT solutions provider website with service catalog and client dashboard.",
    tech: ["Next.js", "TypeScript", "Chakra UI", "Stripe"]
  },
  { 
    title: "Food Truck", 
    img: "/food.PNG", 
    link: "https://food-tuck-beta.vercel.app/",
    description: "Online ordering system for food trucks with real-time menu updates.",
    tech: ["React", "Redux", "Node.js", "MongoDB"]
  },
  { 
    title: "Developer Portfolio", 
    img: "/portfolio.PNG", 
    link: "https://hassan-nadeem.vercel.app/",
    description: "Personal portfolio featuring projects, skills, and contact information.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"]
  },
  { 
    title: "AI Group", 
    img: "/aigroup.PNG", 
    link: "https://aigroup.sg/",
    description: "Corporate website for AI solutions provider with interactive demos.",
    tech: ["Wordpress", "Schemas"]
  },
  {
    title: "Personal Library Manager", 
    img: "/library-manager.PNG", 
    link: "https://library-manager2.streamlit.app/",
    description: "A digital bookshelf for organizing your reading journey. Track books you've read, currently reading, and want to read with ratings and reviews. Features search, filtering, and reading statistics.",
    tech: ["Python", "Streamlit", "SQLite", "Plotly"]
  },
  {
    title: "Password Strength Guardian", 
    img: "/image.png", 
    link: "https://password-str-checker.streamlit.app/",
    description: "Advanced security tool that analyzes password vulnerability using entropy calculation and pattern recognition. Provides real-time strength feedback and generates uncrackable passwords.",
    tech: ["Python", "Streamlit", "Cryptography", "Regex", "Security Algorithms"]
  },
  {
    title: "Digital Voting Booth", 
    img: "/booth.PNG", 
    link: "https://voting-booth.streamlit.app/",
    description: "Secure online voting system with encrypted ballots and real-time results visualization. Implements voter authentication and fraud detection mechanisms for trustworthy elections.",
    tech: ["Python", "Streamlit", "OOPS" , "Regex"]
  }
];

export default function WorkSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0014] to-[#1a0630] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              onClick={() => setSelected(i)}
            >
              <div className="border-2 border-purple-500/30 rounded-2xl overflow-hidden bg-gradient-to-br from-[#13072e] to-[#0d0430] h-full">
                <div className="overflow-hidden h-60 relative">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <button className="bg-white text-purple-900 px-4 py-2 rounded-full font-bold transform group-hover:translate-y-0 translate-y-4 transition-transform">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Desktop Modal */}
<motion.div
  className="hidden md:flex fixed inset-0 bg-black/90 backdrop-blur-lg z-50 items-center justify-center p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <motion.div
    className="relative max-w-4xl w-full bg-gradient-to-br from-[#13072e] to-[#0d0430] border-2 border-purple-500/30 rounded-3xl overflow-hidden"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "spring", damping: 25 }}
  >
    <button
      className="absolute top-4 right-4 z-10 flex items-center justify-center bg-purple-900 text-white rounded-full w-10 h-10 text-2xl hover:bg-purple-700"
      onClick={() => setSelected(null)}
    >
      &times;
    </button>

    <div className="relative h-96">
      <Image src={projects[selected].img} alt={projects[selected].title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#13072e] via-transparent to-transparent" />
    </div>

    <div className="p-8">
      <h3 className="text-3xl font-bold mb-4 text-white">{projects[selected].title}</h3>
      <p className="text-gray-300 mb-8 text-lg">{projects[selected].description}</p>

      <motion.a
        href={projects[selected].link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Visit Live Site
      </motion.a>
    </div>
  </motion.div>
</motion.div>


            {/* Mobile Center Popup */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#13072e] to-[#0d0430] rounded-2xl p-6 w-[90%] max-h-[85vh] overflow-y-auto border-2 border-purple-500/30"
                initial={{ y: "100%", scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: "100%", scale: 0.8 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button
                  className="absolute top-3 right-3 z-10 flex items-center justify-center bg-purple-900 text-white rounded-full w-10 h-10 text-2xl hover:bg-purple-700"
                  onClick={() => setSelected(null)}
                >
                  &times;
                </button>

                <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                  <Image src={projects[selected].img} alt={projects[selected].title} fill className="object-cover" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{projects[selected].title}</h3>
                <p className="text-gray-300 mb-4">{projects[selected].description}</p>

                <motion.a
                  href={projects[selected].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Live Site
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
=======
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  { 
    title: "Netflix Clone", 
    img: "/netflix.PNG", 
    link: "https://netflix-clone22.vercel.app/",
    description: "A fully responsive Netflix replica with movie browsing, trailers, and user authentication.",
    tech: ["Next.js", "Tailwind CSS", "Firebase", "TMDB API"]
  },
  { 
    title: "Agentia World", 
    img: "/agentia.PNG", 
    link: "https://agentia-world-umber.vercel.app/",
    description: "Digital agency website showcasing services and client portfolio with modern animations.",
    tech: ["React", "GSAP", "Framer Motion", "CSS Modules"]
  },
  { 
    title: "Infonet Services", 
    img: "/infonet.PNG", 
    link: "https://info-services.vercel.app/",
    description: "IT solutions provider website with service catalog and client dashboard.",
    tech: ["Next.js", "TypeScript", "Chakra UI", "Stripe"]
  },
  { 
    title: "Food Truck", 
    img: "/food.PNG", 
    link: "https://food-tuck-beta.vercel.app/",
    description: "Online ordering system for food trucks with real-time menu updates.",
    tech: ["React", "Redux", "Node.js", "MongoDB"]
  },
  { 
    title: "Developer Portfolio", 
    img: "/portfolio.PNG", 
    link: "https://hassan-nadeem.vercel.app/",
    description: "Personal portfolio featuring projects, skills, and contact information.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"]
  },
  { 
    title: "AI Group", 
    img: "/aigroup.PNG", 
    link: "https://aigroup.sg/",
    description: "Corporate website for AI solutions provider with interactive demos.",
    tech: ["Wordpress", "Schemas"]
  },
  {
    title: "Personal Library Manager", 
    img: "/library-manager.PNG", 
    link: "https://library-manager2.streamlit.app/",
    description: "A digital bookshelf for organizing your reading journey. Track books you've read, currently reading, and want to read with ratings and reviews. Features search, filtering, and reading statistics.",
    tech: ["Python", "Streamlit", "SQLite", "Plotly"]
  },
  {
    title: "Password Strength Guardian", 
    img: "/image.png", 
    link: "https://password-str-checker.streamlit.app/",
    description: "Advanced security tool that analyzes password vulnerability using entropy calculation and pattern recognition. Provides real-time strength feedback and generates uncrackable passwords.",
    tech: ["Python", "Streamlit", "Cryptography", "Regex", "Security Algorithms"]
  },
  {
    title: "Digital Voting Booth", 
    img: "/booth.PNG", 
    link: "https://voting-booth.streamlit.app/",
    description: "Secure online voting system with encrypted ballots and real-time results visualization. Implements voter authentication and fraud detection mechanisms for trustworthy elections.",
    tech: ["Python", "Streamlit", "OOPS" , "Regex"]
  }
];

export default function WorkSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0014] to-[#1a0630] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              onClick={() => setSelected(i)}
            >
              <div className="border-2 border-purple-500/30 rounded-2xl overflow-hidden bg-gradient-to-br from-[#13072e] to-[#0d0430] h-full">
                <div className="overflow-hidden h-60 relative">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
                <button className="bg-white text-purple-900 px-4 py-2 rounded-full font-bold transform group-hover:translate-y-0 translate-y-4 transition-transform">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            {/* Desktop Modal */}
<motion.div
  className="hidden md:flex fixed inset-0 bg-black/90 backdrop-blur-lg z-50 items-center justify-center p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  <motion.div
    className="relative max-w-4xl w-full bg-gradient-to-br from-[#13072e] to-[#0d0430] border-2 border-purple-500/30 rounded-3xl overflow-hidden"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ type: "spring", damping: 25 }}
  >
    <button
      className="absolute top-4 right-4 z-10 flex items-center justify-center bg-purple-900 text-white rounded-full w-10 h-10 text-2xl hover:bg-purple-700"
      onClick={() => setSelected(null)}
    >
      &times;
    </button>

    <div className="relative h-96">
      <Image src={projects[selected].img} alt={projects[selected].title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#13072e] via-transparent to-transparent" />
    </div>

    <div className="p-8">
      <h3 className="text-3xl font-bold mb-4 text-white">{projects[selected].title}</h3>
      <p className="text-gray-300 mb-8 text-lg">{projects[selected].description}</p>

      <motion.a
        href={projects[selected].link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Visit Live Site
      </motion.a>
    </div>
  </motion.div>
</motion.div>


            {/* Mobile Center Popup */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-gradient-to-br from-[#13072e] to-[#0d0430] rounded-2xl p-6 w-[90%] max-h-[85vh] overflow-y-auto border-2 border-purple-500/30"
                initial={{ y: "100%", scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: "100%", scale: 0.8 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <button
                  className="absolute top-3 right-3 z-10 flex items-center justify-center bg-purple-900 text-white rounded-full w-10 h-10 text-2xl hover:bg-purple-700"
                  onClick={() => setSelected(null)}
                >
                  &times;
                </button>

                <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                  <Image src={projects[selected].img} alt={projects[selected].title} fill className="object-cover" />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{projects[selected].title}</h3>
                <p className="text-gray-300 mb-4">{projects[selected].description}</p>

                <motion.a
                  href={projects[selected].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Live Site
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}


























// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const projects = [
//  { 
//     title: "Netflix Clone", 
//     img: "/netflix.PNG", 
//     link: "https://netflix-clone22.vercel.app/",
//     description: "A fully responsive Netflix replica with movie browsing, trailers, and user authentication.",
//     tech: ["Next.js", "Tailwind CSS", "Firebase", "TMDB API"]
//   },
//   { 
//     title: "Agentia World", 
//     img: "/agentia.PNG", 
//     link: "https://agentia-world-umber.vercel.app/",
//     description: "Digital agency website showcasing services and client portfolio with modern animations.",
//     tech: ["React", "GSAP", "Framer Motion", "CSS Modules"]
//   },
//   { 
//     title: "Infonet Services", 
//     img: "/infonet.PNG", 
//     link: "https://info-services.vercel.app/",
//     description: "IT solutions provider website with service catalog and client dashboard.",
//     tech: ["Next.js", "TypeScript", "Chakra UI", "Stripe"]
//   },
//   { 
//     title: "Food Truck", 
//     img: "/food.PNG", 
//     link: "https://food-tuck-beta.vercel.app/",
//     description: "Online ordering system for food trucks with real-time menu updates.",
//     tech: ["React", "Redux", "Node.js", "MongoDB"]
//   },
//   { 
//     title: "Developer Portfolio", 
//     img: "/portfolio.PNG", 
//     link: "https://hassan-nadeem.vercel.app/",
//     description: "Personal portfolio featuring projects, skills, and contact information.",
//     tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Three.js"]
//   },
//   { 
//     title: "AI Group", 
//     img: "/aigroup.PNG", 
//     link: "https://aigroup.sg/",
//     description: "Corporate website for AI solutions provider with interactive demos.",
//     tech: ["Wordpress", "Schemas"]
//   },
//   {
//   title: "Personal Library Manager", 
//   img: "/library-manager.PNG", 
//   link: "https://library-manager2.streamlit.app/",
//   description: "A digital bookshelf for organizing your reading journey. Track books you've read, currently reading, and want to read with ratings and reviews. Features search, filtering, and reading statistics.",
//   tech: ["Python", "Streamlit", "SQLite", "Plotly"]
// },
// {
//   title: "Password Strength Guardian", 
//   img: "/image.PNG", 
//   link: "https://password-str-checker.streamlit.app/",
//   description: "Advanced security tool that analyzes password vulnerability using entropy calculation and pattern recognition. Provides real-time strength feedback and generates uncrackable passwords.",
//   tech: ["Python", "Streamlit", "Cryptography", "Regex", "Security Algorithms"]
// },
// {
//   title: "Digital Voting Booth", 
//   img: "/booth.PNG", 
//   link: "https://voting-booth.streamlit.app/",
//   description: "Secure online voting system with encrypted ballots and real-time results visualization. Implements voter authentication and fraud detection mechanisms for trustworthy elections.",
//   tech: ["Python", "Streamlit", "OOPS" , "Regex"]
// }];

// export default function WorkSection() {
//   const [selected, setSelected] = useState<number | null>(null);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
//   const trailId = useRef(0);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
      
//       // Add new position to trail
//       const newId = trailId.current++;
//       setTrail(prev => [...prev.slice(-14), { x: e.clientX, y: e.clientY, id: newId }]);
//     };

//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener("mousemove", handleMouseMove);
      
//       // Clear trail when mouse leaves section
//       section.addEventListener("mouseleave", () => setTrail([]));
      
//       return () => {
//         section.removeEventListener("mousemove", handleMouseMove);
//         section.removeEventListener("mouseleave", () => setTrail([]));
//       };
//     }
//   }, []);

//   return (
//     <section 
//       ref={sectionRef}
//       className="min-h-screen bg-gradient-to-br from-[#0b0014] to-[#1a0630] py-20 px-4 relative overflow-hidden"
//     >
//       {/* Animated Cursor Trail */}
//       {trail.map((pos, i) => (
//         <motion.div
//           key={pos.id}
//           className="absolute w-4 h-4 rounded-full pointer-events-none"
//           style={{
//             left: pos.x,
//             top: pos.y,
//             background: `radial-gradient(circle, rgba(180, 70, 255, ${0.8 - i*0.05}) 0%, transparent 70%)`,
//             transform: `translate(-50%, -50%) scale(${1 - i*0.07})`,
//             zIndex: 10,
//           }}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ 
//             opacity: 0.8 - i*0.05,
//             scale: 1 - i*0.07
//           }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.1 }}
//         />
//       ))}

//       {/* Floating Particles Background */}
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-purple-500/20 pointer-events-none"
//           style={{
//             width: Math.random() * 15 + 5,
//             height: Math.random() * 15 + 5,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//           }}
//           animate={{
//             y: [0, Math.random() * 40 - 20],
//             x: [0, Math.random() * 40 - 20],
//           }}
//           transition={{
//             duration: Math.random() * 4 + 3,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.h2 
//           className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Featured Projects
//         </motion.h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               className="relative rounded-2xl overflow-hidden cursor-pointer group"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               whileHover={{ y: -10 }}
//               transition={{ 
//                 delay: i * 0.1,
//                 duration: 0.5,
//                 type: "spring"
//               }}
//               onClick={() => setSelected(i)}
//             >
//               {/* Project Card */}
//               <div className="border-2 border-purple-500/30 rounded-2xl overflow-hidden bg-gradient-to-br from-[#13072e] to-[#0d0430] h-full">
//                 <div className="overflow-hidden h-60 relative">
//                   <Image
//                     src={project.img}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-80" />
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2 text-purple-300">{project.title}</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.slice(0, 3).map((tech, idx) => (
//                       <span 
//                         key={idx} 
//                         className="text-xs bg-purple-900/50 text-purple-300 px-2 py-1 rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity p-6">
//                 <button className="bg-white text-purple-900 px-4 py-2 rounded-full font-bold transform group-hover:translate-y-0 translate-y-4 transition-transform">
//                   View Details
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
      
//       {/* Project Detail Modal */}
//       <AnimatePresence>
//         {selected !== null && (
//           <motion.div 
//             className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div 
//               className="relative max-w-4xl w-full bg-gradient-to-br from-[#13072e] to-[#0d0430] border-2 border-purple-500/30 rounded-3xl overflow-hidden"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//             >
//               <button 
//                 className="absolute top-6 right-6 text-white z-10 bg-purple-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
//                 onClick={() => setSelected(null)}
//               >
//                 &times;
//               </button>
              
//               <div className="relative h-96">
//                 <Image
//                   src={projects[selected].img}
//                   alt={projects[selected].title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#13072e] via-transparent to-transparent" />
//               </div>
              
//               <div className="p-8">
//                 <div className="flex flex-wrap gap-4 mb-6">
//                   {projects[selected].tech.map((tech, idx) => (
//                     <span 
//                       key={idx} 
//                       className="bg-purple-900/50 text-purple-300 px-3 py-1.5 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <h3 className="text-3xl font-bold mb-4 text-white">
//                   {projects[selected].title}
//                 </h3>
                
//                 <p className="text-gray-300 mb-8 text-lg leading-relaxed">
//                   {projects[selected].description}
//                 </p>
                
//                 <div className="flex flex-wrap gap-4">
//                   <motion.a
//                     href={projects[selected].link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Visit Live Site
//                   </motion.a>
                  
//                   <motion.button
//                     className="text-white border border-purple-500 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-purple-900/50 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setSelected(null)}
//                   >
//                     Close Preview
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
>>>>>>> 2bf7823 (updated portfolio)
