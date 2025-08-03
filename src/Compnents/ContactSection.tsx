"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0014] p-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-transparent">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">
            Have any questions or want to work together?  
            Feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
{/*               <Mail className="text-pink-500" /> */}
              <p>hassan@example.com</p>
            </div>
            <div className="flex items-center gap-3">
{/*               <Phone className="text-pink-500" /> */}
              <p>+92 300 1234567</p>
            </div>
            <div className="flex items-center gap-3">
{/*               <MapPin className="text-pink-500" /> */}
              <p>Karachi, Pakistan</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/hassannadeemansari" target="_blank" className="hover:text-pink-500">GitHub</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-pink-500">LinkedIn</a>
            <a href="mailto:hassan@example.com" className="hover:text-pink-500">Email</a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#12001f] border border-pink-600 p-6 rounded-xl shadow-xl space-y-4"
        >
          <h3 className="text-2xl font-bold text-white text-center">Contact Me</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-[#0b1520] text-white border border-pink-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#0b1520] text-white border border-pink-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-[#0b1520] text-white border border-pink-500 focus:outline-none"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md transition-all"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}















// "use client";
// import { useState } from "react";
// import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageSquare } from "lucide-react";

// export default function ContactSection() {
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState<string | null>(null);

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setLoading(true);


//   return (
//     <section className="relative bg-[#0B0014] py-20 px-6 flex justify-center overflow-hidden">
//       {/* 🔥 Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-purple-700/10 to-indigo-800/10 blur-3xl animate-pulse"></div>

//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full relative z-10">
        
//         {/* ✅ Left Side - Contact Info */}
//         <div className="text-white space-y-6 p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,0,150,0.3)]">
//           <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
//             Let's Work Together
//           </h2>
//           <p className="text-gray-300">
//             Have a project idea or need a stunning website? Let’s connect and create something amazing together!
//           </p>

//           {/* Info Cards */}
//           <InfoCard icon={<Mail />} text="hassan@example.com" />
//           <InfoCard icon={<Phone />} text="+92 300 1234567" />
//           <InfoCard icon={<MapPin />} text="Karachi, Pakistan" />

//           {/* ✅ WhatsApp Button */}
//           <a
//             href="https://wa.me/923001234567"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg font-semibold transition shadow-lg animate-pulse hover:scale-105"
//           >
//             <MessageSquare className="text-white" size={20} />
//             Chat on WhatsApp
//           </a>

//           {/* Social Icons */}
//           <div className="flex gap-4 mt-6">
//             <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
//             <SocialIcon href="https://github.com" icon={<Github />} />
//             <SocialIcon href="https://twitter.com" icon={<Twitter />} />
//           </div>
//         </div>

//         {/* ✅ Right Side - Contact Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-[0_0_40px_rgba(255,0,150,0.2)]"
//         >
//           <h3 className="text-2xl font-bold mb-6 text-white">Contact Me</h3>

//           <Input label="Full Name" type="text" onChange={(e:any) => setForm({ ...form, name: e.target.value })} />
//           <Input label="Email" type="email" onChange={(e:any) => setForm({ ...form, email: e.target.value })} />
//           <Input label="Subject" type="text" onChange={(e:any) => setForm({ ...form, subject: e.target.value })} />

//           <div className="mb-4">
//             <label className="block mb-1 font-medium text-white">Message</label>
//             <textarea
//               rows={4}
//               required
//               className="w-full px-4 py-2 border border-pink-400/50 bg-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 text-white"
//               onChange={(e) => setForm({ ...form, message: e.target.value })}
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition shadow-[0_0_20px_rgba(255,0,200,0.6)] hover:scale-105"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {success && (
//             <p className="mt-4 text-green-400 font-medium text-center">{success}</p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }

// /* ✅ Reusable Input Component */
// function Input({ label, type, onChange }: { label: string; type: string; onChange: any }) {
//   return (
//     <div className="mb-4">
//       <label className="block mb-1 font-medium text-white">{label}</label>
//       <input
//         type={type}
//         required
//         className="w-full px-4 py-2 border border-pink-400/50 bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-pink-500"
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// /* ✅ Info Card Component */
// function InfoCard({ icon, text }: { icon: React.ReactNode; text: string }) {
//   return (
//     <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-lg border border-pink-400/50 hover:scale-105 transition">
//       <div className="text-pink-400">{icon}</div>
//       <p>{text}</p>
//     </div>
//   );
// }

// /* ✅ Social Icon Component */
// function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       className="p-3 rounded-full bg-pink-500 hover:bg-purple-600 transition shadow-lg hover:scale-110 hover:rotate-6"
//     >
//       {icon}
//     </a>
//   );
// }




